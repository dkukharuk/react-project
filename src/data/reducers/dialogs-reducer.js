const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {

            let body = state.newMessageBody;
            let text = {
                id: 6,
                message: body
            };

            return {
                ...state,
                newMessageBody:  '',
                messagesData: [...state.messagesData, text]
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {

            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;
