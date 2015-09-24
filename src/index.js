import React from 'react';
import Player from './components/player';

const player = React.createFactory(Player);

React.render(player(), document.body);
