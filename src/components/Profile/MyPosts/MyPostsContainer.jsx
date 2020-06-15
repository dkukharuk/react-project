import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../data/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let state = store.getState();

                let addPost = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return (
                    <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
