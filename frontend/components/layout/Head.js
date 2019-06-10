import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import media from 'styled-media-query';

import Burger from '@animated-burgers/burger-slip';

import { fontFamilyAntiqu } from '../atoms/snippets';
import Color from '../atoms/Color';
import { Container } from '../atoms/style';

const Menu = [ 
  {
    name: 'NEWS',
    href: '/news',
  }, {
    name: 'LIVE',
    href: '/live',
  }, {
    name: 'VIDEO',
    href: '/video',
  }, {
    name: 'MARCH',
    href: '/march',
  }, {
    name: 'BIOGRAPHY',
    href: '/biography',
  }, {
    name: 'CONTACT',
    href: '/contact',
  },
];

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
          <Link href="/">
            <a><img src="/static/logo.png" /></a>
          </Link>
        </Brand>
        <Container className="container">
          <Nav>
            <NavItems>
              {
                Menu.map(menu => {
                  const { href, name } = menu;
                  return (
                    <NavItem>
                      <Link href={href}>{name}</Link>
                    </NavItem>
                  )
                })
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
                  Menu.map(menu => <li><Link href={menu.href}>{menu.name}</Link></li>)
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

const NavItem = styled.div`
${fontFamilyAntiqu}
  font-size: 1.5rem;
  padding: 20px 0;
  line-height: 0.5;
`;

const Brand = styled.div`
  padding: 20px 0;
  text-align: center;
  & img {
    height: 120px;
    ${media.lessThan("medium")`
      height: 80px;
    `}
  }
`;

const ModalMenu = styled.aside`
  font-size: 1.2rem;
`;