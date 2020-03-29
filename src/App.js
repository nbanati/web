import React from 'react';
import './App.css';
import Grid from './components/organisms/Grid';
import Introduction from './components/organisms/Introduction';
import ProjectImage from '../src/images/Projects.png';
import ExperienceImage from '../src/images/job.jpg';
import EducationImage from '../src/images/Education.png';

function App() {
  let data=[{"color":"darkcyan","pageLink":"Projects","imgtext":"Projects","image":ProjectImage},
            {"color":"whitesmoke","pageLink":"Experience","imgtext":"Experience","image":ExperienceImage},
            {"color":"tomato","pageLink":"Community Service","imgtext":"Community Service","image":ExperienceImage},
            {"color":"red","pageLink":"Publications","imgtext":"Publications","image":ExperienceImage},
            {"color":"cornflowerblue","pageLink":"Education","imgtext":"Education","image":EducationImage},
            {"color":"darkslateblue","pageLink":"Activities","imgtext":"Activities","image":ExperienceImage},
            {"color":"darkmagenta","pageLink":"Skills","imgtext":"Skills","image":ExperienceImage},
            {"color":"gold","pageLink":"Achievements","imgtext":"Achievements","image":ExperienceImage},
            {"color":"mediumseagreen","pageLink":"Courses Completed","imgtext":"Courses Completed","image":ExperienceImage}            
];
  return (
    <div className="App">
      <div className="Introduction">
        <Introduction />
      </div>
      <div className="Grid">
        <Grid gridData={data} />
      </div>
    </div>
  );
}

export default App;
