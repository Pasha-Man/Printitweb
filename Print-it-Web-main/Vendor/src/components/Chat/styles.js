import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    position: 'relative',
  },
  input: {
    color: '#ccc',
    width: '80%',
  },
}));

export const ChatHeader = styled.div`
  background: #2d3748;
  height: 40px;
  width: 100%;
  color: #ccc;
  font-size: 20px;
  padding: 10px 10px 0 10px;
`;

export const ChatBody = styled.div`
  padding: 15px 10px;
  min-height: calc(100% - 80px);
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ChatFooter = styled.form`
  margin-top: auto;
  background: #2d3748;
  height: 40px;
  width: 100%;
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
