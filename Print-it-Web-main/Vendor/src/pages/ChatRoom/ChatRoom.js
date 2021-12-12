import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Header from "../../header";
import NotificationPopup from "../../NotificationPopup";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  useStyles,
  Page,
} from './styles';
import { Grid } from '@material-ui/core';
import Chat from '../../components/Chat/Chat';
// utils
import firebase from 'firebase/app';
import { auth, db } from '../../config';
import UserInfo from '../../components/UserInfo/UserInfo';

const ChatRoom = () => {
  const classes = useStyles();
  const history = useHistory();

  const [inputValue, setInputValue] = useState('');
  const [user, setuser] = useAuthState(auth);
  const [values, loading] = useCollectionData(
    db.collection('messages').orderBy('createdAt'),
  );

  const handlerSendMessage = async (event) => {
    event.preventDefault();
    try {
      await db.collection('messages').add({
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: inputValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInputValue('');
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      history.push('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Page>
          <Header printer="chat" />
          <NotificationPopup />
      <Grid  container>
        <Grid className={classes.item} item xs={9}>
          <Chat
            user={user}
            messages={values}
            loading={loading}
            inputValue={inputValue}
            setInputValue={setInputValue}
            sendMessage={handlerSendMessage}
          />
        </Grid>
        <Grid className={classes.item} item xs={3}>
          <UserInfo {...user} signOut={signOut} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default ChatRoom;
