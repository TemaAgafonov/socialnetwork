import {List, makeStyles} from "@material-ui/core";
import People from "./people/people";
import {Pagination} from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
    list: {
        overflow: 'auto',
        maxHeight: 460,
    },
}))

const Peoples = (props) => {
    const classes = useStyles();
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <Pagination
            count={pagesCount}
            shape="rounded"
            onChange={props.onPageChanged}
            defaultPage={props.currentPage}
        />
        <List className={classes.list}>
            {props.peoples.map(p => (
                <People name={p.name} url={p.photos.small}/>
            ))}
        </List>
    </div>
}

export default Peoples
