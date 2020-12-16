import {connect} from "react-redux";
import Messages from "./messages";
import {sendMessageAction, updateNewTextMessageAction} from "../../redux/messages-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        friends: state.messagesPage.friends,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewTextMessageAction(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAction())
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
