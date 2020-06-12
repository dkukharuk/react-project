import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../data/reducers/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = state.messagesData.map( message => <Message message={message.message} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {

        props.store.dispatch(sendMessageCreator());
        // let action = sendMessageCreator();
        // props.dispatch(action);
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;

        props.store.dispatch(updateNewMessageBodyCreator(body));
        // let action = updateNewMessageBodyCreator(body);
        // props.dispatch(action);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogsElements }
            </div>
            <div>
                <div className={styles.messages}>
                    { messagesElements }
                </div>
                <div>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                    />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs
