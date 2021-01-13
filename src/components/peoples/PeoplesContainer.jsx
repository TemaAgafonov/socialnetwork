import React from 'react';
import {connect} from "react-redux";
import {follow, setusers, unfollow, setcurrentpage, settotaluserscount} from "../../redux/peoples-reducer";
import * as axios from "axios";
import Peoples from "./peoples";



class PeoplesUserAPI extends React.Component {
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
        return <Peoples
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged.bind(this)}
            currentPage={this.props.currentPage}
            peoples={this.props.peoples}
        />
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

const PeoplesContainer = connect(mapStateToProps, mapDispatchToProps)(PeoplesUserAPI);

export default PeoplesContainer;
