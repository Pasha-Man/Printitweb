import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  useStyles,
  LoginPage,
  LoginForm,
  Title,
  LoginText,
} from './styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// Icons
import GTranslateIcon from '@material-ui/icons/GTranslate';
// Utils
import firebase from 'firebase/app';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await firebase.auth().signInWithPopup(provider);
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LoginPage>
      <LoginForm>
        <Title>
          Firebase chat app
        </Title>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<GTranslateIcon />}
          onClick={signInWithGoogle}
        >
          Login with Google
        </Button>
        <LoginText>
          or enter email and password
        </LoginText>
        <TextField
          className={classes.input}
          label="Email"
          type="email"
          variant="outlined"
          size="small"
        />
        <TextField
          className={classes.input}
          label="Password"
          type="password"
          variant="outlined"
          size="small"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
