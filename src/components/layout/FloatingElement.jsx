import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px;
  padding: 30px;
  background-color: #000;
  border: 1px solid #111;
`;

export default function FloatingElement({
  style = undefined,
  children,
  stretchVertical = false,
}) {
  return (
    <Wrapper
      style={{
        height: stretchVertical ? 'calc(100% - 10px)' : undefined,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  );
}
