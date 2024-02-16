import Login from "./components/Login";
import { useEffect, useContext } from 'react';
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { SpotifyContext } from "./components/store/SpotifyContext";

const spotify = new SpotifyWebApi();

function App() {
  const { setUserHandler, setTokenHandler, token, setPlaylistHandler } = useContext(SpotifyContext);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {

      setTokenHandler(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        setUserHandler(user)
      });

      spotify.getUserPlaylists().then((playlists) => {
        setPlaylistHandler(playlists);
      })

    }
  }, []);


  return (
    <>
      {token ? <Player /> : <Login />}
    </>
  )
}

export default App;
