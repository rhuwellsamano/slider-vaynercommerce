import React from 'react';
import styled from 'styled-components';
import leftArrow from '../../img/arrow-left.svg';
import rightArrow from '../../img/arrow-right.svg';

const Arrow = ({ direction, handleClick }) => (
  <ArrowStyles onClick={handleClick} direction={direction}>
    {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
  </ArrowStyles>
);

export const ArrowStyles = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${(props) => (props.direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

export default Arrow;
