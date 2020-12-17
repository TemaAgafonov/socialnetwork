import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia, Divider,
    Grid,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: '200px',
        margin: '2px',
    },
    container: {
        margin: '10px',
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

const Profile = (props) => {
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
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://archilab.online/images/1/123.jpg"
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography >
                            Сергей Чифиринов
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
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
            </Grid>

        </Grid>
    )
}

export default Profile
