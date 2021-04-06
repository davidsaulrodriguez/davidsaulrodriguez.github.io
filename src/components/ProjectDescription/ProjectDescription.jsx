import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

export class ProjectDescription extends Component {
  constructor(props) {
    super(props);
    this.description = props.description;
  }
  render() {
    return (
      <>
        <Typography varient='p'>{this.description}</Typography>
      </>
    );
  }
}

export default ProjectDescription;
