import React, {FC, ReactElement, ReactNode, useState} from 'react';
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl,
    FormGroup,
    IconButton, makeStyles,
    TextField
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    button: {
        fontWeight: 700,
    },
    lightBulb: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1)
    },
}))

interface Props {
    title: string;
    children: ReactNode;
    open: boolean;
    onClose: () => void
}



const DialogComponent: FC<Props> = ({title, children, open = false, onClose}: Props): ReactElement | null => {
    const classes = useStyles()

    if (!open) {
        return null;
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="max-width-dialog-title"
        >
            <DialogTitle id="max-width-dialog-title">
                <IconButton onClick={onClose}
                            color="secondary"
                            aria-label="clsoe">
                    <CloseIcon style={{fontSize: 26}}/>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                <form noValidate>
                    {children}
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogComponent;
