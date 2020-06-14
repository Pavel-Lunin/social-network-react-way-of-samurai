import React from "react";
import {
  updateNewMessageBodyActionCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

/*let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
  };
};*/

export default compose(
  connect(mapStateToProps, {
    sendMessageCreator,
    updateNewMessageBodyActionCreator,
  }),
  withAuthRedirect
)(Dialogs);
