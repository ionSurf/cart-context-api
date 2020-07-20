import React, {Component} from 'react';
import {AuthContext} from '../../contexts/AuthContext';

import {
    Button,
    Checkbox,
    Container,
    Form,
    Grid,
    Header
} from "semantic-ui-react";

class LoginPage extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);

        this.state= {
            username: '',
            password: '',
            submitted: false
        }
    }

    handleOnChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit= e => { console.log(this.context);
        e.preventDefault();
        this.setState({
            submitted: true
        });
        const {username, password} = this.state;
        if ( username && password ) {
            console.log('calling on context')
            this.context.signIn( username, password );
        }
    }

    render = () => (
        <Grid textAlign="center">
            <Container>
                <Header size="huge">Please sign in</Header>
                <Form size="large" onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Input
                        name="username"
                        placeholder="Username"
                        type="text"
                        onChange={ e => this.handleOnChange(e)}
                    />
                    <Form.Input
                        name="password"
                        placeholder="Password"
                        type="password"
                        onChange={ e => this.handleOnChange(e)}
                    />
                    <Form.Field>
                        <Checkbox label="Remember me" />
                    </Form.Field>
                    <Button primary fluid size="large" type="submit">
                        Sign in
            </Button>
                </Form>
            </Container>
        </Grid>
    );
}

export default LoginPage;