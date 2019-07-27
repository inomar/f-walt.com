import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import { ButtonClick } from '../components/atoms/Button';
import {contactDescription } from '../config/constantes';
import Headers from '../components/layout/Headers';
import Ogp from '../components/molecules/Ogp';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      ticket: null,
      message: null,
    }
    this.sendHandle = this.sendHandle.bind(this);
    this.inputHandle = this.inputHandle.bind(this);
    this.convertJsontoUrlencoded = this.convertJsontoUrlencoded.bind(this);
    
  }


  inputHandle(e) {
    const { name, value } = e.target;
    this.state[name] = value;
    this.setState({...this.state});
  }

  convertJsontoUrlencoded(obj) {
    let str = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
      }
    }
    return str.join("&");
  }


  sendHandle(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    const data = {
      fname: name,
      femail: email,
      fmessage: message,
      _wpcf7_nonce: 'aaa',
      _wpcf7: 36,
      _wpcf7_version: '5.1.3',
      _wpcf7_locale: 'ja',
      _wpcf7_unit_tag: 'wpcf7-f36-p1-o1',
      _wpcf7_container_post: 1,
    };
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
    console.log(data)
    axios({
      method: 'POST',
      url: 'https://fwalt.cfbx.jp/wp-json/contact-form-7/v1/contact-forms/36/feedback',
      data: this.convertJsontoUrlencoded(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
    }).then((res) => {
      const { status, message } = res.data;
      console.log(res)
      if (status === 'validation_failed') this.setState({ error: true, errorMessage: message})
  })
  .catch(error => {
      console.log(error);
  });
  }

  render() {
    return (
      <Layout>
        <Headers pageTitle={'CONTACT'} pageDescription={contactDescription} />
        <Ogp title={'CONTACT'} description={contactDescription} />
        <UnderLayer title="CONTACT">
          <section className="section">
            <div className="container">
              <Paragraph>coming soon...</Paragraph>
            </div>
          </section>
        </UnderLayer>
      </Layout>
    )
  }

}

export default Contact;


const SendWrap = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
`;