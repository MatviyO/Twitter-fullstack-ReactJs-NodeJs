import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl, FormGroup, IconButton,
    InputLabel,
    makeStyles, Select, TextField
} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 700,
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    },
}))

const SignIn = () => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(!open)
    }
    const classes = useStyles()

    return (
        <div className="container_auth">
            <section className="wrapper__left">
            </section>
            <section className="wrapper__right">
                <div className="main">
                    <div className="main__wrapper">
                        <div className="main__icon">
                            <TwitterIcon fontSize="large" className="main__icon_twitt"/>
                        </div>
                        <div className="main__title">
                            Here and now
                        </div>
                        <div className="main__description">
                            Come to Twitter already this day.
                        </div>
                        <div className="main__form">
                            <button className="link__fill">Registration</button>
                            <button onClick={handleClickOpen} className="link__outline">Login</button>
                        </div>
                    </div>
                </div>
            </section>

            <Dialog
                open={open}
                onClose={handleClickOpen}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">
                    <IconButton onClick={handleClickOpen}
                                color="secondary"
                                aria-label="clsoe">
                        <CloseIcon style={{fontSize: 26}}/>
                    </IconButton>
                    Login to Twitter
                </DialogTitle>
                <DialogContent>
                    <form noValidate>
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Enter your Email"
                                    type="email"
                                    InputLabelProps={{shrink: true}}
                                    variant="filled"
                                    fullWidth
                                />
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Enter your Password"
                                    type="password"
                                    fullWidth
                                />
                            </FormGroup>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickOpen} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SignIn;
