import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../data/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = props.dialogsPage.messagesData.map( message => <Message message={message.message} /> );

    let newSendElement = React.createRef();

    let sendNewMessages = () => {
        let action = addMessageActionCreator();

        props.dispatch(action);
    };

    let onMessageChange = () => {
        let text = newSendElement.current.value;
        let action = updateNewMessageTextActionCreator(text);

        props.dispatch(action);
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
                        onChange={onMessageChange}
                        ref={newSendElement}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={sendNewMessages}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs
