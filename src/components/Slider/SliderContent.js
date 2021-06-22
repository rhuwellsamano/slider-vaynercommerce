import React from 'react';
import styled from 'styled-components';

const SliderContent = (props) => (
  <SliderContentStyles
    width={props.width}
    translate={props.translate}
    transition={props.transition}
    className="SliderContent"
  >
    {props.children}
  </SliderContentStyles>
);

const SliderContentStyles = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${(props) => props.width}px;
  display: flex;
`;
export default SliderContent;
