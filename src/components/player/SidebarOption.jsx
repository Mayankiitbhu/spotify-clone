import React from 'react';
import classes from './SidebarOption.module.css';

function SidebarOption({title, Icon}) {
  return (
    <div className={classes.sidebarOption}>
        {Icon && <Icon className={classes['sidebarOption__icons']} />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SidebarOption;