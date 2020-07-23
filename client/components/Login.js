import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { value: "" }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		this.handleSubmit()
	}
	
	handleSubmit() {
		// fetch('/api/user/login', {
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "Application/JSON"
    //     },
    //     body: JSON.stringify(body)
    //   })
    //   .then(resp => resp.json())
    //   .then(data => {
		// 		console.log("Login Fetch ",data)
    //   })
    //   .catch(err => console.log('Login fetch ERROR: ', err));
	}

	handleChange () {
		// let { value } = this.state
		// this.setState({value})
	}
	
	render() {
    return (
      <div>
				<form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
					
        </label>
        <input type="submit" value="Submit" />
      </form>
			</div>
    );
  }
}

export default MyGroups;