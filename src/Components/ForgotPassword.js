import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Divider
} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        marginTop: theme.spacing(2),
        maxWidth: 400,
        fontSize: '1.2rem' // add a new style for the font size
    },
    form: {
        margin: theme.spacing(2),
        fontSize: '1.2rem' // add a new style for the font size
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    icon: {
        marginRight: theme.spacing(1),
    }
}));

function ForgotPassword() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader title="Forgot Password" />
                    <Divider className={classes.divider} />
                    <CardContent>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        className='change'
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                                Send Reset Email
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="../signin" variant="body2">
                                        Remember your password? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
}

export default ForgotPassword;
