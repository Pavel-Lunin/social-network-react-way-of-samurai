import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message.jsx/Message";
import DialogItem from "./DialogItem.jsx/DialogItem";
import AddMessageForm from "./AddMessageForm/addMessageForm.jsx";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  let newMessageBody = state.newMessageBody;

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogItems}>{dialogElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <AddMessageForm onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
