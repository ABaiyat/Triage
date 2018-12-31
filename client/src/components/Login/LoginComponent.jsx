import React from "react";
import { Button, Input, Form, Card } from "semantic-ui-react";

const LoginComponent = ({ simpleAction, simpleReducer }) => {
  return (
    <div>
      <Card centered>
        <Card.Content>
          <h1>Login</h1>
          <Form>
            <Form.Field>
              <Input icon="users" iconPosition="left" placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <Input icon="key" iconPosition="left" placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <Button fluid color="blue">
                Login
              </Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <p className="registerText">
            Need an Account? <a href="/register">Register</a>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default LoginComponent;
