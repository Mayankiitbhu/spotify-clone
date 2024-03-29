import React from 'react'
import classes from './Sidebar.module.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useContext } from 'react';
import { SpotifyContext } from '../store/SpotifyContext';

const Sidebar = () => {

    const { playlists } = useContext(SpotifyContext);

  return (
    <div className={classes.sidebar}>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify-logo'/>
        <SidebarOption title="Home" Icon={HomeIcon}/>
        <SidebarOption title="Search" Icon={SearchIcon}/>
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon}/>
        <br />

        <strong className={classes['sidebar__title']}>PLAYLISTS</strong>
        <hr />

        {playlists?.items?.map(p => <SidebarOption key={p.name} title={p.name} />)}

    </div>
  )
}

export default Sidebar;