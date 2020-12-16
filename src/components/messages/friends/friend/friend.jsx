import {Avatar, ListItem, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    itemname: {
        marginLeft: '15px'
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}))

const Friend = (props) => {
    const classes = useStyles();
    return (
            <ListItem button>
                <Avatar alt={props.name} src={props.url} className={classes.large}/>
                <Typography className={classes.itemname}> {props.name}</Typography>
            </ListItem>

    )
}

export default Friend