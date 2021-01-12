import React from 'react';
import {connect} from "react-redux";
import {follow, setusers, unfollow} from "../../redux/peoples-reducer";
import {List, withStyles} from "@material-ui/core";
import * as axios from "axios";
import People from "./people/people";

const styles = theme => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
});

class Peoples extends React.Component {
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/users/")
            .then(response => {
                this.props.setusers(response.data.results)
            })
    }

    getUsers(){
        if (this.props.peoples.length === 0) {
            axios.get("http://127.0.0.1:8000/api/users/")
                .then(response => {
                    this.props.setusers(response.data.results)
                })
        }
    }

    render(){
        const { classes } = this.props;
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                <List className={classes.list}>
                    {this.props.peoples.map(p => (
                        <People name={p.name} url={p.photos.small}/>
                    ))}
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        peoples: state.peoplesPage.peoples
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(follow(id))
        },
        unfollow: (id) => {
            dispatch(unfollow(id))
        },
        setusers: (friends) => {
            dispatch(setusers(friends))
        }
    }
}

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(Peoples);

export default withStyles(styles)(PeoplesContainer);
