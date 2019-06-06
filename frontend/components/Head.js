import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

import Burger from '@animated-burgers/burger-slip';

import { fontFamilyAntiqu } from './atoms/snippets';
import Color from './atoms/Color';
import { Container } from './atoms/style';

const Menu = ['NEWS', 'LIVE', 'VIDEO', 'MARCH', 'BIOGRAPHY', 'CONTACT'];

export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu () {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render () {
    const { isOpen } = this.state;
    return (
      <header>
        <Brand>
          <img src="/static/logo.png" />
        </Brand>
        <Container className="container">
          <Nav>
            <NavItems>
              {
                Menu.map(menu => <NavItemLink>{menu}</NavItemLink>)
              }
            </NavItems>
          </Nav>
        </Container>
        <MobileBurger>
          <Burger onClick={this.toggleMenu} isOpen={isOpen}/>
        </MobileBurger>
        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <ModalMenu className="menu">
              <ul className="menu-list">
                {
                  Menu.map(menu => <li><a>{menu}</a></li>)
                }
              </ul>
            </ModalMenu>
          </div>
        </div>
      </header>
    )
  }
}

const Nav = styled.nav`
  ${media.lessThan("medium")`
    display: none;
  `}
`;
const MobileBurger = styled.div`
  display: none;
  ${media.lessThan("medium")`
    z-index: 1000;
    display: block;
    position: fixed;
    top: 10px;
    right: 20px;
    .burger-lines {
      height: 0.2em;
      &:after {
        top: -0.8em;
      }
      &:before {
        top: 0.85em;
      }
      &:before, :after {
        height: 0.2em;
      }
    }
  `}
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Brand = styled.div`
  padding: 10px 0;
  text-align: center;
  & img {
    height: 130px;
    ${media.lessThan("medium")`
      height: 80px;
    `}
  }
`;

const NavItemLink = styled.a`
  ${fontFamilyAntiqu}
  font-size: 1.5rem;
  padding: 20px 0;
  line-height: 0.5;
`;

const ModalMenu = styled.aside`
  font-size: 1.2rem;
`;