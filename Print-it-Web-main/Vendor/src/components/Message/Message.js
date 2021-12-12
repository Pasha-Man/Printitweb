import React from 'react';
import {
  MessageWrapper,
  TextWrapper,
  UserName,
  MessageDate,
  MessageText,
} from './styles';
import Avatar from '@material-ui/core/Avatar';

const Message = ({
  createdAt = null,
  text = '',
  displayName = '',
  photoURL = '',
  userMessage = false,
}) => (
  <MessageWrapper
    userMessage={userMessage}
  >
    <Avatar alt={displayName} src={photoURL} />
    <TextWrapper>
      <UserName>
        {displayName}
        <MessageDate>
          {/* {createdAt || createdAt.seconds} */}
        </MessageDate>
      </UserName>
      <MessageText>
        {text}
      </MessageText>
    </TextWrapper>
  </MessageWrapper>
);

export default Message;
