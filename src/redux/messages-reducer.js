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
    friends: [
        {id: 1, name: "Сэр Акотан", url: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"},
        {id: 2, name: "Иоганн", url: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id: 3, name: "Сервелат", url: "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"},
    ],
}

export const messagesReducer = (state = initialState, action) => {
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

export default messagesReducer;
