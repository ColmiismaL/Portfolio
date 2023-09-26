import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 3%;
  right: 45%;
  width: 250px;
  padding: 10px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Title = styled.h4`
  margin: 0 0 10px;
  color: #333;
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const InstructionPopup: React.FC = () => {
  return (
    <PopupContainer>
      <Title>How to Use</Title>
      <Message>주황색 부분은 상호작용 가능한 부분입니다.</Message>
    </PopupContainer>
  );
};

export default InstructionPopup;
