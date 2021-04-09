import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Masonry from 'react-masonry-css';
import projects from '../../config/projects';
import useStyles from './styles';

const Projects = () => {
  const classes = useStyles();
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Masonry
      breakpointCols={breakpoints}
      className={classes.myMasonryGrid}
      columnClassName={classes.myMasonryGridColumn}>
      {projects.map(
        ({
          title,
          subheader,
          image,
          imgHeight,
          id,
          description,
          sourceCode,
          liveSite,
        }) => (
          <div className={classes.myMasonryGridColumnDiv} key={id}>
            <ProjectCard
              title={title}
              subheader={subheader}
              image={image}
              imgHeight={imgHeight}
              description={description}
              sourceCode={sourceCode}
              liveSite={liveSite}
              target='_blank'
              rel='noopener'
            />
          </div>
        )
      )}
    </Masonry>
  );
};

export default Projects;
