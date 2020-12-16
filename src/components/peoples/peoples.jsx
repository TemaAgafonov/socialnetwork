import {List, makeStyles} from "@material-ui/core";
import People from "./people/people";

const useStyles = makeStyles((theme) => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
}))

const Peoples = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <People name ="Сэр Акотан" url = "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"/>
            <People name ="Иоганн" url = "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
            <People name ="Сервелат" url = "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"/>
            <People name ="Мурзик" url = "https://a.d-cd.net/9db1a94s-960.jpg"/>
            <People name ="Василий" url = "https://apikabu.ru/img_n/2011-11_1/o5t.jpg"/>
            <People name ="Феофан" url = "https://sun9-19.userapi.com/c9482/u2497700/145084936/x_7c099f79.jpg"/>
            <People name ="Сэр Акотан" url = "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"/>
            <People name ="Иоганн" url = "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
            <People name ="Сервелат" url = "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"/>
            <People name ="Мурзик" url = "https://a.d-cd.net/9db1a94s-960.jpg"/>
            <People name ="Василий" url = "https://apikabu.ru/img_n/2011-11_1/o5t.jpg"/>
            <People name ="Феофан" url = "https://sun9-19.userapi.com/c9482/u2497700/145084936/x_7c099f79.jpg"/>
        </List>
    )
}

export default Peoples