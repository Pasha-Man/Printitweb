import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    height: '40%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '1px',
  },
  avatar: {
    height: '80px',
    width: '80px',
    marginTop: '10px',
  },
  button: {
    width: '99%',
    marginTop: 'auto',
  },
}));

export const Header = styled.div`
  background: #2d3748;
  height: 40px;
  width: 100%;
  color: #ccc;
  font-size: 14px;
  padding: 10px 10px 0 10px;
  white-space: nowrap;
`;

export const UserName = styled.span`
  font-size: 16px;
  color: #fff;
  margin-left: 5px;
`;
