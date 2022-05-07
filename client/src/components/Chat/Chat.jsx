import React from "react";
import "../../style/chat.scss";
import UserChat from "./UserChat";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-content border">
        <div className="chat-list">
          <div className="chat-list-header chat-header flex">
            <div className="chat-list-header-username gap-10 flex">
              <p>vantusieunhan</p>
              <i className="fa-regular fa-chevron-down"></i>
            </div>
            <div className="chat-list-header-btnfix">
              <i className="fa-light fa-pen-to-square"></i>
            </div>
          </div>
          <div className="chat-list-user chat-wrapper">
            <div className="chat-list-user-box">
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
              <UserChat
                photo={
                  "https://thuthuatnhanh.com/wp-content/uploads/2021/02/hinh-nen-cute-phi-hanh-gia-vu-tru.jpg"
                }
                username={"Minh Cu"}
                desc={"Active 3 min ago"}
                id={"111111"}
              />
            </div>
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-content-header chat-header"></div>
          <div className="chat-content-user chat-wrapper"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
