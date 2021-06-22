import React from 'react';
import styled from 'styled-components';

const Slide = ({ content, width }) => (
  <SlideStyles content={content} width={width}>
    <Header>{content.title.toUpperCase()}</Header>
    <SubTitle>{content.heading}</SubTitle>
  </SlideStyles>
);

export const SlideStyles = styled.div`
  height: 100%;
  width: ${(props) => props.width}px;
  background-image: url('${(props) =>
    props.width < 500
      ? props.content.media['mobile']
      : props.content.media['desktop']}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Header = styled.h1`
  font-size: 6vh;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  letter-spacing: 4px;
  color: white;
  margin-top: 40vh;
`;

export const SubTitle = styled.h2`
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  opacity: 80%;
  text-align: center;
  letter-spacing: 4px;
  color: white;
  margin-top: 1vh;
`;

export default Slide;
