function getBasicWSDL () {
    return `<?xml version="1.0" encoding="UTF-8"?>
<wsdl:definitions name="BrokerServiceExternalBasicSF" targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:wsaw="http://www.w3.org/2006/05/addressing/wsdl" xmlns:q6="http://www.altinn.no/services/2009/10" xmlns:q8="http://www.altinn.no/services/common/fault/2009/10" xmlns:tns="http://www.altinn.no/services/ServiceEngine/Broker/2015/06" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
  <wsdl:types>
    <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/2009/10">
      <xsd:element name="Test">
        <xsd:complexType>
          <xsd:sequence/>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="TestResponse">
        <xsd:complexType>
          <xsd:sequence/>
        </xsd:complexType>
      </xsd:element>
    </xsd:schema>
    <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/common/fault/2009/10" xmlns:tns="http://www.altinn.no/services/common/fault/2009/10">
      <xsd:complexType name="AltinnFault">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a SOAP fault message used by Altinn to convey exception information to the
                                caller.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element minOccurs="0" name="AltinnErrorMessage" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the error message.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="AltinnExtendedErrorMessage" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the verbose version of the error message.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="AltinnLocalizedErrorMessage" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the localized version of the error message.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="ErrorGuid" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the unique GUID for the specific fault.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="ErrorID" type="xsd:int">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the error type id.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="UserGuid" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the GUID of the user.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="UserId" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the id of the user.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="AltinnFault" nillable="true" type="tns:AltinnFault"/>
    </xsd:schema>
    <xs:schema attributeFormDefault="qualified" elementFormDefault="qualified" targetNamespace="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:tns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:xs="http://www.w3.org/2001/XMLSchema">
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
    <xsd:schema elementFormDefault="qualified" targetNamespace="http://www.altinn.no/services/ServiceEngine/Broker/2015/06">
      <xsd:import namespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
      <xsd:element name="InitiateBrokerServiceBasic">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
            <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
            <xsd:element minOccurs="1" name="brokerServiceInitiation" type="q1:BrokerServiceInitiation" xmlns:q1="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="InitiateBrokerServiceBasicResponse">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="0" name="InitiateBrokerServiceBasicResult" nillable="true" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="GetAvailableFilesBasic">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
            <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
            <xsd:element minOccurs="1" name="searchParameters" type="q2:BrokerServiceSearch" xmlns:q2="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="GetAvailableFilesBasicResponse">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="0" name="GetAvailableFilesBasicResult" nillable="true" type="q3:BrokerServiceAvailableFileList" xmlns:q3="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ConfirmDownloadedBasic">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element minOccurs="1" name="systemUserName" type="xsd:string"/>
            <xsd:element minOccurs="1" name="systemPassword" type="xsd:string"/>
            <xsd:element minOccurs="1" name="fileReference" type="xsd:string"/>
            <xsd:element minOccurs="1" name="reportee" type="xsd:string"/>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ConfirmDownloadedBasicResponse">
        <xsd:complexType>
          <xsd:sequence/>
        </xsd:complexType>
      </xsd:element>
    </xsd:schema>
    <xsd:schema elementFormDefault="qualified" targetNamespace="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06" xmlns:ser="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:tns="http://schemas.altinn.no/services/ServiceEngine/Broker/2015/06">
      <xsd:import namespace="http://schemas.altinn.no/services/serviceEntity/2015/06"/>
      <xsd:import namespace="http://schemas.microsoft.com/2003/10/Serialization/"/>
      <xsd:complexType name="BrokerServiceInitiation">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Contains metadata information for initiating a new Broker Service.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element name="Manifest" nillable="true" type="tns:Manifest">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the manifest for this Broker Service
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="RecipientList" nillable="true" type="tns:ArrayOfRecipient">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the list of Recipients for this Broker Service
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="BrokerServiceInitiation" nillable="true" type="tns:BrokerServiceInitiation"/>
      <xsd:complexType name="Manifest">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a broker service manifest element with details about the broker service.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element name="ExternalServiceCode" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the ExternalServiceCode.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="ExternalServiceEditionCode" type="xsd:int">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the ExternalServiceEditionCode.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="FileList" nillable="true" type="tns:ArrayOfFile">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a list of files for the broker service manifest.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="PropertyList" nillable="true" type="tns:ArrayOfProperty">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a list of properties for the broker service manifest.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="Reportee" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the Reportee. Meaning the organization number or social security
                                        number for the sender of the file.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="SendersReference" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the SendersReference of the file. A reference value defined by the
                                        file creator.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="Manifest" nillable="true" type="tns:Manifest"/>
      <xsd:complexType name="ArrayOfFile">
        <xsd:sequence>
          <xsd:element maxOccurs="unbounded" minOccurs="0" name="File" nillable="true" type="tns:File"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="ArrayOfFile" nillable="true" type="tns:ArrayOfFile"/>
      <xsd:complexType name="File">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a list of files for the broker service manifest
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element minOccurs="0" name="CheckSum" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a checksum for the file
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="FileName" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the name of the file
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="File" nillable="true" type="tns:File"/>
      <xsd:complexType name="ArrayOfProperty">
        <xsd:sequence>
          <xsd:element maxOccurs="unbounded" minOccurs="0" name="Property" nillable="true" type="tns:Property"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="ArrayOfProperty" nillable="true" type="tns:ArrayOfProperty"/>
      <xsd:complexType name="Property">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a list of properties for the broker service manifest
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element name="PropertyKey" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a property key
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="PropertyValue" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a property value
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="Property" nillable="true" type="tns:Property"/>
      <xsd:complexType name="ArrayOfRecipient">
        <xsd:sequence>
          <xsd:element maxOccurs="unbounded" minOccurs="0" name="Recipient" nillable="true" type="tns:Recipient"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="ArrayOfRecipient" nillable="true" type="tns:ArrayOfRecipient"/>
      <xsd:complexType name="Recipient">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a recipient for initiating a new broker service instance.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element name="PartyNumber" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the PartyNumber (org. number or SSN) for the recipient
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="Recipient" nillable="true" type="tns:Recipient"/>
      <xsd:complexType name="BrokerServiceSearch">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                Represents a set of parameters for performing a filtered search for broker service files
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the optional parameter to filter on ExternalServiceCode (must be
                                        used together with ExternalServiceEditionCode)
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="ExternalServiceEditionCode" type="xsd:int">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the optional parameter to filter on ExternalServiceEditionCode
                                        (must be used together with ExternalServiceCode)
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="FileStatus" type="q4:BrokerServiceAvailableFileStatus" xmlns:q4="http://schemas.altinn.no/services/serviceEntity/2015/06">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the mandatory parameter to filter on a specific file status.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="MaxSentDateTime" type="xsd:dateTime">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the optional parameter to filter on a maximum SentDate
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="MinSentDateTime" type="xsd:dateTime">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the optional parameter to filter on a minimum SentDate
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element name="Reportee" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the mandatory parameter to filter on a specific reportee.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="BrokerServiceSearch" nillable="true" type="tns:BrokerServiceSearch"/>
      <xsd:complexType name="BrokerServiceAvailableFileList">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                This Business Entity is used as a return entity to represent a list of available broker
                                service files for a recipient.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element maxOccurs="unbounded" minOccurs="0" name="BrokerServiceAvailableFile" nillable="true" type="tns:BrokerServiceAvailableFile"/>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="BrokerServiceAvailableFileList" nillable="true" type="tns:BrokerServiceAvailableFileList"/>
      <xsd:complexType name="BrokerServiceAvailableFile">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:Text z:Id="2">&lt;summary&gt;
                                This Business Entity is used as a return entity to represent available broker service
                                files for recipients.
                                &lt;/summary&gt;</d1p1:Text>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:sequence>
          <xsd:element minOccurs="0" name="ExternalServiceCode" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets external service code given when external parties are retrieving
                                        service information
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="ExternalServiceEditionCode" type="xsd:int">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets external service edition code when external parties are retrieving
                                        service information
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="FileName" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets File Name.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="FileReference" type="ser:guid">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets Broker Service File Reference.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="FileSize" type="xsd:long">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets File Size in bytes.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="FileStatus" type="q5:BrokerServiceAvailableFileStatus" xmlns:q5="http://schemas.altinn.no/services/serviceEntity/2015/06">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets status for this recipient
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="IsSftpDownloadOnly" type="xsd:boolean">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets a value indicating whether the file is only downloadable by using
                                        SFTP
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="ReceiptID" type="xsd:int">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets Receipt Id.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="Reportee" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the reportee of the file. Meaning the organization number or social
                                        security number for the sender of the file.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="SendersReference" nillable="true" type="xsd:string">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the senders reference of the file. A reference value defined by the
                                        file creator.
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
          <xsd:element minOccurs="0" name="SentDate" type="xsd:dateTime">
            <xsd:annotation>
              <xsd:appinfo>
                <Surrogate i:type="d1p1:Annotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
                  <d1p1:Text z:Id="2">&lt;summary&gt;
                                        Gets or sets the sent date
                                        &lt;/summary&gt;</d1p1:Text>
                </Surrogate>
              </xsd:appinfo>
            </xsd:annotation>
          </xsd:element>
        </xsd:sequence>
      </xsd:complexType>
      <xsd:element name="BrokerServiceAvailableFile" nillable="true" type="tns:BrokerServiceAvailableFile"/>
    </xsd:schema>
    <xsd:schema elementFormDefault="qualified" targetNamespace="http://schemas.altinn.no/services/serviceEntity/2015/06" xmlns:tns="http://schemas.altinn.no/services/serviceEntity/2015/06">
      <xsd:simpleType name="BrokerServiceAvailableFileStatus">
        <xsd:annotation>
          <xsd:appinfo>
            <Surrogate i:type="d1p1:EnumAnnotation" xmlns="http://schemas.microsoft.com/2003/10/Serialization/" xmlns:d1p1="XmlCommentsExporter.Annotation" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/" z:Id="1">
              <d1p1:EnumText z:Id="2">&lt;summary&gt;
                                Defines the different status values for available broker service files.
                                &lt;/summary&gt;</d1p1:EnumText>
              <d1p1:Members xmlns:d2p1="http://schemas.microsoft.com/2003/10/Serialization/Arrays" z:Id="3" z:Size="2">
                <d2p1:KeyValueOfstringstring>
                  <d2p1:Key z:Id="4">Uploaded</d2p1:Key>
                  <d2p1:Value z:Id="5">&lt;summary&gt;
                                        Specifies that a new file is uploaded and ready for download.
                                        &lt;/summary&gt;</d2p1:Value>
                </d2p1:KeyValueOfstringstring>
                <d2p1:KeyValueOfstringstring>
                  <d2p1:Key z:Id="6">Downloaded</d2p1:Key>
                  <d2p1:Value z:Id="7">&lt;summary&gt;
                                        Specifies that a file has already been downloaded but is still available.
                                        &lt;/summary&gt;</d2p1:Value>
                </d2p1:KeyValueOfstringstring>
              </d1p1:Members>
            </Surrogate>
          </xsd:appinfo>
        </xsd:annotation>
        <xsd:restriction base="xsd:string">
          <xsd:enumeration value="Uploaded"/>
          <xsd:enumeration value="Downloaded"/>
        </xsd:restriction>
      </xsd:simpleType>
      <xsd:element name="BrokerServiceAvailableFileStatus" nillable="true" type="tns:BrokerServiceAvailableFileStatus"/>
    </xsd:schema>
  </wsdl:types>
  <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage">
    <wsdl:part name="detail" element="q8:AltinnFault">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage">
    <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasicResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage">
    <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasic">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage">
    <wsdl:part name="detail" element="q8:AltinnFault">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage">
    <wsdl:part name="parameters" element="tns:GetAvailableFilesBasic">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage">
    <wsdl:part name="detail" element="q8:AltinnFault">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage">
    <wsdl:part name="parameters" element="tns:InitiateBrokerServiceBasic">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage">
    <wsdl:part name="parameters" element="tns:GetAvailableFilesBasicResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_Test_InputMessage">
    <wsdl:part name="parameters" element="q6:Test">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage">
    <wsdl:part name="detail" element="q8:AltinnFault">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_Test_OutputMessage">
    <wsdl:part name="parameters" element="q6:TestResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:message name="IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage">
    <wsdl:part name="parameters" element="tns:ConfirmDownloadedBasicResponse">
    </wsdl:part>
  </wsdl:message>
  <wsdl:portType name="IBrokerServiceExternalBasic">
<wsdl:documentation>&lt;summary&gt;
            External interface for exposing service operations for Broker Service on basic binding.
            Used for end user systems to handle file operations.
            &lt;/summary&gt;</wsdl:documentation>
    <wsdl:operation name="Test">
      <wsdl:input message="tns:IBrokerServiceExternalBasic_Test_InputMessage" wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/Test">
    </wsdl:input>
      <wsdl:output message="tns:IBrokerServiceExternalBasic_Test_OutputMessage" wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestResponse">
    </wsdl:output>
      <wsdl:fault name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_Test_AltinnFaultFault_FaultMessage" wsaw:Action="http://www.altinn.no/services/2009/10/IAltinnContractBase/TestAltinnFaultFault">
    </wsdl:fault>
    </wsdl:operation>
    <wsdl:operation name="InitiateBrokerServiceBasic">
<wsdl:documentation><![CDATA[<summary>
                Operation for initiating a broker service.
                </summary>
                <param name="systemUserName">
                System user name is the system identifier for the end user system as registered in Altinn - mandatory
                parameter
                </param>
                <param name="systemPassword">
                System password is the password for the registered end user system - mandatory parameter
                </param>
                <param name="brokerServiceInitiation">
                Defines the manifest data and recipient list needed for initiating the broker service. Contains
                information as ... - mandatory parameter
                </param>
                <returns>
                A Senders Reference for the initiated broker service
                </returns>]]></wsdl:documentation>
      <wsdl:input message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_InputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasic">
    </wsdl:input>
      <wsdl:output message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_OutputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicResponse">
    </wsdl:output>
      <wsdl:fault name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_InitiateBrokerServiceBasic_AltinnFaultFault_FaultMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/InitiateBrokerServiceBasicAltinnFaultFault">
    </wsdl:fault>
    </wsdl:operation>
    <wsdl:operation name="GetAvailableFilesBasic">
<wsdl:documentation><![CDATA[<summary>
                Operation for retrieving a list of available files for download from the broker service.
                </summary>
                <param name="systemUserName">
                System user name is the system identifier for the end user system as registered in Altinn - mandatory
                parameter
                </param>
                <param name="systemPassword">
                System password is the password for the registered end user system - mandatory parameter
                </param>
                <param name="searchParameters">
                Set of parameters to perform the lookup based on
                </param>
                <returns>
                A list of available BrokerServiceFileBE entities for download
                </returns>]]></wsdl:documentation>
      <wsdl:input message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_InputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasic">
    </wsdl:input>
      <wsdl:output message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_OutputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicResponse">
    </wsdl:output>
      <wsdl:fault name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_GetAvailableFilesBasic_AltinnFaultFault_FaultMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/GetAvailableFilesBasicAltinnFaultFault">
    </wsdl:fault>
    </wsdl:operation>
    <wsdl:operation name="ConfirmDownloadedBasic">
      <wsdl:input message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_InputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasic">
    </wsdl:input>
      <wsdl:output message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_OutputMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicResponse">
    </wsdl:output>
      <wsdl:fault name="AltinnFaultFault" message="tns:IBrokerServiceExternalBasic_ConfirmDownloadedBasic_AltinnFaultFault_FaultMessage" wsaw:Action="http://www.altinn.no/services/ServiceEngine/Broker/2015/06/IBrokerServiceExternalBasic/ConfirmDownloadedBasicAltinnFaultFault">
    </wsdl:fault>
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
        <soap:fault name="AltinnFaultFault" use="literal"/>
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
        <soap:fault name="AltinnFaultFault" use="literal"/>
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
        <soap:fault name="AltinnFaultFault" use="literal"/>
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
        <soap:fault name="AltinnFaultFault" use="literal"/>
      </wsdl:fault>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:service name="BrokerServiceExternalBasicSF">
    <wsdl:port name="BasicHttpBinding_IBrokerServiceExternalBasic" binding="tns:BasicHttpBinding_IBrokerServiceExternalBasic">
      <soap:address location="http://MacBook-Pro.local:8089/"/>
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>`
}

module.exports = { getBasicWSDL };