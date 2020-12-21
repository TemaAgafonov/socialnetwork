import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Music from "./components/music/music";
import Videos from "./components/videos/videos";
import Settings from "./components/settings/settings";
import Cloud from "./components/cloud/cloud";
import {Grid} from "@material-ui/core";
import PeoplesContainer from "./components/peoples/PeoplesContainer";
import MessagesContainer from "./components/messages/MessagesContainer";
import Profile from "./components/profile/profile";

function App() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Header/>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
            <Router>
                <Route exact path="/">
                    <Redirect to="/profile" />
                </Route>
                <Route path='/profile'><Profile/></Route>
                <Route path='/peoples'><PeoplesContainer/></Route>
                <Route path='/messages'><MessagesContainer/></Route>
                <Route path='/music'><Music/></Route>
                <Route path='/videos'><Videos/></Route>
                <Route path='/settings'><Settings/></Route>
                <Route path='/cloud'><Cloud/></Route>
            </Router>
        </Grid>
        <Grid item xs={2}></Grid>

    </Grid>
  );
}

export default App;
