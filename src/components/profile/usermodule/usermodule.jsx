import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import "react-awesome-lightbox/build/style.css";

const useStyles = makeStyles((theme) => ({
    media: {
        height: '200px',
        margin: '2px',
    },
}))

const Usermodule = (props) => {
    const classes = useStyles();
    let Module = (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://archilab.online/images/1/123.jpg"
                />
            </CardActionArea>
            <CardContent>
                <Typography >
                    Сергей Чифиринов
                </Typography>
            </CardContent>
        </Card>
    )
    return (Module)
}

export default Usermodule
