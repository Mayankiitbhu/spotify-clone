import { SpotifyContext } from "./SpotifyContext";
import { useReducer } from "react";

const defaultContext = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : 'BQDTbntN0V-Ztm-Ej5M1hyPN-frk8GLoh_rgx1kA8umiKLMP12WiIl9QnNzesI2P3cuWN7a1Vt8WKoaSK85PQqE26UEPVnUcpaEYl2gTr9_PfULztlob5w14r5B7PwdsUl8vXwBfjzfWbpmhWVembLhrcn-zJhSSZShTlnh_VrOmxYWfHsqKPBge2ourgZwhTOM12iX7hERPpKNXfO9O'
};


const spotifyReducer = (state, action) => {
    if (action.type === 'SET_USER') {
        return {
            ...state,
            user : action.user
        }
    } else if (action.type === 'SET_TOKEN') {
        return {
            ...state,
            token : action.token
        }
    } else if (action.type === 'SET_PLAYLISTS') {
        return {
            ...state,
            playlists : action.playlists
        }
    }
    return state;
};

const SpotifyContextProvider = (props) => {

    const [spotifyContext, dispatchSpotifyContext] = useReducer(spotifyReducer, defaultContext);


    const setUser = (user) => {
        dispatchSpotifyContext({type : 'SET_USER', user : user});
    }

    const setToken = (token) => {
        console.log(token);
        dispatchSpotifyContext({type : 'SET_TOKEN', token : token});
    }

    const setPlaylist = (playlists) => {
        dispatchSpotifyContext({type : 'SET_PLAYLISTS', playlists : playlists});
    }

    const spotifyState = {
        user : spotifyContext.user,
        playlists : spotifyContext.playlists,
        playing : spotifyContext.playing,
        item : spotifyContext.item,
        token : spotifyContext.token,
        setUserHandler : setUser,
        setTokenHandler : setToken,
        setPlaylistHandler : setPlaylist
    };

    return (<SpotifyContext.Provider value={spotifyState}>
        {props.children}
    </SpotifyContext.Provider>);
};

export default SpotifyContextProvider;