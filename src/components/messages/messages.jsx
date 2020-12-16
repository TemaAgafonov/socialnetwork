import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Grid, List, ListItem,
    makeStyles, TextField,
    Typography
} from "@material-ui/core";
import Friends from "./friends/friends";

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
    wall: {
        alignItems: 'flex-end'
    }
}))

const Messages = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Card>
                    {/*<CardActionArea >*/}
                    {/*    <Typography variant="h5" className={classes.blockname}>Друзья</Typography>*/}
                    {/*</CardActionArea>*/}
                    <CardContent>
                        <Friends/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.container}>
                    <List className={classes.list}>
                        <ListItem>
                            Hello
                        </ListItem>
                        <ListItem className={classes.right}>
                            Hello
                        </ListItem>
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
