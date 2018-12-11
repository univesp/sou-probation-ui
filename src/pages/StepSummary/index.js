import React, { Fragment } from 'react';

import Document from '../../components/Document';
import { Title, Subtitle, Row, Col, Data, Item, Datum } from './styles';

const StepSummary = ({ values: { files } }) => (
  <Fragment>
    <Title>Resumo</Title>
    <Subtitle>Dados Pessoais</Subtitle>
    <Row>
      <Col>
        <Data>
          <Item>
            Nome <Datum>Marco Antônio</Datum>
          </Item>
          <Item>
            Sobrenome <Datum>Barão Neves</Datum>
          </Item>
          <Item>
            Nome Social <Datum>Não possui</Datum>
          </Item>
          <Item>
            Data de nascimento <Datum>16/05/2000</Datum>
          </Item>
          <Item>
            Sexo <Datum>Masculino</Datum>
          </Item>
          <Item>
            Naturalidade <Datum>Brasileira</Datum>
          </Item>
          <Item>
            Nacionalidade <Datum>Brasileira</Datum>
          </Item>
          <Item>
            CPF <Datum>123.456.789-00</Datum>
          </Item>
          <Item>
            Raça <Datum>Branco</Datum>
          </Item>
          <Item>
            Estado Civil <Datum>Solteiro(a)</Datum>
          </Item>
          <Item>
            Tipo de Sangue <Datum>O+</Datum>
          </Item>
          <Item>
            Doador de órgãos? <Datum>Sim</Datum>
          </Item>
        </Data>
      </Col>
      <Col>
        <Data>
          <Item>
            Logradouro <Datum>Rua Prof. Almeida Prado</Datum>
          </Item>
          <Item>
            Número <Datum>532</Datum>
          </Item>
          <Item>
            CEP <Datum>05508-280</Datum>
          </Item>
          <Item>
            Bairro <Datum>Buntantã</Datum>
          </Item>
          <Item>
            Cidade <Datum>São Paulo</Datum>
          </Item>
          <Item>
            Complemento <Datum>Prédio 1</Datum>
          </Item>
          <Item>
            Celular <Datum>(11) 98422-6444</Datum>
          </Item>
          <Item>
            E-mail pessoal <Datum>marco.barao@outlook.com</Datum>
          </Item>
          <Item>
            E-mail profissional
            <Datum>marco.neves@connectcom.univesp.br</Datum>
          </Item>
        </Data>
      </Col>
    </Row>
    <Subtitle>Dados da Concedente</Subtitle>
    <Row>
      <Col>
        <Data>
          <Item>
            Nome <Datum>Marco Antônio</Datum>
          </Item>
          <Item>
            Sobrenome <Datum>Barão Neves</Datum>
          </Item>
          <Item>
            Nome Social <Datum>Não possui</Datum>
          </Item>
          <Item>
            Data de nascimento <Datum>16/05/2000</Datum>
          </Item>
          <Item>
            Sexo <Datum>Masculino</Datum>
          </Item>
          <Item>
            Naturalidade <Datum>Brasileira</Datum>
          </Item>
          <Item>
            Nacionalidade <Datum>Brasileira</Datum>
          </Item>
          <Item>
            CPF <Datum>123.456.789-00</Datum>
          </Item>
          <Item>
            Raça <Datum>Branco</Datum>
          </Item>
          <Item>
            Estado Civil <Datum>Solteiro(a)</Datum>
          </Item>
          <Item>
            Tipo de Sangue <Datum>O+</Datum>
          </Item>
          <Item>
            Doador de órgãos? <Datum>Sim</Datum>
          </Item>
        </Data>
      </Col>
      <Col>
        <Data>
          <Item>
            Logradouro <Datum>Rua Prof. Almeida Prado</Datum>
          </Item>
          <Item>
            Número <Datum>532</Datum>
          </Item>
          <Item>
            CEP <Datum>05508-280</Datum>
          </Item>
          <Item>
            Bairro <Datum>Buntantã</Datum>
          </Item>
          <Item>
            Cidade <Datum>São Paulo</Datum>
          </Item>
          <Item>
            Complemento <Datum>Prédio 1</Datum>
          </Item>
          <Item>
            Celular <Datum>(11) 98422-6444</Datum>
          </Item>
          <Item>
            E-mail pessoal <Datum>marco.barao@outlook.com</Datum>
          </Item>
          <Item>
            E-mail profissional
            <Datum>marco.neves@connectcom.univesp.br</Datum>
          </Item>
        </Data>
      </Col>
    </Row>
    <Subtitle>Documentos</Subtitle>
    <Row width="100%">
      {Object.keys(files).map(file => (
        <Col>
          <Document file={files[file]} />
        </Col>
      ))}
    </Row>
  </Fragment>
);

export default StepSummary;