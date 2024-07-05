import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from './Components/config';
import MessageParser from './Components/MessageParser';
import ActionProvider from './Components/ActionProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Chatbot</h1>
      </header>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
