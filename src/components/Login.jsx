import React from 'react';
import classes from './Login.module.css';
import { loginUrl } from './spotify';

const Login = () => {
  return (
    <div className={classes.login}>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify-logo'/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login;