// const { statusSbd } = require("./sbd");

const moment = require('moment');

function receiptSBD(senderOrgNum, receiverOrgNum, conversationId) {
    return {
        "sbd" : {
            "standardBusinessDocumentHeader": {
                "headerVersion": "1.0",
                "sender": [
                    {
                        "identifier": {
                            "value": senderOrgNum,
                            "authority": "iso6523-actorid-upis"
                        },
                        "contactInformation": []
                    }
                ],
                "receiver": [
                    {
                        "identifier": {
                            "value": receiverOrgNum,
                            "authority": "iso6523-actorid-upis"
                        },
                        "contactInformation": []
                    }
                ],
                "documentIdentification": {
                    "standard": "urn:no:difi:eformidling:xsd::status",
                    "typeVersion": "2.0",
                    "instanceIdentifier": "72721bf0-0f0c-41c7-98d0-bc447bd8a5c6",
                    "type": "status",
                    "creationDateAndTime": new moment()
                },
                "businessScope": {
                    "scope": [
                        {
                            "type": "ConversationId",
                            "instanceIdentifier": conversationId,
                            "identifier": "urn:no:difi:profile:einnsyn:response:ver1.0",
                            "scopeInformation": [
                                {
                                    "expectedResponseDateTime": new moment().add(2, 'hours')
                                }
                            ]
                        }
                    ]
                }
            },
            "status": {
                "status": "MOTTATT"
            }
        }
    }
};

function recieveFile(req, res){

    const payload = JSON.parse(req.rawBody);

    let convId = payload.sbd.standardBusinessDocumentHeader.businessScope.scope["0"].instanceIdentifier;
    let receiverOrgnum = payload.sbd.standardBusinessDocumentHeader.receiver["0"].identifier.value.split(":")[1];
    let senderOrgnum = payload.sbd.standardBusinessDocumentHeader.sender["0"].identifier.value.split(":")[1];
    let serviceIdentifier = payload.sbd.standardBusinessDocumentHeader.documentIdentification.standard;

    let dbMessage = {
        convId: convId,
        sbd: req.rawBody,
        receiverOrgnum: receiverOrgnum,
        senderOrgnum: senderOrgnum,
        serviceIdentifier: serviceIdentifier
    };

    let logMessages = global.messageLog.get('dpe');

    logMessages.push({
        conversationId: convId,
        receiverOrgNum: receiverOrgnum,
        senderOrgNum: senderOrgnum
    });


    // We create
    let receiverMessages = global.dpeDB.get(receiverOrgnum);
    let senderMessages = global.dpeDB.get(senderOrgnum);

    if (receiverMessages){
        receiverMessages.push(dbMessage);
    } else {
        global.dpeDB.set(receiverOrgnum, [ dbMessage ]);
    }


    let statusSbd = {
        sbd: receiptSBD(senderOrgnum, receiverOrgnum, convId),
        convId: convId,
    };

    if (senderMessages){
        senderMessages.push(statusSbd);
    } else {
        global.dpeDB.set(senderOrgnum, [ statusSbd ]);
    }

    res.status(200).send();
}

module.exports = { recieveFile };