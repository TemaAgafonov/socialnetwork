import {Button, Card, CardActionArea, CardContent, Divider, makeStyles, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: '200px',
        margin: '2px',
    },
    text: {
        width: '80%',
    },
    wall: {
        display: 'flex',
        alignItems: "flex-end"
    },
    wall_container: {
        margin: '10px'
    }
}))

const Wall = (props) => {
    const classes = useStyles();
    let Posts = props.messages.map(e => (
            <div>
                <Typography>{e.message}</Typography>
                <Divider/>
            </div>
        )
    )
    let addPost = () => {
        props.sendMessage()
    }

    let onPostUpdate = (e) => {
        let text = e.target.value
        props.updateNewMessageBody(text)
    }
    let Module = (
        <Card className={classes.wall_container}>
            <CardActionArea className={classes.wall} >
                <TextField
                    multiline
                    id="standard-required"
                    rowsMax={4}
                    className={classes.text}
                    label="Новая запись"
                    onChange={onPostUpdate}
                    value={props.newTextMessage}
                />
                <Button
                    onClick={addPost}
                >Send</Button>
            </CardActionArea>
            <CardContent>
                {Posts}
            </CardContent>
        </Card>
    )
    return (Module)
}

export default Wall;
