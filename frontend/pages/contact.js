import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import UnderLayer from '../components/layout/Underlayer';
import { ButtonClick } from '../components/atoms/Button';

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
  }


  inputHandle(e) {
    const { name, value } = e.target;
    this.state[name] = value;
    this.setState({...this.state});
  }


  sendHandle(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <Layout>
        <UnderLayer title="CONTACT">
          <div className="container">
            <section className="section">

            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input name="name" className="input" type="text" placeholder="お名前やニックネーム" required="true" onChange={this.inputHandle} />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" className="input" type="email" placeholder="メールアドレス" required="true" onChange={this.inputHandle} />
              </div>
            </div>

            <div className="field">
              <label className="label">Ticket</label>
              <div class="control">
                <div class="select">
                  <select name="ticket" onChange={this.inputHandle}>
                    <option>Select</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea name="message" className="textarea" placeholder="メッセージなど" required="true" onChange={this.inputHandle}></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" />
                    I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>


            <SendWrap>
              <ButtonClick title={'Send'} func={this.sendHandle} />
            </SendWrap>
            </section>
          </div>
        </UnderLayer>
      </Layout>
    )
  }

}

export default Contact;


const SendWrap = styled.div`
  text-align: center;
`;