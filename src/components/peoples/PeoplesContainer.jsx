import {connect} from "react-redux";
import Peoples from "./peoples";
import {follow, setusers, unfollow} from "../../redux/peoples-reducer";

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

export default PeoplesContainer;
