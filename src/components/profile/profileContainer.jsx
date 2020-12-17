import {connect} from "react-redux";
import Profile from "./profile";
import {sendMessageAction, updateNewTextMessageAction} from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.profilePage.messages,
        newTextMessage: state.profilePage.newTextMessage,
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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default MessagesContainer;
