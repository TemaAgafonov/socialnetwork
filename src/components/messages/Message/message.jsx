import {ListItem} from "@material-ui/core";

const Message = (props) => {
    return (
        <ListItem className={props.who}>
            {props.text}
        </ListItem>
    )
}

export default Message
