function getBasicWSDL () {
    return `<wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:wsam="http://www.w3.org/2007/05/addressing/metadata" xmlns:wsx="http://schemas.xmlsoap.org/ws/2004/09/mex" xmlns:wsap="http://schemas.xmlsoap.org/ws/2004/08/addressing/policy" xmlns:msc="http://schemas.microsoft.com/ws/2005/12/wsdl/contract" xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:tns="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" xmlns:wsa10="http://www.w3.org/2005/08/addressing" xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl" xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing" name="BrokerServiceExternalBasicSF" targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
    <wsdl:types>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://www.altinn.no/services/2009/10" elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/2009/10">
            <xs:element name="Test">
                <xs:complexType>
                    <xs:sequence/>
                </xs:complexType>
            </xs:element>
            <xs:element name="TestResponse">
                <xs:complexType>
                    <xs:sequence/>
                </xs:complexType>
            </xs:element>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://schemas.microsoft.com/2003/10/Serialization/" attributeFormDefault="qualified" elementFormDefault="qualified" targetNamespace="http://schemas.microsoft.com/2003/10/Serialization/">
            <xs:element name="anyType" nillable="true" type="xs:anyType"/>
            <xs:element name="anyURI" nillable="true" type="xs:anyURI"/>
            <xs:element name="base64Binary" nillable="true" type="xs:base64Binary"/>
            <xs:element name="boolean" nillable="true" type="xs:boolean"/>
            <xs:element name="byte" nillable="true" type="xs:byte"/>
            <xs:element name="dateTime" nillable="true" type="xs:dateTime"/>
            <xs:element name="decimal" nillable="true" type="xs:decimal"/>
            <xs:element name="double" nillable="true" type="xs:double"/>
            <xs:element name="float" nillable="true" type="xs:float"/>
            <xs:element name="int" nillable="true" type="xs:int"/>
            <xs:element name="long" nillable="true" type="xs:long"/>
            <xs:element name="QName" nillable="true" type="xs:QName"/>
            <xs:element name="short" nillable="true" type="xs:short"/>
            <xs:element name="string" nillable="true" type="xs:string"/>
            <xs:element name="unsignedByte" nillable="true" type="xs:unsignedByte"/>
            <xs:element name="unsignedInt" nillable="true" type="xs:unsignedInt"/>
            <xs:element name="unsignedLong" nillable="true" type="xs:unsignedLong"/>
            <xs:element name="unsignedShort" nillable="true" type="xs:unsignedShort"/>
            <xs:element name="char" nillable="true" type="tns:char"/>
            <xs:simpleType name="char">
                <xs:restriction base="xs:int"/>
            </xs:simpleType>
            <xs:element name="duration" nillable="true" type="tns:duration"/>
            <xs:simpleType name="duration">
                <xs:restriction base="xs:duration">
                    <xs:pattern value="\\-?P(\\d*D)?(T(\\d*H)?(\\d*M)?(\\d*(\\.\\d*)?S)?)?"/>
                    <xs:minInclusive value="-P10675199DT2H48M5.4775808S"/>
                    <xs:maxInclusive value="P10675199DT2H48M5.4775807S"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:element name="guid" nillable="true" type="tns:guid"/>
            <xs:simpleType name="guid">
                <xs:restriction base="xs:string">
                    <xs:pattern value="[\\da-fA-F]{8}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{12}"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:attribute name="FactoryType" type="xs:QName"/>
            <xs:attribute name="Id" type="xs:ID"/>
            <xs:attribute name="Ref" type="xs:IDREF"/>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://www.altinn.no/services/common/fault/2009/10" elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/common/fault/2009/10">
            <xs:complexType name="AltinnFault">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a SOAP fault message used by Altinn to convey exception information to the caller. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" name="AltinnErrorMessage" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the error message. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="AltinnExtendedErrorMessage" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the verbose version of the error message. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="AltinnLocalizedErrorMessage" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the localized version of the error message. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ErrorGuid" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the unique GUID for the specific fault. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ErrorID" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the error type id. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="UserGuid" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the GUID of the user. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="UserId" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the id of the user. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="AltinnFault" nillable="true" type="tns:AltinnFault"/>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
            <xs:import namespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
            <xs:import namespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2020/01"/>
            <xs:element name="InitiateBrokerServiceBasic">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="1" name="systemUserName" type="xs:string"/>
                        <xs:element minOccurs="1" name="systemPassword" type="xs:string"/>
                        <xs:element xmlns:q1="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06" minOccurs="1" name="brokerServiceInitiation" type="q1:BrokerServiceInitiation"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="InitiateBrokerServiceBasicResponse">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="0" name="InitiateBrokerServiceBasicResult" nillable="true" type="xs:string"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="GetAvailableFilesBasic">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="1" name="systemUserName" type="xs:string"/>
                        <xs:element minOccurs="1" name="systemPassword" type="xs:string"/>
                        <xs:element xmlns:q2="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06" minOccurs="1" name="searchParameters" type="q2:BrokerServiceSearch"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="GetAvailableFilesBasicResponse">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element xmlns:q3="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06" minOccurs="0" name="GetAvailableFilesBasicResult" nillable="true" type="q3:BrokerServiceAvailableFileList"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="CheckIfAvailableFilesBasic">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="1" name="systemUserName" type="xs:string"/>
                        <xs:element minOccurs="1" name="systemPassword" type="xs:string"/>
                        <xs:element xmlns:q4="http://schemas.altinn.no/services/ServiceEngine/Broker/2020/01" minOccurs="1" name="pollParameters" type="q4:BrokerServicePoll"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="CheckIfAvailableFilesBasicResponse">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="0" name="CheckIfAvailableFilesBasicResult" type="xs:boolean"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="ConfirmDownloadedBasic">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element minOccurs="1" name="systemUserName" type="xs:string"/>
                        <xs:element minOccurs="1" name="systemPassword" type="xs:string"/>
                        <xs:element minOccurs="1" name="fileReference" type="xs:string"/>
                        <xs:element minOccurs="1" name="reportee" type="xs:string"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="ConfirmDownloadedBasicResponse">
                <xs:complexType>
                    <xs:sequence/>
                </xs:complexType>
            </xs:element>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06" xmlns:ser="http://schemas.microsoft.com/2003/10/Serialization/" elementFormDefault="qualified" targetNamespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06">
            <xs:import namespace="http://schemas.altinn.no/services/serviceEntity/2015/06"/>
            <xs:import namespace="http://schemas.microsoft.com/2003/10/Serialization/"/>
            <xs:complexType name="BrokerServiceInitiation">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Contains metadata information for initiating a new Broker Service. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element name="Manifest" nillable="true" type="tns:Manifest">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the manifest for this Broker Service </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="RecipientList" nillable="true" type="tns:ArrayOfRecipient">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the list of Recipients for this Broker Service </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="BrokerServiceInitiation" nillable="true" type="tns:BrokerServiceInitiation"/>
            <xs:complexType name="Manifest">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a broker service manifest element with details about the broker service. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element name="ExternalServiceCode" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the ExternalServiceCode. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="ExternalServiceEditionCode" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the ExternalServiceEditionCode. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="FileList" nillable="true" type="tns:ArrayOfFile">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a list of files for the broker service manifest. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="PropertyList" nillable="true" type="tns:ArrayOfProperty">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a list of properties for the broker service manifest. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="Reportee" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the Reportee. Meaning the organization number or social security number for the sender of the file. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="SendersReference" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the SendersReference of the file. A reference value defined by the file creator. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="Manifest" nillable="true" type="tns:Manifest"/>
            <xs:complexType name="ArrayOfFile">
                <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="File" nillable="true" type="tns:File"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="ArrayOfFile" nillable="true" type="tns:ArrayOfFile"/>
            <xs:complexType name="File">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a list of files for the broker service manifest </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" name="CheckSum" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a checksum for the file </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="FileName" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the name of the file </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="File" nillable="true" type="tns:File"/>
            <xs:complexType name="ArrayOfProperty">
                <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="Property" nillable="true" type="tns:Property"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="ArrayOfProperty" nillable="true" type="tns:ArrayOfProperty"/>
            <xs:complexType name="Property">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a list of properties for the broker service manifest </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element name="PropertyKey" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a property key </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="PropertyValue" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a property value </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="Property" nillable="true" type="tns:Property"/>
            <xs:complexType name="ArrayOfRecipient">
                <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="Recipient" nillable="true" type="tns:Recipient"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="ArrayOfRecipient" nillable="true" type="tns:ArrayOfRecipient"/>
            <xs:complexType name="Recipient">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a recipient for initiating a new broker service instance. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element name="PartyNumber" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the PartyNumber (org. number or SSN) for the recipient </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="Recipient" nillable="true" type="tns:Recipient"/>
            <xs:complexType name="BrokerServiceSearch">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a set of parameters for performing a filtered search for broker service files </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on ExternalServiceCode (must be used together with ExternalServiceEditionCode) </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ExternalServiceEditionCode" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on ExternalServiceEditionCode (must be used together with ExternalServiceCode) </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element xmlns:q1="http://schemas.altinn.no/services/serviceEntity/2015/06" name="FileStatus" type="q1:BrokerServiceAvailableFileStatus">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the mandatory parameter to filter on a specific file status. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="MaxSentDateTime" type="xs:dateTime">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on a maximum SentDate </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="MinSentDateTime" type="xs:dateTime">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on a minimum SentDate </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element name="Reportee" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the mandatory parameter to filter on a specific reportee. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="BrokerServiceSearch" nillable="true" type="tns:BrokerServiceSearch"/>
            <xs:complexType name="BrokerServiceAvailableFileList">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> This Business Entity is used as a return entity to represent a list of available broker service files for a recipient. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="BrokerServiceAvailableFile" nillable="true" type="tns:BrokerServiceAvailableFile"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="BrokerServiceAvailableFileList" nillable="true" type="tns:BrokerServiceAvailableFileList"/>
            <xs:complexType name="BrokerServiceAvailableFile">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> This Business Entity is used as a return entity to represent available broker service files for recipients. </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets external service code given when external parties are retrieving service information </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ExternalServiceEditionCode" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets external service edition code when external parties are retrieving service information </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="FileName" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets File Name. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="FileReference" type="ser:guid">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets Broker Service File Reference. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="FileSize" type="xs:long">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets File Size in bytes. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element xmlns:q2="http://schemas.altinn.no/services/serviceEntity/2015/06" minOccurs="0" name="FileStatus" type="q2:BrokerServiceAvailableFileStatus">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets status for this recipient </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="IsSftpDownloadOnly" type="xs:boolean">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets a value indicating whether the file is only downloadable by using SFTP </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ReceiptID" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets Receipt Id. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="Reportee" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the reportee of the file. Meaning the organization number or social security number for the sender of the file. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="SendersReference" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the senders reference of the file. A reference value defined by the file creator. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="SentDate" type="xs:dateTime">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the sent date </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="BrokerServiceAvailableFile" nillable="true" type="tns:BrokerServiceAvailableFile"/>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://schemas.altinn.no/services/serviceEntity/2015/06" elementFormDefault="qualified" targetNamespace="http://schemas.altinn.no/services/serviceEntity/2015/06">
            <xs:simpleType name="BrokerServiceAvailableFileStatus">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Defines the different status values for available broker service files. </summary></xs:documentation>
                </xs:annotation>
                <xs:restriction base="xs:string">
                    <xs:enumeration value="Uploaded">
                        <xs:annotation>
                            <xs:documentation><summary> Specifies that a new file is uploaded and ready for download. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:enumeration>
                    <xs:enumeration value="Downloaded">
                        <xs:annotation>
                            <xs:documentation><summary> Specifies that a file has already been downloaded but is still available. </summary></xs:documentation>
                        </xs:annotation>
                    </xs:enumeration>
                </xs:restriction>
            </xs:simpleType>
            <xs:element name="BrokerServiceAvailableFileStatus" nillable="true" type="tns:BrokerServiceAvailableFileStatus"/>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://schemas.altinn.no/services/ServiceEngine/Broker/2020/01" elementFormDefault="qualified" targetNamespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2020/01">
            <xs:import namespace="http://schemas.microsoft.com/2003/10/Serialization/Arrays"/>
            <xs:complexType name="BrokerServicePoll">
                <xs:annotation>
                    <xs:appinfo/>
                    <xs:documentation><summary> Represents a set of parameters for performing a filtered search for broker service files </summary></xs:documentation>
                </xs:annotation>
                <xs:sequence>
                    <xs:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xs:string">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on ExternalServiceCode (must be used together with ExternalServiceEditionCode) </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element minOccurs="0" name="ExternalServiceEditionCode" type="xs:int">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the optional parameter to filter on ExternalServiceEditionCode (must be used together with ExternalServiceCode) </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                    <xs:element xmlns:q1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" name="Recipients" nillable="true" type="q1:ArrayOfstring">
                        <xs:annotation>
                            <xs:appinfo/>
                            <xs:documentation><summary> Gets or sets the mandatory parameter to specify recipients to poll for </summary></xs:documentation>
                        </xs:annotation>
                    </xs:element>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="BrokerServicePoll" nillable="true" type="tns:BrokerServicePoll"/>
        </xs:schema>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://schemas.microsoft.com/2003/10/Serialization/Arrays" elementFormDefault="qualified" targetNamespace="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
            <xs:complexType name="ArrayOfstring">
                <xs:sequence>
                    <xs:element minOccurs="0" maxOccurs="unbounded" name="string" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="ArrayOfstring" nillable="true" type="tns:ArrayOfstring"/>
        </xs:schema>
    </wsdl:types>
    <wsdl:message name="IBrokerServiceExternalBasic_Test_InputMessage">
        <wsdl:part xmlns:q1="http://www.altinn.no/services/2009/10" name="parameters" element="q1:Test"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_Test_OutputMessage">
        <wsdl:part xmlns:q2="http://www.altinn.no/services/2009/10" name="parameters" element="q2:TestResponse"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage">
        <wsdl:part xmlns:q3="http://www.altinn.no/services/common/fault/2009/10" name="detail" element="q3:AltinnFault"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage">
        <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasic"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage">
        <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasicResponse"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage">
        <wsdl:part xmlns:q4="http://www.altinn.no/services/common/fault/2009/10" name="detail" element="q4:AltinnFault"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage">
        <wsdl:part name="parameters" element="tns:GetAvailableFilesBasic"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage">
        <wsdl:part name="parameters" element="tns:GetAvailableFilesBasicResponse"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage">
        <wsdl:part xmlns:q5="http://www.altinn.no/services/common/fault/2009/10" name="detail" element="q5:AltinnFault"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_InputMessage">
        <wsdl:part name="parameters" element="tns:CheckIfAvailableFilesBasic"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_OutputMessage">
        <wsdl:part name="parameters" element="tns:CheckIfAvailableFilesBasicResponse"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_AltinnFaultFault_FaultMessage">
        <wsdl:part xmlns:q6="http://www.altinn.no/services/common/fault/2009/10" name="detail" element="q6:AltinnFault"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage">
        <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasic"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage">
        <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasicResponse"/>
    </wsdl:message>
    <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage">
        <wsdl:part xmlns:q7="http://www.altinn.no/services/common/fault/2009/10" name="detail" element="q7:AltinnFault"/>
    </wsdl:message>
    <wsdl:portType name="IBrokerServiceExternalBasic">
        <wsdl:documentation><summary> External interface for exposing service operations for Broker Service on basic binding. Used for end user systems to handle file operations. </summary></wsdl:documentation>
        <wsdl:operation name="Test">
            <wsdl:input wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test" message="tns:IBrokerServiceExternalBasic_Test_InputMessage"/>
            <wsdl:output wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestResponse" message="tns:IBrokerServiceExternalBasic_Test_OutputMessage"/>
            <wsdl:fault wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestAltinnFaultFault" name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage"/>
        </wsdl:operation>
        <wsdl:operation name="InitiateBrokerServiceBasic">
            <wsdl:documentation><summary> Operation for initiating a broker service. </summary> <param name="systemUserName"> System user name is the system identifier for the end user system as registered in Altinn - mandatory parameter </param> <param name="systemPassword"> System password is the password for the registered end user system - mandatory parameter </param> <param name="brokerServiceInitiation"> Defines the manifest data and recipient list needed for initiating the broker service. Contains information as ... - mandatory parameter </param> <returns> A Senders Reference for the initiated broker service </returns></wsdl:documentation>
            <wsdl:input wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasic" message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage"/>
            <wsdl:output wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicResponse" message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage"/>
            <wsdl:fault wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicAltinnFaultFault" name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage"/>
        </wsdl:operation>
        <wsdl:operation name="GetAvailableFilesBasic">
            <wsdl:documentation><summary> Operation for retrieving a list of available files for download from the broker service. </summary> <param name="systemUserName"> System user name is the system identifier for the end user system as registered in Altinn - mandatory parameter </param> <param name="systemPassword"> System password is the password for the registered end user system - mandatory parameter </param> <param name="searchParameters"> Set of parameters to perform the lookup based on </param> <returns> A list of available BrokerServiceFileBE entities for download </returns></wsdl:documentation>
            <wsdl:input wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasic" message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage"/>
            <wsdl:output wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicResponse" message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage"/>
            <wsdl:fault wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicAltinnFaultFault" name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage"/>
        </wsdl:operation>
        <wsdl:operation name="CheckIfAvailableFilesBasic">
            <wsdl:documentation><summary> Checks whether there are files available for download for certain recipients </summary> <param name="systemUserName"> System user name is the system identifier for the end user system as registered in Altinn - mandatory parameter </param> <param name="systemPassword"> System password is the password for the registered end user system - mandatory parameter </param> <param name="pollParameters">Search parameters. Currently list of recipients</param> <returns>Whether files are available for download</returns></wsdl:documentation>
            <wsdl:input wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/CheckIfAvailableFilesBasic" message="tns:IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_InputMessage"/>
            <wsdl:output wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/CheckIfAvailableFilesBasicResponse" message="tns:IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_OutputMessage"/>
            <wsdl:fault wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/CheckIfAvailableFilesBasicAltinnFaultFault" name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_CheckIfAvailableFilesBasic_AltinnFaultFault_FaultMessage"/>
        </wsdl:operation>
        <wsdl:operation name="ConfirmDownloadedBasic">
            <wsdl:documentation><summary> Performs an update of the status of the file recipient and sets it to <c>Downloaded</c> so that the file sender can see that the recipient has obtained the file. </summary> <param name="systemUserName"> System user name is the system identifier for the end user system as registered in Altinn. </param> <param name="systemPassword"> System password is the password for the registered end user system. </param> <param name="fileReference"> The file reference value of the file that should be updated with the downloaded state. </param> <param name="reportee"> The social security number or organization number of the file recipient. </param></wsdl:documentation>
            <wsdl:input wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasic" message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage"/>
            <wsdl:output wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicResponse" message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage"/>
            <wsdl:fault wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicAltinnFaultFault" name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage"/>
        </wsdl:operation>
    </wsdl:portType>
    <wsdl:binding name="BasicHttpBinding_IBrokerServiceExternalBasic" type="tns:IBrokerServiceExternalBasic">
        <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
        <wsdl:operation name="Test">
            <soap:operation soapAction="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test" style="document"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="AltinnFaultFault">
                <soap:fault use="literal" name="AltinnFaultFault" namespace=""/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="InitiateBrokerServiceBasic">
            <soap:operation soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasic" style="document"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="AltinnFaultFault">
                <soap:fault use="literal" name="AltinnFaultFault" namespace=""/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="GetAvailableFilesBasic">
            <soap:operation soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasic" style="document"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="AltinnFaultFault">
                <soap:fault use="literal" name="AltinnFaultFault" namespace=""/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="CheckIfAvailableFilesBasic">
            <soap:operation soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/CheckIfAvailableFilesBasic" style="document"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="AltinnFaultFault">
                <soap:fault use="literal" name="AltinnFaultFault" namespace=""/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="ConfirmDownloadedBasic">
            <soap:operation soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasic" style="document"/>
            <wsdl:input>
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output>
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="AltinnFaultFault">
                <soap:fault use="literal" name="AltinnFaultFault" namespace=""/>
            </wsdl:fault>
        </wsdl:operation>
    </wsdl:binding>
    <wsdl:service name="BrokerServiceExternalBasicSF">
        <wsdl:port name="BasicHttpBinding_IBrokerServiceExternalBasic" binding="tns:BasicHttpBinding_IBrokerServiceExternalBasic">
            <soap:address location="https://www.altinn.no/ServiceEngineExternal/BrokerServiceExternalBasic.svc"/>
        </wsdl:port>
    </wsdl:service>
</wsdl:definitions>`
}

module.exports = { getBasicWSDL };