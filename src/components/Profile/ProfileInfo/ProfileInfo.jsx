import React from 'react';
import styles from './ProfileInfo.module.css';
import thumb from '../../../assets/images/thumb.png';
import facebook from '../../../assets/images/facebook.png';
import vkontakte from '../../../assets/images/vkontakte.png';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    let lookingForAJob = props.profile.lookingForAJob;

    return (
        <div>
            {/*<div>
                <img
                    src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""/>
            </div>*/}
            <div className={styles.descriptionBlock}>
                <div className={styles.userPhoto}>
                    <img src={props.profile.photos.large} alt=""/>
                    <ProfileStatus status={'Hi my friends'}/>
                </div>
                <div className="userInfo">
                    <div className="aboutme">
                        <div className={styles.status}>
                            <span>About Me: </span>{props.profile.aboutMe}
                        </div>
                        <div className={styles.myName}>
                            <span>Name: </span>{props.profile.fullName}
                        </div>
                        <div className={styles.job}>
                            <div>Looking for a job:</div><img className={lookingForAJob ? styles.active : styles.disabled} src={thumb} alt="thumb"/>
                        </div><div className={styles.jobDescription}>
                            <span>Description your favorite job: </span>{props.profile.lookingForAJobDescription}
                        </div>
                    </div>

                    <div className="contacts">
                        <div className={styles.network}>
                            <div>
                                <img className={styles.fb} src={facebook} alt=""/>
                            </div>
                            <div >
                                <img className={styles.vk} src={vkontakte} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo
