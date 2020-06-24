import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = state.messagesData.map( message => <Message message={message.message} key={message.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    if(!props.isAuth) return <Redirect to={"/login"}/>

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
