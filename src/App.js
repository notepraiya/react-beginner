import './App.css';
import { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {

  const [username, setUsername] = useState('');
  console.log(username);
  useEffect(() => {
    setUsername(prompt('please enter your name'));
  }, []);

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ data: doc.data(), id: doc.id })));
    });
  }, []);

  const [input, setInput] = useState('');  
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({ 
      username: username, 
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <form className="App-form">
      <FormControl className="App-formControl">
        <Input className="App-input" placeholder="Enter a message" value={input} onChange={e => setInput(e.target.value)} />
        <IconButton className="App-iconButton" variant="contained" color="primary" disabled={!input} type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>
      {
        messages.map((msg) => (
          <Message key={msg.id} msg={msg.data} username={username} />
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
