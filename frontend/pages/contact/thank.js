import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout/Layout';
import UnderLayer from '../../components/layout/Underlayer';
import {contactDescription } from '../../config/constantes';
import Headers from '../../components/layout/Headers';
import Ogp from '../../components/molecules/Ogp';

export default () => {
  return (
    <Layout>
      <Headers pageTitle={'CONTACT'} pageDescription={contactDescription} />
      <Ogp title={'CONTACT'} description={contactDescription} />
      <UnderLayer title="CONTACT">
        <section className="section">
          <div className="container">
            <Paragraph>
              <Message>Thank you!!</Message>
            </Paragraph>
          </div>
        </section>
      </UnderLayer>
    </Layout>
  )
}

const Paragraph = styled.p`
  text-align: center;
`;

const Message = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;