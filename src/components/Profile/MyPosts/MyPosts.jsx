import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/reducers/profile-reducer";

const MyPosts = (props) => {
    let postsElement = props.postsData.map( post => <Post id={post.id} message={post.message} likesCount={post.likesCont}/> );

    let newPostElement = React.createRef();

    let AddPost = () => {
        let action = addPostActionCreator();

        props.dispatch(action);
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);

        props.dispatch(action);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ AddPost }>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                { postsElement }
            </div>
        </div>
    );
};

export default MyPosts
