import React, { useContext, useEffect, useState } from "react";
import { SocketContext, id } from "../context/Socket";

const Chat = () => {
  const Socket = useContext(SocketContext);

  const [msg, setMsg] = useState<string>();

  const sendMsg = (event: { preventDefault: () => void }) => {
    if (msg === "") {
      alert("empty");
    }
    console.log(msg, "Submitted");

    const msgSent = {
      body: msg,
      by: id, //unique number
      grp: "Test", //group name
    };

    Socket.emit("msg", msgSent);

    event.preventDefault();
  };
  useEffect(() => {
    Socket.on("recieve-msg", (data) => {
      console.log(data);
    });
  });

  return (
    <>
      <form onSubmit={sendMsg}>
        <input
          type="text"
          value={msg}
          onChange={(event) => setMsg(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Chat;
