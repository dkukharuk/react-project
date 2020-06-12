import React from "react";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo
