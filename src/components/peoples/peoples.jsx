import {List, makeStyles} from "@material-ui/core";
import People from "./people/people";
import * as axios from 'axios'

const useStyles = makeStyles((theme) => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
}))

const Peoples = (props) => {

    let getUsers = () =>
    {
        if (props.peoples.length === 0) {
            axios.get("http://127.0.0.1:8000/api/users/")
                .then(response => {
                    props.setusers(response.data.results)
                })
        }
    }

    const classes = useStyles();
    let peoplesElements = props.peoples.map(p => (
        <People name={p.name} url={p.photo}/>
    ))
}

export default Peoples
