const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    peoples: [
        {id: 1, name: "Сэр Акотан", url: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"},
        {id: 2, name: "Иоганн", url: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id: 3, name: "Сервелат", url: "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"},
        {id: 4, name: "Мурзик", url: "https://a.d-cd.net/9db1a94s-960.jpg"},
        {id: 5, name: "Василий", url: "https://apikabu.ru/img_n/2011-11_1/o5t.jpg"},
        {id: 6, name: "Феофан", url: "https://sun9-19.userapi.com/c9482/u2497700/145084936/x_7c099f79.jpg"},
        {id: 7, name: "Сэр Акотан", url: "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"},
        {id: 8, name: "Иоганн", url: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
        {id: 9, name: "Сервелат", url: "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"},
        {id: 10, name: "Мурзик", url: "https://a.d-cd.net/9db1a94s-960.jpg"},
        {id: 11, name: "Василий", url: "https://apikabu.ru/img_n/2011-11_1/o5t.jpg"},
        {id: 12, name: "Феофан", url: "https://sun9-19.userapi.com/c9482/u2497700/145084936/x_7c099f79.jpg"},
    ]
}

export const peoplesReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case FOLLOW: {
            stateCopy = {
                ...state,
                peoples: state.peoples.map(
                    (e) => {
                        if (e.id === action.id) {
                            return {...e, followed: true}
                        }
                        return e;
                    }
                )
            }
            return stateCopy
        }
        case UNFOLLOW: {
            stateCopy = {
                ...state,
                peoples: [...state.peoples.map(
                    (e) => {
                        if (e.id === action.id) {
                            return {...e, followed: false}
                        }
                        return e;
                    }
                )]
            }
            return stateCopy;
        }
        case SETUSERS: {
            stateCopy = {
                ...state,
                friends: [...state.friends, ...action.friends]
            }
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}


export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({type: UNFOLLOW, id })
export const setusers = (peoples) => ({type: SETUSERS, peoples })

export default peoplesReducer;
