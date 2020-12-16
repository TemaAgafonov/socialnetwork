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
    let peoplesElements = props.peoples.map(p => (
        <People name={p.name} url={p.url}/>
    ))
    return (
        <List className={classes.list}>
            {peoplesElements}
        </List>
    )
}

export default Peoples
