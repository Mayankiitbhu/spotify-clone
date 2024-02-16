import classes from './Player.module.css';
import Sidebar from './player/Sidebar';
import Body from './player/Body';
import Footer from './player/Footer';

const Player = () => {
    return (
        <div className={classes.player}>
            <div className={classes['player__body']}>
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    );
};


export default Player;