import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { useState } from "react";
import VideoConference from "./VideoConference";

const Chat = () => {
  const { data } = useContext(ChatContext);

  let [video, setVideo] = useState(false);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <a
            onClick={(e) => {
              setVideo(true);
            }}
            href="#"
          >
            <img src={Cam} alt="" />
          </a>
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>

      {video && <VideoConference />}

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
