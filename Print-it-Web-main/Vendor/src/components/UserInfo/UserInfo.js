import React from 'react';
import {
  Paper,
  Avatar,
  Button,
} from '@material-ui/core';
import {
  useStyles,
  Header,
  UserName,
} from './styles';

const UserInfo = ({
  displayName = '',
  photoURL = '',
  signOut,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Header>
        Hello
        <UserName>{displayName}</UserName>
      </Header>
      <Avatar
        className={classes.avatar}
        alt={displayName}
        src={photoURL}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="medium"
        onClick={signOut}
      >
        Log out
      </Button>
    </Paper>
  );
};

export default UserInfo;
