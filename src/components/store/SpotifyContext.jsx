import React from "react";

export const SpotifyContext = React.createContext({
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : null
});