import React, { Component } from 'react';

class Group extends Component {
	constructor(props) {
		super(props);
	}

  render() {
		const { subject, categories, rules, descriptions, courselinks, size } = this.props
    return (
      <div>
				<h1>{subject}</h1>
				<h2>{categories}</h2>
				<h3>{rules}</h3>
				<h4>Size of classroom: {size}</h4>
				<p>{descriptions}</p>
				<a href={courselinks}>{courselinks}</a>
      </div>
    );
  }
}

export default Group;