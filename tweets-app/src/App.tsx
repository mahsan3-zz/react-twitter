import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import configureStore from "./store/configureStore";
import TweetsShell from "./Tweets/containers/TweetsShell";

const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <TweetsShell></TweetsShell>
      </Provider>
    </>
  );
}

export default App;
