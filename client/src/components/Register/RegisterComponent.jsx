import React from "react";
import { Button, Input, Form, Card, Grid } from "semantic-ui-react";

const RegisterComponent = () => {
  return (
    <div>
      <Card centered>
        <Card.Content>
          <h1>Register</h1>
          <Form>
            <Form.Field>
              <Input
                name="name"
                icon="user outline"
                iconPosition="left"
                placeholder="Name"
              />
            </Form.Field>
            <Form.Field>
              <Input
                name="email"
                icon="at"
                iconPosition="left"
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field>
              <Input
                name="username"
                icon="users"
                iconPosition="left"
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <Input
                name="password"
                type="password"
                icon="key"
                iconPosition="left"
                placeholder="Password"
              />
            </Form.Field>
            <Form.Field>
              <Button fluid color="blue">
                Register
              </Button>
            </Form.Field>
          </Form>
        </Card.Content>
      </Card>
      <Card centered>
        <Card.Content>
          <p className="registerText">
            Already Registered? <a href="/login">Login</a>
          </p>
        </Card.Content>
      </Card>
    </div>
  );
};

export default RegisterComponent;
