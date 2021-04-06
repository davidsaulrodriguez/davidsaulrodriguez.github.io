import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

const ProjectCard = ({ title, subheader, image, imgHeight, description }) => {
  return (
    <CardComponent
      title={title}
      subheader={subheader}
      image={image}
      height={imgHeight}
      description={description}
    />
  );
};

export default ProjectCard;
