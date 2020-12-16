import {List, makeStyles} from "@material-ui/core";
import Friend from "./friend/friend";

const useStyles = makeStyles((theme) => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
}))

const Friends = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <Friend name ="Сэр Акотан" url = "https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"/>
            <Friend name ="Иоганн" url = "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
            <Friend name ="Сервелат" url = "https://crosti.ru/patterns/00/0b/46/1b4f718617/preview.jpg"/>
        </List>
    )
}

export default Friends