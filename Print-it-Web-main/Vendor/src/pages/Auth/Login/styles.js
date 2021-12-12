import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  button: {
    marginBottom: '20px',
    width: '100%',
  },
  input: {
    marginBottom: '15px',
  },
}));

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #232526, #414345);
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 15px;
  min-height: 300px;
  width: 250px;
  background: #fff;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.75);
`;

export const Title = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LoginText = styled.p`
  margin-bottom: 10px;
`;
