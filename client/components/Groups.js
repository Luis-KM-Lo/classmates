import React, { Component } from 'react';
import Group from './Group';

class Groups extends Component {
	constructor(props) {
		super(props);
		this.state = { groups: []}
		// this.handleClick = this.handleClick.bind(this)
	}
	componentDidMount() {
		fetch('/api/group')
		.then(res => res.json())
		.then(groups => {
			// console.log(groups)
			this.setState(() => { 
				return { groups } 
			})
		})
	}

  render() {
		// const { groups } = this.state;
		// const displayGroups = groups.map(({ subject, categories, descriptions, rules, courselinks, size }) => (
		// 	{subject}
		// ))
		const { groups } = this.state;
		// console.log("this state", this.state.groups)
    return (
      <div>
				<h1>hi</h1>
      	{groups.map(group => <Group {...group } key={group._id} />)}
			</div>
    );
  }
}

export default Groups;