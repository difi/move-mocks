const fetch = require('node-fetch');

function receiveDPO(req, res) {
    console.log('receiveDPO');
    res.send('ding!')
}

function getBrokerServiceExternalBasicWSDL(req, res){


        console.log('getBrokerServiceExternalBasicWSDL');

    res.header('Content-type', 'text/xml')
    res.status(200);

    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">
  <wsdl:import namespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" location="/?WSDL&amp;interface=BasicHttpBinding_IBrokerServiceExternalBasicStreamed&amp;part=BrokerServiceExternalBasicStreamed.wsdl">
    </wsdl:import>
  <wsdl:import namespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" location="/?WSDL&amp;interface=BasicHttpBinding_IBrokerServiceExternalBasic&amp;part=BrokerServiceExternalBasic.wsdl">
    </wsdl:import>
</wsdl:definitions>
`)

//     res.send(`<?xml version="1.0" encoding="utf-8"?>
// <wsdl:definitions name="BrokerServiceExternalBasicSF"
//                   targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06"
//                   xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
//                   xmlns:xsd="http://www.w3.org/2001/XMLSchema"
//                   xmlns:tns="http://www.altinn.no/services/ServiceEngine/Broker/2015/06"
//                   xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
//                   xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl"
// >
//     <wsdl:types>
//         <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/2009/10">
//             <xsd:element name="Test">
//                 <xsd:complexType>
//                     <xsd:sequence/>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="TestResponse">
//                 <xsd:complexType>
//                     <xsd:sequence/>
//                 </xsd:complexType>
//             </xsd:element>
//         </xsd:schema>
//         <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/common/fault/2009/10"
//                     xmlns:tns="http://www.altinn.no/services/common/fault/2009/10">
//             <xsd:complexType name="AltinnFault">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a SOAP fault message used by Altinn to convey exception information to the
//                                 caller.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" name="AltinnErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="AltinnExtendedErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the verbose version of the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="AltinnLocalizedErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the localized version of the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ErrorGuid" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the unique GUID for the specific fault.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ErrorID" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the error type id.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="UserGuid" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the GUID of the user.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="UserId" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the id of the user.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="AltinnFault" nillable="true" type="tns:AltinnFault"/>
//         </xsd:schema>
//         <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified"
//                    targetNamespace="http://schemas.microsoft.com/2003/10/Serialization/"
//                    xmlns:xs="http://www.w3.org/2001/XMLSchema"
//                    xmlns:tns="http://schemas.microsoft.com/2003/10/Serialization/">
//             <xs:element name="anyType" nillable="true" type="xs:anyType"/>
//             <xs:element name="anyURI" nillable="true" type="xs:anyURI"/>
//             <xs:element name="base64Binary" nillable="true" type="xs:base64Binary"/>
//             <xs:element name="boolean" nillable="true" type="xs:boolean"/>
//             <xs:element name="byte" nillable="true" type="xs:byte"/>
//             <xs:element name="dateTime" nillable="true" type="xs:dateTime"/>
//             <xs:element name="decimal" nillable="true" type="xs:decimal"/>
//             <xs:element name="double" nillable="true" type="xs:double"/>
//             <xs:element name="float" nillable="true" type="xs:float"/>
//             <xs:element name="int" nillable="true" type="xs:int"/>
//             <xs:element name="long" nillable="true" type="xs:long"/>
//             <xs:element name="QName" nillable="true" type="xs:QName"/>
//             <xs:element name="short" nillable="true" type="xs:short"/>
//             <xs:element name="string" nillable="true" type="xs:string"/>
//             <xs:element name="unsignedByte" nillable="true" type="xs:unsignedByte"/>
//             <xs:element name="unsignedInt" nillable="true" type="xs:unsignedInt"/>
//             <xs:element name="unsignedLong" nillable="true" type="xs:unsignedLong"/>
//             <xs:element name="unsignedShort" nillable="true" type="xs:unsignedShort"/>
//             <xs:element name="char" nillable="true" type="tns:char"/>
//             <xs:simpleType name="char">
//                 <xs:restriction base="xs:int"/>
//             </xs:simpleType>
//             <xs:element name="duration" nillable="true" type="tns:duration"/>
//             <xs:simpleType name="duration">
//                 <xs:restriction base="xs:duration">
//                     <xs:pattern value="\\-?P(\\d*D)?(T(\\d*H)?(\\d*M)?(\\d*(\\.\\d*)?S)?)?"/>
//                     <xs:minInclusive value="-P10675199DT2H48M5.4775808S"/>
//                     <xs:maxInclusive value="P10675199DT2H48M5.4775807S"/>
//                 </xs:restriction>
//             </xs:simpleType>
//             <xs:element name="guid" nillable="true" type="tns:guid"/>
//             <xs:simpleType name="guid">
//                 <xs:restriction base="xs:string">
//                     <xs:pattern value="[\\da-fA-F]{8}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{12}"/>
//                 </xs:restriction>
//             </xs:simpleType>
//             <xs:attribute name="FactoryType" type="xs:QName"/>
//             <xs:attribute name="Id" type="xs:ID"/>
//             <xs:attribute name="Ref" type="xs:IDREF"/>
//         </xs:schema>
//         <xsd:schema elementFormDefault="qualified"
//                     targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
//             <xsd:import namespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
//             <xsd:element name="InitiateBrokerServiceBasic">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="brokerServiceInitiation" type="q1:BrokerServiceInitiation"
//                                      xmlns:q1="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="InitiateBrokerServiceBasicResponse">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="0" name="InitiateBrokerServiceBasicResult" nillable="true"
//                                      type="xsd:string"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="GetAvailableFilesBasic">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="searchParameters" type="q2:BrokerServiceSearch"
//                                      xmlns:q2="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="GetAvailableFilesBasicResponse">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="0" name="GetAvailableFilesBasicResult" nillable="true"
//                                      type="q3:BrokerServiceAvailableFileList"
//                                      xmlns:q3="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="ConfirmDownloadedBasic">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="fileReference" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="reportee" type="xsd:string"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="ConfirmDownloadedBasicResponse">
//                 <xsd:complexType>
//                     <xsd:sequence/>
//                 </xsd:complexType>
//             </xsd:element>
//         </xsd:schema>
//         <xsd:schema elementFormDefault="qualified"
//                     targetNamespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"
//                     xmlns:tns="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"
//                     xmlns:ser="http://schemas.microsoft.com/2003/10/Serialization/">
//             <xsd:import namespace="http://schemas.altinn.no/services/serviceEntity/2015/06"/>
//             <xsd:import namespace="http://schemas.microsoft.com/2003/10/Serialization/"/>
//             <xsd:complexType name="BrokerServiceInitiation">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Contains metadata information for initiating a new Broker Service.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element name="Manifest" nillable="true" type="tns:Manifest">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the manifest for this Broker Service
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="RecipientList" nillable="true" type="tns:ArrayOfRecipient">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the list of Recipients for this Broker Service
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="BrokerServiceInitiation" nillable="true" type="tns:BrokerServiceInitiation"/>
//             <xsd:complexType name="Manifest">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a broker service manifest element with details about the broker service.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element name="ExternalServiceCode" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the ExternalServiceCode.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="ExternalServiceEditionCode" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the ExternalServiceEditionCode.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="FileList" nillable="true" type="tns:ArrayOfFile">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a list of files for the broker service manifest.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="PropertyList" nillable="true" type="tns:ArrayOfProperty">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a list of properties for the broker service manifest.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="Reportee" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the Reportee. Meaning the organization number or social security
//                                         number for the sender of the file.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="SendersReference" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the SendersReference of the file. A reference value defined by the
//                                         file creator.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="Manifest" nillable="true" type="tns:Manifest"/>
//             <xsd:complexType name="ArrayOfFile">
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" maxOccurs="unbounded" name="File" nillable="true" type="tns:File"/>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="ArrayOfFile" nillable="true" type="tns:ArrayOfFile"/>
//             <xsd:complexType name="File">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a list of files for the broker service manifest
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" name="CheckSum" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a checksum for the file
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="FileName" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the name of the file
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="File" nillable="true" type="tns:File"/>
//             <xsd:complexType name="ArrayOfProperty">
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" maxOccurs="unbounded" name="Property" nillable="true"
//                                  type="tns:Property"/>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="ArrayOfProperty" nillable="true" type="tns:ArrayOfProperty"/>
//             <xsd:complexType name="Property">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a list of properties for the broker service manifest
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element name="PropertyKey" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a property key
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="PropertyValue" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a property value
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="Property" nillable="true" type="tns:Property"/>
//             <xsd:complexType name="ArrayOfRecipient">
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" maxOccurs="unbounded" name="Recipient" nillable="true"
//                                  type="tns:Recipient"/>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="ArrayOfRecipient" nillable="true" type="tns:ArrayOfRecipient"/>
//             <xsd:complexType name="Recipient">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a recipient for initiating a new broker service instance.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element name="PartyNumber" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the PartyNumber (org. number or SSN) for the recipient
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="Recipient" nillable="true" type="tns:Recipient"/>
//             <xsd:complexType name="BrokerServiceSearch">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a set of parameters for performing a filtered search for broker service files
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the optional parameter to filter on ExternalServiceCode (must be
//                                         used together with ExternalServiceEditionCode)
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ExternalServiceEditionCode" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the optional parameter to filter on ExternalServiceEditionCode
//                                         (must be used together with ExternalServiceCode)
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="FileStatus" type="q4:BrokerServiceAvailableFileStatus"
//                                  xmlns:q4="http://schemas.altinn.no/services/serviceEntity/2015/06">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the mandatory parameter to filter on a specific file status.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="MaxSentDateTime" type="xsd:dateTime">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the optional parameter to filter on a maximum SentDate
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="MinSentDateTime" type="xsd:dateTime">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the optional parameter to filter on a minimum SentDate
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element name="Reportee" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the mandatory parameter to filter on a specific reportee.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="BrokerServiceSearch" nillable="true" type="tns:BrokerServiceSearch"/>
//             <xsd:complexType name="BrokerServiceAvailableFileList">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 This Business Entity is used as a return entity to represent a list of available broker
//                                 service files for a recipient.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" maxOccurs="unbounded" name="BrokerServiceAvailableFile" nillable="true"
//                                  type="tns:BrokerServiceAvailableFile"/>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="BrokerServiceAvailableFileList" nillable="true"
//                          type="tns:BrokerServiceAvailableFileList"/>
//             <xsd:complexType name="BrokerServiceAvailableFile">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 This Business Entity is used as a return entity to represent available broker service
//                                 files for recipients.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets external service code given when external parties are retrieving
//                                         service information
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ExternalServiceEditionCode" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets external service edition code when external parties are retrieving
//                                         service information
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="FileName" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets File Name.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="FileReference" type="ser:guid">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets Broker Service File Reference.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="FileSize" type="xsd:long">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets File Size in bytes.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="FileStatus" type="q5:BrokerServiceAvailableFileStatus"
//                                  xmlns:q5="http://schemas.altinn.no/services/serviceEntity/2015/06">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets status for this recipient
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="IsSftpDownloadOnly" type="xsd:boolean">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets a value indicating whether the file is only downloadable by using
//                                         SFTP
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ReceiptID" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets Receipt Id.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="Reportee" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the reportee of the file. Meaning the organization number or social
//                                         security number for the sender of the file.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="SendersReference" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the senders reference of the file. A reference value defined by the
//                                         file creator.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="SentDate" type="xsd:dateTime">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the sent date
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="BrokerServiceAvailableFile" nillable="true" type="tns:BrokerServiceAvailableFile"/>
//         </xsd:schema>
//         <xsd:schema elementFormDefault="qualified"
//                     targetNamespace="http://schemas.altinn.no/services/serviceEntity/2015/06"
//                     xmlns:tns="http://schemas.altinn.no/services/serviceEntity/2015/06">
//             <xsd:simpleType name="BrokerServiceAvailableFileStatus">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:EnumAnnotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:EnumText z:Id="2">&lt;summary&gt;
//                                 Defines the different status values for available broker service files.
//                                 &lt;/summary&gt;</d1p1:EnumText>
//                             <d1p1:Members z:Id="3" z:Size="2"
//                                           xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
//                                 <d2p1:KeyValueOfstringstring>
//                                     <d2p1:Key z:Id="4">Uploaded</d2p1:Key>
//                                     <d2p1:Value z:Id="5">&lt;summary&gt;
//                                         Specifies that a new file is uploaded and ready for download.
//                                         &lt;/summary&gt;</d2p1:Value>
//                                 </d2p1:KeyValueOfstringstring>
//                                 <d2p1:KeyValueOfstringstring>
//                                     <d2p1:Key z:Id="6">Downloaded</d2p1:Key>
//                                     <d2p1:Value z:Id="7">&lt;summary&gt;
//                                         Specifies that a file has already been downloaded but is still available.
//                                         &lt;/summary&gt;</d2p1:Value>
//                                 </d2p1:KeyValueOfstringstring>
//                             </d1p1:Members>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:restriction base="xsd:string">
//                     <xsd:enumeration value="Uploaded"/>
//                     <xsd:enumeration value="Downloaded"/>
//                 </xsd:restriction>
//             </xsd:simpleType>
//             <xsd:element name="BrokerServiceAvailableFileStatus" nillable="true"
//                          type="tns:BrokerServiceAvailableFileStatus"/>
//         </xsd:schema>
//     </wsdl:types>
//     <wsdl:message name="IBrokerServiceExternalBasic_Test_InputMessage">
//         <wsdl:part name="parameters" element="q6:Test" xmlns:q6="http://www.altinn.no/services/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_Test_OutputMessage">
//         <wsdl:part name="parameters" element="q7:TestResponse" xmlns:q7="http://www.altinn.no/services/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q8:AltinnFault"
//                    xmlns:q8="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage">
//         <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasic"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage">
//         <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasicResponse"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q9:AltinnFault"
//                    xmlns:q9="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage">
//         <wsdl:part name="parameters" element="tns:GetAvailableFilesBasic"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage">
//         <wsdl:part name="parameters" element="tns:GetAvailableFilesBasicResponse"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q10:AltinnFault"
//                    xmlns:q10="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage">
//         <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasic"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage">
//         <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasicResponse"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q11:AltinnFault"
//                    xmlns:q11="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:portType name="IBrokerServiceExternalBasic">
//         <wsdl:documentation>&lt;summary&gt;&#xD;
//             External interface for exposing service operations for Broker Service on basic binding.&#xD;
//             Used for end user systems to handle file operations.&#xD;
//             &lt;/summary&gt;</wsdl:documentation>
//         <wsdl:operation name="Test">
//             <wsdl:input wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test"
//                         message="tns:IBrokerServiceExternalBasic_Test_InputMessage"/>
//             <wsdl:output wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestResponse"
//                          message="tns:IBrokerServiceExternalBasic_Test_OutputMessage"/>
//             <wsdl:fault wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestAltinnFaultFault"
//                         name="AltinnFaultFault"
//                         message="tns:IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//         <wsdl:operation name="InitiateBrokerServiceBasic">
//             <wsdl:documentation>&lt;summary&gt;&#xD;
//                 Operation for initiating a broker service.&#xD;
//                 &lt;/summary&gt;&#xD;
//                 &lt;param name="systemUserName"&gt;&#xD;
//                 System user name is the system identifier for the end user system as registered in Altinn - mandatory
//                 parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="systemPassword"&gt;&#xD;
//                 System password is the password for the registered end user system - mandatory parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="brokerServiceInitiation"&gt;&#xD;
//                 Defines the manifest data and recipient list needed for initiating the broker service. Contains
//                 information as ... - mandatory parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;returns&gt;&#xD;
//                 A Senders Reference for the initiated broker service&#xD;
//                 &lt;/returns&gt;</wsdl:documentation>
//             <wsdl:input
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasic"
//                     message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage"/>
//             <wsdl:output
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicResponse"
//                     message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage"/>
//             <wsdl:fault
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicAltinnFaultFault"
//                     name="AltinnFaultFault"
//                     message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//         <wsdl:operation name="GetAvailableFilesBasic">
//             <wsdl:documentation>&lt;summary&gt;&#xD;
//                 Operation for retrieving a list of available files for download from the broker service.&#xD;
//                 &lt;/summary&gt;&#xD;
//                 &lt;param name="systemUserName"&gt;&#xD;
//                 System user name is the system identifier for the end user system as registered in Altinn - mandatory
//                 parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="systemPassword"&gt;&#xD;
//                 System password is the password for the registered end user system - mandatory parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="searchParameters"&gt;&#xD;
//                 Set of parameters to perform the lookup based on&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;returns&gt;&#xD;
//                 A list of available BrokerServiceFileBE entities for download&#xD;
//                 &lt;/returns&gt;</wsdl:documentation>
//             <wsdl:input
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasic"
//                     message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage"/>
//             <wsdl:output
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicResponse"
//                     message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage"/>
//             <wsdl:fault
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicAltinnFaultFault"
//                     name="AltinnFaultFault"
//                     message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//         <wsdl:operation name="ConfirmDownloadedBasic">
//             <wsdl:input
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasic"
//                     message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage"/>
//             <wsdl:output
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicResponse"
//                     message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage"/>
//             <wsdl:fault
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicAltinnFaultFault"
//                     name="AltinnFaultFault"
//                     message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//     </wsdl:portType>
//     <wsdl:binding name="BasicHttpBinding_IBrokerServiceExternalBasic" type="tns:IBrokerServiceExternalBasic">
//         <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
//         <wsdl:operation name="Test">
//             <soap:operation soapAction="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test"
//                             style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//         <wsdl:operation name="InitiateBrokerServiceBasic">
//             <soap:operation
//                     soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasic"
//                     style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//         <wsdl:operation name="GetAvailableFilesBasic">
//             <soap:operation
//                     soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasic"
//                     style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//         <wsdl:operation name="ConfirmDownloadedBasic">
//             <soap:operation
//                     soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasic"
//                     style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//     </wsdl:binding>
//     <wsdl:service name="BrokerServiceExternalBasicSF">
//         <wsdl:port name="BasicHttpBinding_IBrokerServiceExternalBasic"
//                    binding="tns:BasicHttpBinding_IBrokerServiceExternalBasic">
//             <soap:address
//                     location="http://tt02.altinn.no/ServiceEngineExternal/BrokerServiceExternalBasic.svc"/>
//         </wsdl:port>
//     </wsdl:service>
// </wsdl:definitions>`)


    // fetch('https://raw.githubusercontent.com/difi/move-integrasjonspunkt/master/altinnexchange/wsdl/BrokerServiceExternalBasic.wsdl')
    //     .then((wsdlRes) => wsdlRes.text())
    //     .then((text) => {
    //         res.header('Content-type', 'text/xml')
    //         res.status(200);
    //         res.send(text)
    //     });
}

function getBrokerServiceExternalBasicStreamedWSDL(req, res){

    console.log('getBrokerServiceExternalBasicWSDL  STREAMED!! ');

    // fetch('https://raw.githubusercontent.com/difi/move-integrasjonspunkt/master/altinnexchange/wsdl/BrokerServiceExternalBasicStreamed.wsdl')
    //     .then((wsdlRes) => wsdlRes.text())
    //     .then((text) => {
    //         res.header('Content-type', 'text/xml')
    //         res.status(200);
    //         res.send(text)
    //     });

    res.header('Content-type', 'text/xml')
    res.status(200);

    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">
  <wsdl:import namespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" location="/?WSDL&amp;interface=BasicHttpBinding_IBrokerServiceExternalBasicStreamed&amp;part=BrokerServiceExternalBasicStreamed.wsdl">
    </wsdl:import>
  <wsdl:import namespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" location="/?WSDL&amp;interface=BasicHttpBinding_IBrokerServiceExternalBasic&amp;part=BrokerServiceExternalBasic.wsdl">
    </wsdl:import>
</wsdl:definitions>
`)

//     res.send(`<?xml version="1.0" encoding="utf-8"?>
// <wsdl:definitions name="BrokerServiceExternalBasicStreamedSF"
//                   targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06"
//                   xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:wsx="http://schemas.xmlsoap.org/ws/2004/09/mex"
//                   xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
//                   xmlns:wsa10="http://www.w3.org/2005/08/addressing"
//                   xmlns:wsp="http://schemas.xmlsoap.org/ws/2004/09/policy"
//                   xmlns:wsap="http://schemas.xmlsoap.org/ws/2004/08/addressing/policy"
//                   xmlns:msc="http://schemas.microsoft.com/ws/2005/12/wsdl/contract"
//                   xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/"
//                   xmlns:wsa="http://schemas.xmlsoap.org/ws/2004/08/addressing"
//                   xmlns:wsam="http://www.w3.org/2007/05/addressing/metadata"
//                   xmlns:xsd="http://www.w3.org/2001/XMLSchema"
//                   xmlns:tns="http://www.altinn.no/services/ServiceEngine/Broker/2015/06"
//                   xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
//                   xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl"
//                   xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
//     <wsp:Policy wsu:Id="BasicHttpBinding_IBrokerServiceExternalBasicStreamed_policy">
//         <wsp:ExactlyOne>
//             <wsp:All>
//                 <wsoma:OptimizedMimeSerialization
//                         xmlns:wsoma="http://schemas.xmlsoap.org/ws/2004/09/policy/optimizedmimeserialization"/>
//             </wsp:All>
//         </wsp:ExactlyOne>
//     </wsp:Policy>
//     <wsdl:types>
//         <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/2009/10">
//             <xsd:element name="Test">
//                 <xsd:complexType>
//                     <xsd:sequence/>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="TestResponse">
//                 <xsd:complexType>
//                     <xsd:sequence/>
//                 </xsd:complexType>
//             </xsd:element>
//         </xsd:schema>
//         <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/common/fault/2009/10"
//                     xmlns:tns="http://www.altinn.no/services/common/fault/2009/10">
//             <xsd:complexType name="AltinnFault">
//                 <xsd:annotation>
//                     <xsd:appinfo>
//                         <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                    xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                    xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                    xmlns:d1p1="XmlCommentsExporter.Annotation">
//                             <d1p1:Text z:Id="2">&lt;summary&gt;
//                                 Represents a SOAP fault message used by Altinn to convey exception information to the
//                                 caller.
//                                 &lt;/summary&gt;</d1p1:Text>
//                         </Surrogate>
//                     </xsd:appinfo>
//                 </xsd:annotation>
//                 <xsd:sequence>
//                     <xsd:element minOccurs="0" name="AltinnErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="AltinnExtendedErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the verbose version of the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="AltinnLocalizedErrorMessage" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the localized version of the error message.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ErrorGuid" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the unique GUID for the specific fault.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="ErrorID" type="xsd:int">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the error type id.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="UserGuid" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the GUID of the user.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                     <xsd:element minOccurs="0" name="UserId" nillable="true" type="xsd:string">
//                         <xsd:annotation>
//                             <xsd:appinfo>
//                                 <Surrogate z:Id="1" i:type="d1p1:Annotation"
//                                            xmlns="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:i="http://www.w3.org/2001/XMLSchema-instance"
//                                            xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/"
//                                            xmlns:d1p1="XmlCommentsExporter.Annotation">
//                                     <d1p1:Text z:Id="2">&lt;summary&gt;
//                                         Gets or sets the id of the user.
//                                         &lt;/summary&gt;</d1p1:Text>
//                                 </Surrogate>
//                             </xsd:appinfo>
//                         </xsd:annotation>
//                     </xsd:element>
//                 </xsd:sequence>
//             </xsd:complexType>
//             <xsd:element name="AltinnFault" nillable="true" type="tns:AltinnFault"/>
//         </xsd:schema>
//         <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified"
//                    targetNamespace="http://schemas.microsoft.com/2003/10/Serialization/"
//                    xmlns:xs="http://www.w3.org/2001/XMLSchema"
//                    xmlns:tns="http://schemas.microsoft.com/2003/10/Serialization/">
//             <xs:element name="anyType" nillable="true" type="xs:anyType"/>
//             <xs:element name="anyURI" nillable="true" type="xs:anyURI"/>
//             <xs:element name="base64Binary" nillable="true" type="xs:base64Binary"/>
//             <xs:element name="boolean" nillable="true" type="xs:boolean"/>
//             <xs:element name="byte" nillable="true" type="xs:byte"/>
//             <xs:element name="dateTime" nillable="true" type="xs:dateTime"/>
//             <xs:element name="decimal" nillable="true" type="xs:decimal"/>
//             <xs:element name="double" nillable="true" type="xs:double"/>
//             <xs:element name="float" nillable="true" type="xs:float"/>
//             <xs:element name="int" nillable="true" type="xs:int"/>
//             <xs:element name="long" nillable="true" type="xs:long"/>
//             <xs:element name="QName" nillable="true" type="xs:QName"/>
//             <xs:element name="short" nillable="true" type="xs:short"/>
//             <xs:element name="string" nillable="true" type="xs:string"/>
//             <xs:element name="unsignedByte" nillable="true" type="xs:unsignedByte"/>
//             <xs:element name="unsignedInt" nillable="true" type="xs:unsignedInt"/>
//             <xs:element name="unsignedLong" nillable="true" type="xs:unsignedLong"/>
//             <xs:element name="unsignedShort" nillable="true" type="xs:unsignedShort"/>
//             <xs:element name="char" nillable="true" type="tns:char"/>
//             <xs:simpleType name="char">
//                 <xs:restriction base="xs:int"/>
//             </xs:simpleType>
//             <xs:element name="duration" nillable="true" type="tns:duration"/>
//             <xs:simpleType name="duration">
//                 <xs:restriction base="xs:duration">
//                     <xs:pattern value="\\-?P(\\d*D)?(T(\\d*H)?(\\d*M)?(\\d*(\\.\\d*)?S)?)?"/>
//                     <xs:minInclusive value="-P10675199DT2H48M5.4775808S"/>
//                     <xs:maxInclusive value="P10675199DT2H48M5.4775807S"/>
//                 </xs:restriction>
//             </xs:simpleType>
//             <xs:element name="guid" nillable="true" type="tns:guid"/>
//             <xs:simpleType name="guid">
//                 <xs:restriction base="xs:string">
//                     <xs:pattern value="[\\da-fA-F]{8}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{4}-[\\da-fA-F]{12}"/>
//                 </xs:restriction>
//             </xs:simpleType>
//             <xs:attribute name="FactoryType" type="xs:QName"/>
//             <xs:attribute name="Id" type="xs:ID"/>
//             <xs:attribute name="Ref" type="xs:IDREF"/>
//         </xs:schema>
//         <xsd:schema elementFormDefault="qualified"
//                     targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
//             <xsd:import namespace="http://schemas.microsoft.com/Message"/>
//             <xsd:element name="StreamedPayloadBasicBE">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element name="DataStream" type="q1:StreamBody"
//                                      xmlns:q1="http://schemas.microsoft.com/Message"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="FileName" nillable="true" type="xsd:string"/>
//             <xsd:element name="Reference" nillable="true" type="xsd:string"/>
//             <xsd:element name="Reportee" nillable="true" type="xsd:string"/>
//             <xsd:element name="SystemPassword" nillable="true" type="xsd:string"/>
//             <xsd:element name="SystemUserName" nillable="true" type="xsd:string"/>
//             <xsd:element name="ReceiptExternalStreamedBE">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="0" name="LastChanged" nillable="true" type="xsd:string"/>
//                         <xsd:element minOccurs="0" name="ParentReceiptId" type="xsd:int"/>
//                         <xsd:element minOccurs="0" name="ReceiptHistory" nillable="true" type="xsd:string"/>
//                         <xsd:element minOccurs="0" name="ReceiptId" type="xsd:int"/>
//                         <xsd:element minOccurs="0" name="ReceiptStatusCode" nillable="true" type="xsd:string"/>
//                         <xsd:element minOccurs="0" name="ReceiptText" nillable="true" type="xsd:string"/>
//                         <xsd:element minOccurs="0" name="ReceiptTypeName" nillable="true" type="xsd:string"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="DownloadFileStreamedBasic">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="fileReference" type="xsd:string"/>
//                         <xsd:element minOccurs="1" name="reportee" type="xsd:string"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//             <xsd:element name="DownloadFileStreamedBasicResponse">
//                 <xsd:complexType>
//                     <xsd:sequence>
//                         <xsd:element name="DownloadFileStreamedBasicResult" type="q2:StreamBody"
//                                      xmlns:q2="http://schemas.microsoft.com/Message"/>
//                     </xsd:sequence>
//                 </xsd:complexType>
//             </xsd:element>
//         </xsd:schema>
//         <xsd:schema elementFormDefault="qualified" targetNamespace="http://schemas.microsoft.com/Message">
//             <xsd:simpleType name="StreamBody">
//                 <xsd:restriction base="xsd:base64Binary"/>
//             </xsd:simpleType>
//         </xsd:schema>
//     </wsdl:types>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_Test_InputMessage">
//         <wsdl:part name="parameters" element="q3:Test" xmlns:q3="http://www.altinn.no/services/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_Test_OutputMessage">
//         <wsdl:part name="parameters" element="q4:TestResponse" xmlns:q4="http://www.altinn.no/services/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_Test_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q5:AltinnFault"
//                    xmlns:q5="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="StreamedPayloadBasicBE">
//         <wsdl:part name="parameters" element="tns:StreamedPayloadBasicBE"/>
//     </wsdl:message>
//     <wsdl:message name="StreamedPayloadBasicBE_Headers">
//         <wsdl:part name="FileName" element="tns:FileName"/>
//         <wsdl:part name="Reference" element="tns:Reference"/>
//         <wsdl:part name="Reportee" element="tns:Reportee"/>
//         <wsdl:part name="SystemPassword" element="tns:SystemPassword"/>
//         <wsdl:part name="SystemUserName" element="tns:SystemUserName"/>
//     </wsdl:message>
//     <wsdl:message name="ReceiptExternalStreamedBE">
//         <wsdl:part name="parameters" element="tns:ReceiptExternalStreamedBE"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_UploadFileStreamedBasic_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q6:AltinnFault"
//                    xmlns:q6="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_InputMessage">
//         <wsdl:part name="parameters" element="tns:DownloadFileStreamedBasic"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_OutputMessage">
//         <wsdl:part name="parameters" element="tns:DownloadFileStreamedBasicResponse"/>
//     </wsdl:message>
//     <wsdl:message name="IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_AltinnFaultFault_FaultMessage">
//         <wsdl:part name="detail" element="q7:AltinnFault"
//                    xmlns:q7="http://www.altinn.no/services/common/fault/2009/10"/>
//     </wsdl:message>
//     <wsdl:portType name="IBrokerServiceExternalBasicStreamed">
//         <wsdl:documentation>&lt;summary&gt;&#xD;
//             External interface for exposing service operations for Broker Service on basic binding.&#xD;
//             Used for end user systems to handle file operations.&#xD;
//             &lt;/summary&gt;</wsdl:documentation>
//         <wsdl:operation name="Test">
//             <wsdl:input wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test"
//                         message="tns:IBrokerServiceExternalBasicStreamed_Test_InputMessage"/>
//             <wsdl:output wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestResponse"
//                          message="tns:IBrokerServiceExternalBasicStreamed_Test_OutputMessage"/>
//             <wsdl:fault wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestAltinnFaultFault"
//                         name="AltinnFaultFault"
//                         message="tns:IBrokerServiceExternalBasicStreamed_Test_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//         <wsdl:operation name="UploadFileStreamedBasic">
//             <wsdl:documentation>&lt;summary&gt;&#xD;
//                 Operation for uploading a file to a broker service.&#xD;
//                 &lt;/summary&gt;&#xD;
//                 &lt;param name="payload"&gt;&#xD;
//                 contains stream and authentication information&#xD;
//                 Will contain all the data for submitting a Broker Service Payload to Altinn from the EndUserSystem on
//                 basic binding&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;returns&gt;&#xD;
//                 A ReceiptBE entity for the initiated broker service&#xD;
//                 &lt;/returns&gt;</wsdl:documentation>
//             <wsdl:input
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/UploadFileStreamedBasic"
//                     name="StreamedPayloadBasicBE" message="tns:StreamedPayloadBasicBE"/>
//             <wsdl:output
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/UploadFileStreamedBasicResponse"
//                     name="ReceiptExternalStreamedBE" message="tns:ReceiptExternalStreamedBE"/>
//             <wsdl:fault
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/UploadFileStreamedBasicAltinnFaultFault"
//                     name="AltinnFaultFault"
//                     message="tns:IBrokerServiceExternalBasicStreamed_UploadFileStreamedBasic_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//         <wsdl:operation name="DownloadFileStreamedBasic">
//             <wsdl:documentation>&lt;summary&gt;&#xD;
//                 Operation for downloading a file from a broker service.&#xD;
//                 &lt;/summary&gt;&#xD;
//                 &lt;param name="systemUserName"&gt;&#xD;
//                 System user name is the system identifier for the end user system as registered in Altinn - mandatory
//                 parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="systemPassword"&gt;&#xD;
//                 System password is the password for the registered end user system - mandatory parameter&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="fileReference"&gt;&#xD;
//                 The file reference value of the file that should be downloaded.&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;param name="reportee"&gt;&#xD;
//                 The social security number or organization number of the reportee.&#xD;
//                 &lt;/param&gt;&#xD;
//                 &lt;returns&gt;&#xD;
//                 A stream with the content of the file.&#xD;
//                 &lt;/returns&gt;</wsdl:documentation>
//             <wsdl:input
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/DownloadFileStreamedBasic"
//                     message="tns:IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_InputMessage"/>
//             <wsdl:output
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/DownloadFileStreamedBasicResponse"
//                     message="tns:IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_OutputMessage"/>
//             <wsdl:fault
//                     wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/DownloadFileStreamedBasicAltinnFaultFault"
//                     name="AltinnFaultFault"
//                     message="tns:IBrokerServiceExternalBasicStreamed_DownloadFileStreamedBasic_AltinnFaultFault_FaultMessage"/>
//         </wsdl:operation>
//     </wsdl:portType>
//     <wsdl:binding name="BasicHttpBinding_IBrokerServiceExternalBasicStreamed"
//                   type="tns:IBrokerServiceExternalBasicStreamed">
//         <wsp:PolicyReference URI="#BasicHttpBinding_IBrokerServiceExternalBasicStreamed_policy"/>
//         <soap:binding transport="http://schemas.xmlsoap.org/soap/http"/>
//         <wsdl:operation name="Test">
//             <soap:operation soapAction="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test"
//                             style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//         <wsdl:operation name="UploadFileStreamedBasic">
//             <soap:operation
//                     soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/UploadFileStreamedBasic"
//                     style="document"/>
//             <wsdl:input name="StreamedPayloadBasicBE">
//                 <soap:header message="tns:StreamedPayloadBasicBE_Headers" part="FileName" use="literal"/>
//                 <soap:header message="tns:StreamedPayloadBasicBE_Headers" part="Reference" use="literal"/>
//                 <soap:header message="tns:StreamedPayloadBasicBE_Headers" part="Reportee" use="literal"/>
//                 <soap:header message="tns:StreamedPayloadBasicBE_Headers" part="SystemPassword" use="literal"/>
//                 <soap:header message="tns:StreamedPayloadBasicBE_Headers" part="SystemUserName" use="literal"/>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output name="ReceiptExternalStreamedBE">
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//         <wsdl:operation name="DownloadFileStreamedBasic">
//             <soap:operation
//                     soapAction="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasicStreamed/DownloadFileStreamedBasic"
//                     style="document"/>
//             <wsdl:input>
//                 <soap:body use="literal"/>
//             </wsdl:input>
//             <wsdl:output>
//                 <soap:body use="literal"/>
//             </wsdl:output>
//             <wsdl:fault name="AltinnFaultFault">
//                 <soap:fault name="AltinnFaultFault" use="literal"/>
//             </wsdl:fault>
//         </wsdl:operation>
//     </wsdl:binding>
//     <wsdl:service name="BrokerServiceExternalBasicStreamedSF">
//         <wsdl:port name="BasicHttpBinding_IBrokerServiceExternalBasicStreamed"
//                    binding="tns:BasicHttpBinding_IBrokerServiceExternalBasicStreamed">
//             <soap:address
//                     location="http://at06.altinn.no/ServiceEngineExternal/BrokerServiceExternalBasicStreamed.svc"/>
//         </wsdl:port>
//     </wsdl:service>
// </wsdl:definitions>`)

}


function BrokerServiceExternalBasic(req, res){
    // console.log(JSON.stringify(req.body, null, 2));
    //
    // console.log("IS THERE ALSOE A POST????????");
    console.log('BrokerServiceExternalBasic RESPONSE');
    res.send(BrokerServiceExternalBasicResponse());
}

module.exports = { getBrokerServiceExternalBasicWSDL, BrokerServiceExternalBasic, getBrokerServiceExternalBasicStreamedWSDL };


function BrokerServiceExternalBasicResponse(){
    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
            <soapenv:Header/>
            <soapenv:Body></soapenv:Body>
        </soapenv:Envelope>`
}