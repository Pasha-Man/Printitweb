import React from 'react';
import {
  Paper,
  InputBase,
  Button,
} from '@material-ui/core';
import {
  useStyles,
  ChatHeader,
  ChatBody,
  ChatFooter,
} from './styles';
import Message from '../../components/Message/Message';

const Chat = ({
  user = null,
  messages,
  loading = false,
  inputValue = '',
  setInputValue,
  sendMessage,
}) => {
  const classes = useStyles();

  if (loading) {
    return <Message />;
  }

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      sendMessage();
    }
  };

  return (
    <Paper component="div" className={classes.root}>
      <ChatHeader>
        Welcome to chat room
      </ChatHeader>
      <ChatBody>
        {messages.map((item) => (
          <Message
            key={item.createdAt}
            createdAt={item.createdAt}
            text={item.text}
            displayName={item.displayName}
            photoURL={item.photoURL}
            userMessage={item.uid === user.uid ? 1 : 0}
          />
        ))}
      </ChatBody>
      <ChatFooter onSubmit={sendMessage}>
        <InputBase
          className={classes.input}
          placeholder="Type your message..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button color="secondary" type="submit">
          Send
        </Button>
      </ChatFooter>
    </Paper>
  );
};

export default Chat;
