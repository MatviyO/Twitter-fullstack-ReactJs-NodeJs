import React, {useState} from 'react';
import {makeStyles,} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SectionTitle from "../components/title/SectionTitle";

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 700,
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    },
    loginSideField: {
        marginButtom: 18
    }
}))

const SignIn = () => {

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
                            <SectionTitle  title="Here and now"/>
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


        </div>
    );
};

export default SignIn;
