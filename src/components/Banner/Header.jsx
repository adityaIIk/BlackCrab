import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      {isScrolled && (
        <Logo>
          <h1>Logo</h1>
        </Logo>
      )}
      <NavLinks>
        <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <span>&#9776;</span>
        </DropdownButton>
        <NavLinksList isOpen={isDropdownOpen}>
          <NavItem href='#home'>Home</NavItem>
          <NavItem href='#service'>Our Services</NavItem>
          <NavItem href='#client'>About Us</NavItem>
          <NavItem href='#footer'>Contact Us</NavItem>
        </NavLinksList>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  transition: background-color 0.3s;
  z-index: 1;
  &.scrolled {
    background-color: #000;
  }
`;

const Logo = styled.div`
  span {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const DropdownButton = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
   
    span {
      font-size: 2rem;
    }
  }
`;

const NavLinksList = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 80%;
    left: 0;
    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 1);
    z-index: 2;
    a {
      color: #FFF;
      text-decoration: none;
      transition: opacity 0.3s ease-in-out;
      font-family: 'Orbitron', sans-serif;
      :hover {
        color: #993399;
      }
    }
  }
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;
  font-family: 'Orbitron', sans-serif;
  :hover {
    color: #993399;
  }
`;

export default Header;
