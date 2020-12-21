import {Grid, makeStyles} from "@material-ui/core";
import Usermodule from "./usermodule/usermodule";
import WallContainer from "./wall/WallContainer";

const useStyles = makeStyles((theme) => ({
    media: {
        height: '200px',
        margin: '2px',
    },
    container: {
        margin: '10px',
    },
}))

const Profile = (props) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            <Grid item xs={12}></Grid>
            <Grid item xs={6}>
                <Usermodule/>
            </Grid>
            <Grid item xs={6}>
                <WallContainer/>
            </Grid>
        </Grid>
    )
}

export default Profile
