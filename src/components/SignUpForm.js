import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import './auth.css'

class SignupForm extends React.Component {
	state = {
        name: "",
        username: "",
		email: "",
		password: "",
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(resp => resp.json())
		.then((resp) => {
			if (resp.errors){
				alert(resp.errors)
				
			} else {
				this.props.setCurrentUser(resp)
			}
		})
	}

	handleSubmit = () => {
		this.createUser()		
	}

	render(){
        console.log(this.state)
		return (
			<Form className="authForm" onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>Name</label>
		      <input onChange={this.handleChange} name="name" value={this.state.name} placeholder='name' />
		    </Form.Field>
		    <Form.Field>
		      <label>Email</label>
		      <input onChange={this.handleChange} name="email" type="email" value={this.state.email} placeholder='Email' />
		    </Form.Field>
            <Form.Field>
		      <label>Username</label>
		      <input onChange={this.handleChange} name="username" value={this.state.username} placeholder='Username' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} type="password" name="password" value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button id="button" color="teal" type='submit'>Submit</Button>
            <Message>
          Already with us? <a href='/login'>Login</a>
        </Message>
		  </Form>
		)
	}
}

export default SignupForm