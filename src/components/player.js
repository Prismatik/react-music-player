import { Howl } from 'howler/howler.min';
import React, { Component, PropTypes } from 'react';

export default class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {isPlaying: false};
    this.player = new Howl({src: this.props.tracks});
  }

  render() {
    return (
      <div>
        <a href='#' onClick={this._onPlay.bind(this, this.player)}>
          {this.state.isPlaying ? 'Stop' : 'Play'}
        </a>
      </div>
    );
  }

  _onPlay(player, e) {
    let { isPlaying } = this.state;

    e.preventDefault();

    if (!isPlaying) player.play();
    else player.stop();

    this.setState({isPlaying: !isPlaying});
  }
};
