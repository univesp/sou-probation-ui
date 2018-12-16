import React from 'react';
import { Formik, Form } from 'formik';
import Dropzone from 'react-dropzone';

import {
  Title,
  Row,
  Col,
  DragDrop,
  Text,
  Document,
  Accepted,
  Icon,
  Field,
  Button
} from './styles';
import Upload from '../../../assets/imgs/upload.svg';
import Success from '../../../assets/imgs/sucesso_upload.svg';

const StepDocuments = ({handleSubmit, initialValues, buttons}) => (
  <Formik
    onSubmit={handleSubmit}
    initialValues={initialValues}
  >
    {({ setFieldValue, values }) => {
      return (
      <Form>
      <Title>Documentação</Title>
      <Row>
        <Col>
          <Dropzone
            accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
            onDrop={([file, ...rest]) => {
              setFieldValue(
                'files.work',
                file
              );
              localStorage.setItem('work', file);
            }}
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <DragDrop {...getRootProps()}>
                <Document>Carteira de trabalho</Document>
                <Text>Arraste para cá ou</Text>
                <Icon
                  src={
                    JSON.stringify(values.files.work) !== '{}' ? Success : Upload
                  }
                />
                <Field {...getInputProps()} />
                <Button>Procure no computador</Button>
                <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
              </DragDrop>
            )}
          </Dropzone>
        </Col>
        <Col>
          <Dropzone
            accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
            onDrop={([file, ...rest]) => {
              setFieldValue(
                'files.explotation',
                file
              );
              localStorage.setItem('explotation', file);
            }}
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <DragDrop {...getRootProps()}>
                <Document>Declaração de aproveitamento</Document>
                <Text>Arraste para cá ou</Text>
                <Icon
                  src={
                    JSON.stringify(values.files.explotation) !== '{}'
                      ? Success
                      : Upload
                  }
                />
                <Field {...getInputProps()} />
                <Button>Procure no computador</Button>
                <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
              </DragDrop>
            )}
          </Dropzone>
        </Col>
        <Col>
          <Dropzone
            accept="image/jpeg,image/jpg,image/png,image/bmp,application/pdf"
            onDrop={([file, ...rest]) => {
              setFieldValue(
                'files.activities',
                file
              );
              localStorage.setItem('activities', file);
            }}
            multiple={false}
          >
            {({ getRootProps, getInputProps }) => (
              <DragDrop {...getRootProps()}>
                <Document>Relatório de atividade</Document>
                <Text>Arraste para cá ou</Text>
                <Icon
                  src={
                    JSON.stringify(values.files.activities) !== '{}'
                      ? Success
                      : Upload
                  }
                />
                <Field {...getInputProps()} />
                <Button>Procure no computador</Button>
                <Accepted>Arquivos aceitos: pdf, jpg, png, bmp</Accepted>
              </DragDrop>
            )}
          </Dropzone>
        </Col>
      </Row>
      {buttons}
    </Form>
    )
  }}
  </Formik>
);

export default StepDocuments;