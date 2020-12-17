const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
    newTextMessage: '',
    messages: [
        {id: 1, message: 'Hi?', itsme: false},
        {id: 2, message: 'Hi', itsme: true},
        {id: 3, message: 'Ok?', itsme: true},
        {id: 4, message: 'Ok', itsme: false},
    ],
}

export const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case SEND_MESSAGE: {
            stateCopy = {
                ...state,
                newTextMessage: '',
                messages: [...state.messages, {id:2, message:state.newTextMessage, itsme:true}]
            }
            return stateCopy
        }
        case UPDATE_NEW_TEXT_MESSAGE: {
            stateCopy = {
                ...state,
                newTextMessage: action.text
            }
            return stateCopy
        }
        default:
            return state;
    }
}

export const sendMessageAction = () => ({ type: SEND_MESSAGE })
export const updateNewTextMessageAction = (text) =>
    ({ type: UPDATE_NEW_TEXT_MESSAGE, text: text })

export default profileReducer;
