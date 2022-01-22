import React from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
// import Header from "../../header";
import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZW1wdHktYmlyZC0zIiwiZXhwIjoxNjM5NDY4NTkzfQ.3eBexOl52LpkMelAcpJ9lTILSEqXh4XSoVDuOzm2XY8";

chatClient.connectUser(
  {
    id: "empty-bird-3",
    name: "empty",
  },
  userToken
);

const channel = chatClient.channel("messaging", "custom_channel_id", {
  // add as many custom fields as you'd like

  name: "Vendor",
  members: ["empty-bird-3"],
});

const ChatRoom = () => (
  <Chat client={chatClient} theme="messaging light">
    <Channel channel={channel}>
      <Window>
        <ChannelHeader title={"Vendor"} />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default ChatRoom;
