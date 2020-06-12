const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
            newMessageText: ''
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText= '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(store._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default store;
window.store = store;
