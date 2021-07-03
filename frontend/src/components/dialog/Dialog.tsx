import React, {FC, ReactElement, ReactNode, useState} from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    IconButton,
    TextField
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface Props {
    title: string;
    children: ReactNode;
}

const DialogComponent: FC<Props> = ({title, children}: Props): ReactElement => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(!open)
    }

    return (
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

                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;
