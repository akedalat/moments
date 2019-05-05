import React from 'react'
import { Form, Button, Message, Header } from 'semantic-ui-react'
import './auth.css'

class LoginForm extends React.Component {
	state = {
		email: "",
		password: "",
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
			})
    }
    
	handleSubmit = () => {
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify(this.state)
		})
		.then(resp => resp.json())
        .then(resp => {
            if(resp.errors){
				// If login failed
				alert(resp.errors)
			} else {
				// If login succeeded
				this.props.setCurrentUser(resp)
				
			} 
        })
        
	}

	render(){
		return (
			<Form className="authForm" onSubmit={this.handleSubmit}>
			 <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
		    <Form.Field>
		      <label>Email</label>
		      <input onChange={this.handleChange} name="email" type="email" value={this.state.email} placeholder='Email' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} name="password" type="password" value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button id="button" color="teal" type='submit'>Login</Button>
				<Message>
          New to us? <a href='/signup'>Sign Up</a>
        </Message>
		  </Form>
		)
	}
}

export default LoginForm
