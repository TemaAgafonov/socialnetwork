import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";

const Header = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Button color="inherit" href='/profile'>Профиль</Button>
                        <Button color="inherit" href='/peoples'>Люди</Button>
                        <Button color="inherit" href='/messages'>Сообщения</Button>
                        <Button color="inherit" href='/music'>Музыка</Button>
                        <Button color="inherit" href='/videos'>Видео</Button>
                        <Button color="inherit" href='/cloud'>Облако</Button>
                        <Button color="inherit" href='/settings'>Настройки</Button>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Header
