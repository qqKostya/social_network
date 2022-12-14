import state from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
  subscribe,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderEntireTree = () => {
  root.render(
    <Router>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </Router>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
