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
    },
    form: {
        margin: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function SignIn() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardHeader title="Sign In" />
                    <Divider className={classes.divider} />
                    <CardContent>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="../signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
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
export default SignIn