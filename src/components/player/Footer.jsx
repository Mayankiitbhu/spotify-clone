import React from 'react';
import classes from './Footer.module.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const Footer = () => {
  return (
    <div className={classes.footer}>
        <div className={classes["footer__left"]}>
            <p>Album and song details</p>
        </div>
        <div className={classes["footer__center"]}>
            <ShuffleIcon className={classes['footer__green']} />
            <SkipPreviousIcon className={classes['footer__icon']} />
            <PlayCircleOutlineIcon className={classes['footer__icon']} fontSize="large"/>
            <SkipNextIcon className={classes['footer__icon']} />
            <RepeatIcon className={classes['footer__green']} />
        </div>
        <div className={classes["footer__right"]}>
            <p>volume controls</p>
        </div>
    </div>
  )
}

export default Footer;