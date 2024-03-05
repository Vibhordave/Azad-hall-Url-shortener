import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API calls, validation, etc.)
    console.log("Login clicked with email:", email, "and password:", password);
  };
  const responseGoogle = (response) => {
    console.log(response);
    // Here you can handle the response from Google login
  };

  return (
    <Container className="login-box">
      <h1>Sign in</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="submit" type="submit" variant="primary">
          Login
        </Button>
      </Form>
      <p className="or"> OR</p>
      <GoogleLogin
        className="google-login"
        clientId="YOUR_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </Container>
  );
};

export default LoginPage;
