import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../data/reducers/users-reducer";

let mapStateProps = (state) => {
    console.log('state', state);
    return {
        users: state.usersPage.users
    }
};

let mapDispatchProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
};


export default connect(mapStateProps, mapDispatchProps)(Users) ;
