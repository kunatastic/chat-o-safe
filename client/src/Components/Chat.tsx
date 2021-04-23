import React, { useState } from "react";
import { Socket } from "../socketHooks/Socket";
const Chat = () => {
  const [msg, setMsg] = useState<string>("");

  const sendMsg = (event: { preventDefault: () => void }) => {
    if (msg === "") {
      alert("em[ty");
    }
    console.log(msg, "Submitted");

    const msgSent = {
      body: msg,
      by: "9876543210", //unique number
      grp: "Test", //group name
    };
    Socket.emit("msg", msgSent);

    event.preventDefault();
  };

  Socket.on("recieve-msg", (data) => {
    console.log(data);
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
