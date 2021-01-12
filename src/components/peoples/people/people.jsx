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

const People = (props) => {
    const classes = useStyles();
    return (
        <ListItem button>
            <Avatar alt={props.name} src={props.url} style={{ height: '70px', width: '70px' }}/>
            <Typography className={classes.itemname}> {props.name}</Typography>
        </ListItem>

    )
}

export default People