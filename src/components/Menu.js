import React from 'react';

const Menu=()=>{
    return(
        <div>
            <div style={styles.inner}><li className="fas fa-home"></li></div>
            <div style={styles.inner}><li className="fas fa-chart-bar"></li></div>
            <div style={styles.inner}><li className="fas fa-folder"></li></div>
            <div style={styles.inner}><li className="fas fa-list"></li></div>
            <div style={styles.inner}><li className="fas fa-comment-alt"></li></div>
            <div style={styles.inner}><li className="fas fa-users"></li></div>
            <div style={styles.inner}><li className="fas fa-sign-out-alt"></li></div>
        </div>
    )
}

const styles={
    inner:{
        padding:10,
        color:'white',
        fontSize:25
    }
}

export default Menu;