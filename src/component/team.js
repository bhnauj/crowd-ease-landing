import React from "react";
import linkedin from '../assets/linkedin.png'
import gitHub from '../assets/github.png'
import florida from '../assets/team/Florida.png'
import Andrew from '../assets/team/Andrew.png'
import Anmol from '../assets/team/Anmol.png'
import Bhanuj from '../assets/team/Bhanuj.png'
import Diego from '../assets/team/Diego.png'
import Jasmin from '../assets/team/Jasmin.png'
import Manpreet from '../assets/team/Manpreet1.png'
import Rojin from '../assets/team/Rojin.png'
import Winall from '../assets/team/Winall.png'
import darkGit from '../assets/darkGit.png'
import lightGit from '../assets/lightGit.png'
import darkV from '../assets/darkV.png'
import lightV from '../assets/lightV.png'


const teamImages = [
    {
        url: florida,
        name: 'Florida Joca',
        profile: 'Full Stack Developer',
        sil:lightGit,
        sid:darkGit

    },
    {
        url: Diego,
        name: 'Diego Santa Cruz',
        profile: 'Full Stack Developer',
        sil:lightGit,
        sid:darkGit
    },
    {
        url: Rojin,
        name: 'Rojin Taghadosi',
        profile: 'Full Stack Developer',
        sil:lightGit,
        sid:darkGit
    },
    {
        url: Winall,
        name: 'Winall Lopes',
        profile: 'Full Stack Developer',
        sil:lightGit,
        sid:darkGit
    },
    {
        url: Bhanuj,
        name: 'Bhanuj Nagpal',
        profile: 'Full Stack Developer',
        sil:lightGit,
        sid:darkGit
    },
    {
        url: Jasmin,
        name: 'Yas Fazeli',
        profile: 'UX/UI Designer',
        sil:lightV,
        sid:darkV
    },
    {
        url: Andrew,
        name: 'Andrew Yip',
        profile: 'UX/UI Designer',
        sil:lightV,
        sid:darkV
    },
    {
        url: Manpreet,
        name: 'Manpreet Kaur',
        profile: 'UX/UI Designer',
        sil:lightV,
        sid:darkV
    },
    {
        url: Anmol,
        name: 'Anmoldeep Kaur',
        profile: 'UX/UI Designer',
        sil:lightV,
        sid:darkV
    }
  ];


const Team = ({theme}) => {
    return ( 
        <section className='Team'>
          <p className='teamHeading'><b>Our Team</b></p>
          <div className='sectionTeam'>
            
            {teamImages.map((teamImages, index)=> (
            <div className='team'>
            <img className='image' src={teamImages.url} alt="avatar"/>
            <div className='profileDetails'>
              <p className='name'>{teamImages.name}</p>
              <p className='profile'>{teamImages.profile}</p>
              <div className='socialIcon'>
              <a href="https://www.linkedin.com/" target={"_blank"}><img className="linkedin" src={linkedin} alt="linkedin" /></a>

              {theme === 'light' ? <img src={teamImages.sid} alt="gitHub" /> : <img src={teamImages.sil} alt="gitHub" />}
              
              </div>
              </div>
              </div>
          ))} 
          </div>
        </section>
     );
}
 
export default Team;