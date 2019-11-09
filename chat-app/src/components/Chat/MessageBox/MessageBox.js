import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react'

const MessageBox = ({ onSendMessage: pushSendMessage }) => {

  const [message, setMessage] = useState("")

  return (
    <TextField
      label="Message"
      fullWidth
      margin="normal"
      multiline
      rows="4"
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          e.preventDefault()
          pushSendMessage(message)
          setMessage("")
        }
      }}
    />
  )
}

export default MessageBox