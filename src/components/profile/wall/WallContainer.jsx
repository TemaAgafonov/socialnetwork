import {connect} from "react-redux";
import Wall from "./wall";
import {sendMessageAction, updateNewTextMessageAction} from "../../../redux/profile-reducer";

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

const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);

export default WallContainer;
