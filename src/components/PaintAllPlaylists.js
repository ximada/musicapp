import React, { Component } from "react";
import Playlist from "./Playlists";
import { connect } from "react-redux";

class PaintAllPlayLists extends Component {
  constructor() {
    super();
    this.paintPlaylist = this.paintPlaylist.bind(this);
  }
  paintPlaylist(playlistkey, index) {
    //Guardamos el objeto completo
    const fullObject = this.props.playlistsFromReducer;
    //Usamos la key para acceder a la playlist desde props
      const playlist = fullObject[playlistkey];
      const playlistimg = playlist.urlimg
      console.log(playlistimg)
      return <Playlist key={index} index={index} name={playlistkey} img={playlistimg} />
  }

  render() {
    return (
      <div className="song">
        {Object.keys(this.props.playlistsFromReducer).map(this.paintPlaylist)}
      </div>
    );
  }
}

//Función para recibir propiedades del estado de la tienda
//coursesReducer viene del nombre que se le dio en el rootreductor
function mapStateToProps(state, ownProps) {
  return {
    playlistsFromReducer: state.mainReducer.playlists
  };
}

//Se hace la conección entre el componente y redux
//Si se le psa mapDispatchToProps ya no existe la función dispatch en el componente
export default connect(mapStateToProps)(PaintAllPlayLists);
