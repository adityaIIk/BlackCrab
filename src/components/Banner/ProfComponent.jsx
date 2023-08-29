import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import logo from "../assets/BLACKCRAB_PNG-06.png"
import ScrollDownButton from "../ScrollDownButton/ScrollDownButton";



const ProfComponent = () => {
  const scrollToContent = () => {
    // Scroll to a specific position on the page (e.g., the content section)
    const contentElement = document.getElementById('service');
    if (contentElement) {
      window.scrollTo({
        top: contentElement.offsetTop,
        behavior: 'smooth', // Use smooth scrolling animation
      });
    }
  };
  return (
    <Container id="home">
     <Slide direction="down">
        <Profile>
          <img
            src={logo}
            alt="logo"
          />
        </Profile>
      </Slide>
      <Slide direction="up">
        <Texts>
            {/* <h4  className="center-items">
              Welcome<span className="green" style={{marginLeft:'0.5rem'}}>To</span>
            </h4> */}
          <h1 className="green center-items">BLACKCRAB</h1>
          <h3 className="center-items">Where Technology Meets Possibility</h3>
          {/* <p>
            We specialize in AI, Cybersecurity, Databases, Cloud Solutions, Training, Research, and Innovative Technology Products.
          </p> */}
          <div className="center-items" onClick={scrollToContent}>
          <ScrollDownButton />
          </div>
         
        </Texts>
      </Slide>
     
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    ${'' /* font-family: "Secular One", sans-serif; */}
    line-height: 4rem;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    @media (max-width:428px){
      font-size:0.8rem;
    }
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
    background-color: #993399;
    border: none;
    color: #fff;
    font-weight: 500;
    border-radius:15px;
    :hover {
      filter: drop-shadow(0px 0px 10px #993399);
    }
  }
`;
const Profile = styled.div`
  background-color: #C5C5C5;
  margin-top: 8rem;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:  background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  :hover {
    background-color: #fff;
    box-shadow: 0px 0px 30px rgba(200, 200, 200, 0.8); 
  }

  img {
    width: 100%; /* Image size will increase, but white profile element remains same size */
    transition: transform 0.4s ease-in-out;

    :hover {
      transform: scale(1.3);
    }
  }
`;
