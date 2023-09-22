"use client"
import qs from "query-string";

import { useSocket } from "@/components/providers/socket-provider"
import { SocketIndicator } from "@/components/socket-indicator";
import { useState,useEffect } from "react"

export default function Test() {
  const [input, setInput] = useState('')
  const [inputValue, setInputValue] = useState(['']) // added state variable
  const { isConnected, socket } = useSocket();
  const onChangeHandler = (e) => {
    if (!isConnected) {
      console.log("not connected");
    }
    setInput(e.target.value)
    socket.emit('input-change', e.target.value)
  }
  useEffect(()=>{
    if (!socket) {
      return;
    }
    socket.on('input-change', mesg=>{
      console.log("activated");
    })
    return ()=> socket.off('input-change');
  })
  // socket.on('input-change', msg => { // added event listener
  //   setInputValue(msg)
  // })
  const handleSubmit = (e) =>{
    e.preventDefault();
    // const url = qs.stringifyUrl({
    //   url: apiUrl,
    //   query: {
    //     cursor: pageParam,
    //     [paramKey]: paramValue,
    //   }
    // }, { skipNull: true });

    // const res = await fetch(url);
    // return res.json();
    // if(e.target){
    //   console.log("hello");
    //   socket.on('chat message', (msg) => {
    //     socket.emit('chat message', msg);
    //   });
    //   setInput('');
    // }
  }
  socket?.on('chat message', (msg) => {
    console.log("listeing to");
    setInputValue(a => a + msg)
  });
  return (
    <div className="relative block  left-[300px]">
      <SocketIndicator />
      
      {input}
      <form action="" onSubmit={handleSubmit}>
        <input
          placeholder="Type a message"
          value={input}
          onChange={onChangeHandler}
        />
        <button type="submit">Send</button>
      </form>
      <li>
        {inputValue}
      </li>
    </div>
  )
}