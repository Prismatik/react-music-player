import React from 'react';
import Player from './components/player';
import track from './assets/sounds/trap_queen.mp3';

React.render(
  <Player tracks={[track]} />,
  document.body
);
