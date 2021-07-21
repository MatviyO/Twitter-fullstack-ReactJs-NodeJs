import React from 'react';
import {Grid, IconButton, makeStyles, Paper, List, ListItem, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListIcon: {
        fontSize: 25,
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <ul className={classes.sideMenuList}>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" color="primary" className={classes.margin}>
                                <TwitterIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" color="default" className={classes.margin}>
                                <SearchIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                            <Typography className={classes.sideMenuListLabel} variant="h6">Search</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete" color="default" className={classes.margin}>
                                <NotificationsIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                           <Typography className={classes.sideMenuListLabel} variant="h6">Notifications</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete"  color="default" className={classes.margin}>
                                <EmailIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                           <Typography className={classes.sideMenuListLabel} variant="h6">Messages</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete"  color="default" className={classes.margin}>
                                <BookmarkIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                           <Typography className={classes.sideMenuListLabel} variant="h6">Bookmarks</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete"  color="default" className={classes.margin}>
                                <ListAltIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                           <Typography className={classes.sideMenuListLabel} variant="h6">List</Typography>
                        </li>
                        <li className={classes.sideMenuListItem}>
                            <IconButton aria-label="delete"  color="default" className={classes.margin}>
                                <PersonIcon className={classes.sideMenuListIcon} />
                            </IconButton>
                           <Typography className={classes.sideMenuListLabel} variant="h6">Profile</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={7}>
                    <Paper >xs</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper >xs</Paper>
                </Grid>
            </Grid>
        </section>
    );
};

export default Home;
