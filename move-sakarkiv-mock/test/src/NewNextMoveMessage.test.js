const mockfs = require('mock-fs');
const nock = require('nock');
const chai = require('chai');
const chaiNock = require('chai-nock');
chai.use(chaiNock);
const nextMoveSender = require('../../src/nextMoveSender');


const testAddress = "http://test";
const testArkivmelding = '{mockFile: "arkivmelding.xml"}';
const testPDF = '{mockFile: "test.pdf"}';
const testSBDH= '{SBDH: "content"}';
const testMessageId = 'dummyMessageID';
const mockSBDHResponse = {"standardBusinessDocumentHeader": {"documentIdentification": {"instanceIdentifier": testMessageId}}};


describe('src/nextMoveSenderTest', function() {

    describe('sendNextMoveMessage', function()  {

        let mockSBDHEndpoint;
        let mockPDFEndpoint;
        let mockArkivmeldingEndpoint;
        let mockFinalSendEndpoint;

        beforeEach( () => {

            process.env.IP_URL = testAddress;


            mockfs({
                'src': {
                    'arkivmelding.xml': mockfs.file( {content: testArkivmelding} ),
                    'test.pdf': mockfs.file( {content: testPDF} )
                }
            });

            mockSBDHEndpoint = nock(testAddress)
                .post('/api/messages/out')
                .reply(200, mockSBDHResponse);

            mockPDFEndpoint = nock(testAddress)
                .put('/api/messages/out/' + testMessageId + '?title=test.pdf')
                .reply(200);

            mockArkivmeldingEndpoint = nock(testAddress)
                .put('/api/messages/out/' + testMessageId + '?title=arkivmelding.xml')
                .reply(200);

            mockFinalSendEndpoint = nock(testAddress)
                .post('/api/messages/out/' + testMessageId)
                .reply(200);
        });

        it('Provided SBDH is registered with remote IP', function() {

            nextMoveSender.sendNextMoveMessage(testSBDH)

            return chai.expect(mockSBDHEndpoint).to.have.been.requestedWith(testSBDH)
        });

        it('"src/test.pdf" is uploaded to remote IP', function() {

            nextMoveSender.sendNextMoveMessage(testSBDH)

            return chai.expect(mockPDFEndpoint).to.have.been.requestedWith(testPDF)
        });

        it('"src/arkivmelding.xml" is uploaded to remote IP', function() {

            nextMoveSender.sendNextMoveMessage(testSBDH)

            return  chai.expect(mockArkivmeldingEndpoint).to.have.been.requestedWith(testArkivmelding)
        });

        it('remote IP is instructed to send uploaded files', function() {

            nextMoveSender.sendNextMoveMessage(testSBDH)

            return chai.expect(mockFinalSendEndpoint).to.have.been.requested
        });

    });
});