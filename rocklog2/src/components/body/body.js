import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';

import SongBar from '../songBar/songBar';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [{
        "artist": "Boris",
        "name": "Hardbass"
      },{
        "artist": "Artiom",
        "name": "Slav King"
      },{
        "artist": "Darude",
        "name": "Sandstorm"
      }]
    };
  }

  render() {
    var bars = this.state.songs.map((song, i) => {
      return <SongBar key={song.artist+song.name+i} artist={song.artist} songName={song.name}/>
    });

    return (
      <div className="row grey darken-4" style={{"minHeight": "500px"}}>
        <div className="col s12 m10 l5 offset-m1 offset-l1">
        <br/>
        <ul className="collapsible grey darken-4" data-collapsible="accordion">
          <ul className="collection">
            <li className="collection-item grey darken-3 grey-text">
              {/* @if(is_null($fb_user)) */}
                <p className="grey-text">Prisijunk su <a href="redirect">Facebook</a> ir išsaugok dainas!</p>
              {/* @else */}
                <div className="fb-avatar" style={{"backgroundImage": "url(USER_IMAGE_LINK)"}}></div>
                <p className="center-align">
                  {/* <a href="{{ $link }}">LINK_TEXT</a> */}
                  <a href="logout" className="secondary-content">
                    {/* <i className="material-icons grey-text logout-icon">input</i> */}
                  </a>
                </p>
              {/* @endif */}
            </li>
          </ul>
          <Collapsible accordion={false}>
          {bars}
          </Collapsible>
          {/* @if (empty($songs))
            <ul className="collection">
              <li className="collection-item grey darken-3 grey-text">
                <p className="grey-text">Nėra išsaugotų dainų</p>
              </li>
            </ul>
          @endif */}
          
          </ul>
      </div>
    </div>
    );
  }
}

export default Body;