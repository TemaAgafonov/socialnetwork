import React from 'react';
import {connect} from "react-redux";
import {follow, setusers, unfollow, setcurrentpage, settotaluserscount} from "../../redux/peoples-reducer";
import {List, withStyles} from "@material-ui/core";
import * as axios from "axios";
import People from "./people/people";
import {Pagination} from "@material-ui/lab";

const styles = theme => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
});

class Peoples extends React.Component {
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/users/?page=${this.props.currentPage}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.results)
                this.props.settotaluserscount(response.data.count)
                console.log(this.props.totalUsersCount)
            })
    }


    onPageChanged = (event = true, pageNumber) => {
        this.props.setcurrentpage(pageNumber)
        axios.get(`http://127.0.0.1:8000/api/users/?page=${pageNumber}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.results)
            })
    }

    render() {
        const {classes} = this.props;
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <Pagination
                count={pagesCount}
                shape="rounded"
                onChange={this.onPageChanged}
                defaultPage={this.props.currentPage}
            />
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            <List className={classes.list}>
                {this.props.peoples.map(p => (
                    <People name={p.name} url={p.photos.small}/>
                ))}
            </List>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        peoples: state.peoplesPage.peoples,
        pageSize: state.peoplesPage.pageSize,
        totalUsersCount: state.peoplesPage.totalUsersCount,
        currentPage: state.peoplesPage.currentPage
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
        },
        setcurrentpage: (currentPage) => {
            dispatch(setcurrentpage(currentPage))
        },
        settotaluserscount: (totalPage) => {
            dispatch(settotaluserscount(totalPage))
        },
    }
}

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(Peoples);

export default withStyles(styles)(PeoplesContainer);
