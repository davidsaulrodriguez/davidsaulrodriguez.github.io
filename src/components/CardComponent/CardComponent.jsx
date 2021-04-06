import React, { Component } from 'react';
import {
  Card,
  // CardActionArea,
  // CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  // Typography,
} from '@material-ui/core';
import ProjectDescription from '../ProjectDescription/ProjectDescription';

export class CardComponent extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-console
    console.log(this.props);
  }
  render() {
    return (
      <Card>
        <CardMedia
          component='img'
          image={this.props.image}
          height={this.props.imgHeight}
        />
        <CardHeader title={this.props.title} subheader={this.props.subheader} />
        <CardContent>
          <ProjectDescription description={this.props.description} />
        </CardContent>
      </Card>
    );
  }
}

export default CardComponent;
