import React from "react";
import "./Music.css";

const musicButton = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    letter: "Q",
    numButton: 81,
    soundsName: "track1"
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    letter: "Q",
    numButton: 81,
    soundsName: "track2"
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    letter: "W",
    numButton: 87,
    soundsName: "track3"
  }];

class Music extends React.Component {
  state = {
    music: musicButton,
  }

  onClick = e => {
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = new Audio(e.target.dataset.url);
    this.audio.play();
  }

  render() {
    return (
      <div>
        {this.state.music.map(n => (
          <button onClick={this.onClick} data-url={n.url} key={n.numButton}>{n.soundsName}</button>
        ))}
      </div>
    );
  }
}

export default Music;
