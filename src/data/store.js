import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi how are you?', likesCont: 12},
                {id: 2, message: 'It\'s my first post!', likesCont: 10},
                {id: 3, message: 'New message', likesCont: 10},
                {id: 4, message: 'Thank\'s', likesCont: 10}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Den'},
                {id: 3, name: 'Anna'}
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How is your health'},
                {id: 3, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sideBar: {

        }
    },
    _callSubscriber () {},

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
