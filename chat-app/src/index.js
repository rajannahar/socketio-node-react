// import socketIOClient from "socket.io-client";

// const socket = socketIOClient('http://localhost:5000/');

// socket.on('connect', function () {
//   socket.send('hey');

//   socket.on('message', function (msg) {
//     // my msg
//   });
// });


import Button from '@material-ui/core/Button';
import React from 'react';
import { render } from 'react-dom';

import Chat from "./components/Chat"

render(<Chat />, document.getElementById("app"))