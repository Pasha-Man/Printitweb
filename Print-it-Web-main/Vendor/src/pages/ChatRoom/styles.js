import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  grid: {
    margin: '0 auto',
    alignSelf:"center",
  },
  item: {
    padding: theme.spacing(2),
  },
}));

export const Page = styled.main`
  background: linear-gradient(to top, #232526, #414345);
  height: 100vh;
`;
