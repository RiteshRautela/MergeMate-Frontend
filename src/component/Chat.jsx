import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { createToSocketConnection } from '../utils/socket'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const { targetUserId } = useParams()
  const user = useSelector((store) => store.user)
  const socketRef = useRef(null)

  useEffect(() => {
    if (!user?._id || !targetUserId) {
      return
    }

    const socket = createToSocketConnection()
    socketRef.current = socket

    socket.emit("joinchat", {
      firstName: user.firstName,
      userId: user._id,
      targetUserId,
    })

    const handleMessageReceived = ({ firstName, text }) => {
      setMessages((prevMessages) => [...prevMessages, { firstName, text }])
    }

    socket.on("messageReceived", handleMessageReceived)

    return () => {
      socket.off("messageReceived", handleMessageReceived)
      socket.disconnect()
      socketRef.current = null
    }
  }, [targetUserId, user?._id, user?.firstName])

  const sendMessage = () => {
    const trimmedMessage = newMessage.trim()

    if (!trimmedMessage || !socketRef.current || !user?._id) {
      return
    }

    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      userId: user._id,
      targetUserId,
      text: trimmedMessage,
    })

    setMessages((prevMessages) => [
      ...prevMessages,
      { firstName: user.firstName, text: trimmedMessage },
    ])
    setNewMessage("")
  }

  if (!user?._id) {
    return (
      <div className='w-3/4 mx-auto border border-base-300 rounded-xl m-5 h-[70vh] flex items-center justify-center bg-base-200'>
        <p className='text-lg'>Loading chat...</p>
      </div>
    )
  }

  return (
    <div className='w-3/4 mx-auto border border-base-300 rounded-xl m-5 h-[70vh] flex flex-col bg-base-200'>
      <h1 className='p-5 border-b border-base-300 text-2xl font-bold'>Chat</h1>

      <div className='flex-1 overflow-y-auto p-5'>
        {messages.length === 0 && (
          <p className='text-center text-sm text-base-content/70'>
            Start the conversation.
          </p>
        )}

        {messages.map((msg, index) => {
          const isCurrentUser = msg.firstName === user.firstName

          return (
            <div
              key={`${msg.firstName}-${index}`}
              className={`chat ${isCurrentUser ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-header">{msg.firstName}</div>
              <div className="chat-bubble">{msg.text}</div>
            </div>
          )
        })}
      </div>

      <div className='p-5 border-t border-base-300 flex gap-2 items-center'>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage()
            }
          }}
          className='input input-bordered flex-1'
          placeholder='Type a message'
        />

        <button onClick={sendMessage} className='btn btn-secondary'>
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
