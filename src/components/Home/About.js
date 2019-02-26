import React from 'react';

import Sb from '../general/Semibold';
import Pbr from '../general/PaddedLineBreak'

const About = () => (
  <div id="aboutContent">
    I'm David, a developer, designer, and musician from the San Francisco bay area. I study at Brown University.
    <Pbr />
    {/* Building, modding, and hacking things is my greatest love—whether it's hardware, software, art, or music. */}
    Building, modding, and hacking things is my greatest love.
    <Pbr />
    I worked for three summers at <a className="superlink" rel="noopener noreferrer" href="https://shop.hellowynd.com/" target="_blank">Wynd</a>, a Silicon Valley-based startup, where I wrote code to scrape 6,000+ air pollutant data points in 25+ countries around the world from open online databases.
    <br />
    I also wrote the company's Node.js server documentation and JavaScript style guidelines galore.
    <Pbr />
    When I'm not coding, drawing, or making music, you can usually find me improvising piano or playing old-school video games.
  </div>
)
export default About;