import {List, makeStyles} from "@material-ui/core";
import People from "./people/people";
import * as axios from 'axios'

const useStyles = makeStyles((theme) => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
}))

const Peoples = (props) => {
    let data = [
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
    if (props.peoples.length === 0){
        axios.get("http://127.0.0.1:8000/api/user/").then(response => {
            console.log(response.data)
            props.setusers(response.data)
        })
    }

    const classes = useStyles();
    let peoplesElements = props.peoples.map(p => (
        <People name={p.name} url={p.photo}/>
    ))
    return (
        <List className={classes.list}>
            {peoplesElements}
        </List>
    )
}

export default Peoples
