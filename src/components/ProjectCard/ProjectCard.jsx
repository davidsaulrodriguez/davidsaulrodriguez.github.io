import React from 'react';
import CardComponent from '../CardComponent/CardComponent';

const ProjectCard = ({
  title,
  subheader,
  image,
  imgHeight,
  description,
  sourceCode,
  liveSite,
}) => {
  return (
    <CardComponent
      title={title}
      subheader={subheader}
      image={image}
      height={imgHeight}
      description={description}
      sourceCode={sourceCode}
      liveSite={liveSite}
    />
  );
};

export default ProjectCard;
