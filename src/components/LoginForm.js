import React from 'react'
import { Form, Button } from 'semantic-ui-react'

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
		.then(res => res.json())
        .then(res => {
            if(res.errors){
				// If login failed
				alert(res.errors)
			} else {
				// If login succeeded
				this.props.setCurrentUser(res)
			} 
        })
        
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit}>
		    <Form.Field>
		      <label>email</label>
		      <input onChange={this.handleChange} name="email" type="email" value={this.state.email} placeholder='Email' />
		    </Form.Field>
		    <Form.Field>
		      <label>Password</label>
		      <input onChange={this.handleChange} name="password" type="password" value={this.state.password} placeholder='Password' />
		    </Form.Field>
		    <Button type='submit'>Submit</Button>
		  </Form>
		)
	}
}

export default LoginForm
