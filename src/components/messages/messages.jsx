import {
    Button,
    Card,
    CardContent,
    Grid, List, ListItem,
    makeStyles, TextField,
} from "@material-ui/core";
import Friends from "./friends/friends";
import Message from "./Message/message";

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '10px',
        marginLeft: '10px'
    },
    itemname: {
        marginLeft: '15px'
    },
    blockname: {
        textAlign: 'center',
    },
    list: {
        maxHeight: 460,
    },
    text: {
        width: '100%',
    },
    right: {
        justifyContent: 'flex-end'
    },
    left: {
        justifyContent: 'flex-start'
    },
    wall: {
        alignItems: 'flex-end'
    }
}))

const Messages = (props) => {
    const classes = useStyles();
    console.log(props)
    let messagesElements = props.messages.map(p => (
        <Message
            text={p.message}
            who={p.itsme ? classes.left : classes.right}
        />
    ))
    return (
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Card>
                    <CardContent>
                        <Friends friends={props.friends}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.container}>
                    <List className={classes.list}>
                        {messagesElements}
                        <ListItem className={classes.wall}>
                            <TextField
                                multiline
                                id="standard-required"
                                rowsMax={4}
                                className={classes.text}
                                label="Новое сообщение"
                            />
                            <Button>Send</Button>
                        </ListItem>
                    </List>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Messages
