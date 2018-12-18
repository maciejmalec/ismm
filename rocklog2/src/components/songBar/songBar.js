import React from 'react';
import { CollapsibleItem } from 'react-materialize';

class SongBar extends React.Component {
  onSelect() {
    console.log("select");
  }

  render() {
    return (
      <CollapsibleItem header="aye" onSelect={this.onSelect}>
        <div className="song collapsible-header red darken-4 white-text">
          <b className="artist">{this.props.artist}</b> - <span className="song">{this.props.songName}</span>
          <a href="#!" className="secondary-content" id="SONG_ID">
            {/* <i className="material-icons star-icon stared_if_song_saved">grade</i> */}
          </a>
        </div>
        <div className="collapsible-body grey darken-4">
          <div className="video-container" id="video-container"></div>
        </div>
      </CollapsibleItem>
    )
  }
}

export default SongBar;