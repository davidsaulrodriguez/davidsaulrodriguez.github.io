// const showcase = require('../images/showcase_card.png');
import showcaseImg from '../images/showcase_card.png';
import orgchartImg from '../images/orgchart_card.png';
import projectPurpleImg from '../images/projectPurple_card.png';
import mernStackTemplateImg from '../images/mernStackTemplate_card.png';
import nimbusImg from '../images/nimbus_card.png';
import simpleJsQuizImg from '../images/simpleJsQuiz_card.png';
const projectConfig = [
  {
    id: 1,
    title: 'Showcase',
    subheader: 'Your GitHub Profile, Made Interactive...',
    image: showcaseImg,
    imgHeight: '570',
    description:
      'This is a group project application that uses the GitHub API to create an interactive and beautiful profile page with your GitHub information.',
  },
  {
    id: 2,
    title: 'OrgChart',
    subheader: 'An employee directory built using React and Material-UI',
    image: orgchartImg,
    imgHeight: '836',
    description:
      'OrgChart is an employee directory built using React and Material-UI. With this emplyoee directory you can sort and filter the data that is called from the RandomUser API and even hide columns to show only the data you want!',
  },
  {
    id: 3,
    title: 'Project Purple Planet',
    subheader:
      'A simple, clean, lightweight & FREE personal project based task manager!',
    image: projectPurpleImg,
    imgHeight: '514',
    description:
      'Project Purple Planet is a Full Stack Web Application and project based task manager that is built using MaterializeCSS and HandlebarsJS. It also uses PassportJS for user account signup and login authentication. It even has a protected API that requires you to be logged in to make API calls.',
  },
  {
    id: 4,
    title: 'MERN Stack Template',
    subheader:
      'A template repository favored by my fellow students in my Bootcamp cohort',
    image: mernStackTemplateImg,
    imgHeight: '633',
    description:
      'This is a Full Stack Web Application and GitHub repository template I created for myself that utilizes the MERN (MongoDB, Express, React and NodeJS) stack... I create this project as a way to lessen the time needed to get started with both Homework and Group Projects during my Coing Bootcamp cohort... This project comes complete with a starter API structure to help you quickly get started with your next project.',
  },
  {
    id: 5,
    title: 'Nimbus',
    subheader:
      'A beautiful web app created with Materialize CSS to show weather conditions and forecasts.',
    image: nimbusImg,
    imgHeight: '1115',
    description:
      "This single page application that is built with MaterializeCSS and JQuery. It uses the OpenWeatherAPI to query the current day's weather and give you the forecast for the next 5 days along with it. You can use this app by specifiying in the search bar the location you would like to check the weather in. This app's search parameters are limited to the United States and gives you the ability to search via zipcode or City, State combination.",
  },
  {
    id: 6,
    title: 'Simple JS Quiz',
    subheader:
      'A simple quiz app made with HTML5, CSS3 and vanilla JavaScript.',
    image: simpleJsQuizImg,
    imgHeight: '703',
    description: '',
  },
];

export default projectConfig;
