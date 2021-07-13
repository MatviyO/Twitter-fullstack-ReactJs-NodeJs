import React, {useState} from 'react';
import {Button, FormControl, FormGroup, makeStyles, TextField,} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SectionTitle from "../components/title/SectionTitle";
import DialogComponent from "../components/dialog/Dialog";


const useStyles = makeStyles((theme) => ({
    loginSideField: {
        marginButtom: 18
    }
}))

const SignIn = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(!open)
    }
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
                            <SectionTitle title="Here and now"/>
                        </div>
                        <div className="main__description">
                            Come to Twitter already this day.
                        </div>
                        <div className="main__form">
                            <button className="link__fill">Registration</button>
                            <button onClick={handleClickOpen} className="link__outline">Login</button>
                        </div>
                    </div>
                    
                    <DialogComponent title="Login to Twitter" open={open} onClose={() => handleClickOpen()}>
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
                                    className={classes.loginSideField}
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    margin="dense"
                                    id="password"
                                    label="Enter your Password"
                                    type="password"
                                    InputLabelProps={{shrink: true}}
                                    variant="filled"
                                    fullWidth
                                />
                                <Button onClick={handleClickOpen} variant="contained" color="primary" fullWidth>
                                    Login
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </DialogComponent>
                </div>
            </section>


        </div>
    );
};

export default SignIn;
