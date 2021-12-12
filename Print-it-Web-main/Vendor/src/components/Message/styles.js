import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${({ userMessage }) => (userMessage ? '2px solid green' : '2px solid brown')};
  width: 45%;
  padding: 10px;
  border-radius: 15px;
  margin-left: ${({ userMessage }) => (userMessage ? 'initial' : 'auto')};
  margin-bottom: 10px;
  background: #ccc;
`;

export const TextWrapper = styled.div`
  margin-left: 10px;
`;

export const UserName = styled.p``;

export const MessageDate = styled.span``;

export const MessageText = styled.p``;
