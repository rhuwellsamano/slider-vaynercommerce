import React, { memo } from 'react';
import styled from 'styled-components';

const Dot = ({ active }) => <DotStyles active={active} />;

const Dots = ({ slides, activeSlide }) => (
  <SpanStyles>
    {slides.map((slide, i) => (
      <MemoDot key={slide + i} active={activeSlide === i} />
    ))}
  </SpanStyles>
);

const MemoDot = memo(Dot);

export const SpanStyles = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotStyles = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.active ? 'black' : 'white')};
`;

export default Dots;
