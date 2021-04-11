import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
} from '@material-ui/core';
import ProjectDescription from '../ProjectDescription/ProjectDescription';

export class CardComponent extends Component {
  constructor(props) {
    super(props);
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
        <CardActions>
          {this.props.sourceCode ? (
            <Button
              component={Link}
              href={this.props.sourceCode}
              target='_blank'
              rel='noopener'
              variant='contained'
              color='primary'>
              Source Code
            </Button>
          ) : null}

          {this.props.liveSite ? (
            <Button
              component={Link}
              href={this.props.liveSite}
              target='_blank'
              rel='noopener'
              variant='outlined'
              color='primary'>
              Live Site
            </Button>
          ) : null}
        </CardActions>
      </Card>
    );
  }
}

export default CardComponent;
