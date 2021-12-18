/** @flow */

import React from 'react';
import ReactPDF, { Text, Document, Font, Page, StyleSheet, Image, Link,
  View } from '@react-pdf/renderer';
import Header from './Header';
import SectionHeader from './SectionHeader';
import Experience from './Experience';
import ListItem from './ListItem';
import Blurb from './Blurb';
import Publication from './Publication';

type Props = {
  personal?: boolean,
};

const ResumeExperience = () => (
  <>
    <SectionHeader text='Technical Experience' />
    <Experience
      title='Blip Labs - Lead Engineer'
      startDate='August 2019'
    >
      <ListItem>Leading development of an app to streamline the bill payment process (see <Link src="https://www.tryblip.com">tryblip.com</Link>)</ListItem>
      <ListItem>Using React Native for frontend, Django backend hosted on AWS, and APIs from Plaid, Finovera, and Q2</ListItem>
      <ListItem>Given opportunity to be CTO of company</ListItem>
    </Experience>
    <Experience
      title='Brown University - Research Assistant'
      startDate='May 2020'
    >
      <ListItem>Conducting computer vision and robotics research with Profs. James Tompkin and Stefanie Tellex</ListItem>
      <ListItem>Contributed to <Link src="http://visual.cs.brown.edu/projects/matryodshka-webpage/">ECCV 2020 paper</Link> on real-time view synthesis by improving system</ListItem>
      <ListItem>Co-first authored HRI 2021 late breaking report on robot teleoperation under university SPRINT award</ListItem>
    </Experience>
    <Experience
      title='Brown University - Head Teaching Assistant'
      startDate='January 2020'
    >
      <ListItem>Selected as TA for CSCI 1430 Computer Vision (spring '20, HTA spring '21) and CSCI 1470 Deep Learning (fall '20) </ListItem>
      <ListItem>Creating slides, developing robust autograder test suite, holding office hours, and grading 300+ students' work</ListItem>
    </Experience>
  </>
);

const OtherExperience = () => (
  <>
    <SectionHeader text='Other Experience and Involvement' />
    <Experience
      title='Brown Running Club - Captain'
      startDate='May 2019'
    >
      <ListItem>Managing 50+ athletes, planning events, overseeing training,
        responsible for $10,000+ budget</ListItem>
      <ListItem>Led team to third consecutive nationals appearance
        fall 2019</ListItem>
    </Experience>
    <Experience
      title='Orange Guava Passion - Alto Saxophone'
      startDate='September 2018'
    >
      <ListItem>Founded, share management responsibilities, and play saxophone in student band at Brown University</ListItem>
      <ListItem>Amassed over 500,000 plays on Spotify and frequently paid $400+ to play gigs at regional venues</ListItem>
    </Experience>
    <Blurb title="Pre-college">7 years of FLL/FTC robotics (internationals once), 6 years of Science Olympiad (nationals four times),
      4 years of math team (top 10 scorer in New England), 4 years of CS team (nationals 3 times)</Blurb>
  </>
);

const nonIncluded = <Experience
title='Chooze'
>
<ListItem>Designed and built device for safely dispensing alcohol at college parties in a more accountable manner</ListItem>
<ListItem>Won $600 Best Use of Webflow prize, the largest at Hack@Brown 2019, for the device's user interface,
  which can be used on computers or smart phones and allows the user to customize their drinks, pay for them, and keep track of their total consumption</ListItem>
</Experience>

const ProjectExperience = () => (
  <>
    <SectionHeader text='Projects' />
    <Experience
      title='smartFAT'
    >
      <ListItem>Built fully automatic timing (FAT) system for track races using computer vision</ListItem>
      <ListItem>System outputs when each runner crosses the finish line (filtering, RANSAC line fitting) and the number on their hip sticker (multiple CNNs)</ListItem>
    </Experience>
    
    <Experience title="JETnet">
<ListItem>Designed and trained a deep generative adversarial network for generating running routes given a map of a town/city</ListItem>
<ListItem>Collected thousands of GPS routes from members of the Brown Running Club on Strava, and preprocessed them using the Google Maps and Open Street Maps APIs</ListItem>
</Experience>
    <Experience
      title='3D Printer'
    >
      <ListItem>Sourced parts for and built 3D printer from scratch as a freshman in high school</ListItem>
      <ListItem>Designed and printed robot parts, 3D printer parts, insulation covers, faucet handles, paint brush holders, and many more objects to aid in
        competitions or around the house, all using the printer that I built
      </ListItem>
    </Experience>
  </>
);

const Education = () => (
  <>
    <SectionHeader text='Education' />
    <Experience
      title='Brown University'
      startDate='August 2018'
      endDate='December 2022'
    >
      <ListItem>Candidate for ScB in Computer Science (GPA: 3.87)</ListItem>
    </Experience>
    <Blurb title='Relevant Coursework'>
        Accelerated Intro to CS, Computer Vision,
        Design of Robotic Systems, Intro to Systems, Designing Humanity Centered
        Robots, Deep Learning, Topics in Collaborative Robotics (Grad level),
        Data Science, Multivariable Calculus (Honors), Linear Algebra (Honors),
        Probability and Statistics (Honors), Differential Equations (Honors), Principles of Economics
    </Blurb>
  </>
);

const Skills = () => (
  <View wrap={false}>
    <SectionHeader text='Skills and Interests' />
    <Blurb title='Programming languages and technologies'>
      Python, C, C++, C#, Java, Racket, JavaScript, MATLAB, HTML/CSS,
      jQuery, React, React Native, Django, Pyret, SQL, AWS, Unity, ROS
    </Blurb>
    <Blurb title='Other skills'>
      graphic design, 2D and 3D CAD (Autodesk Inventor), robotics, 3D printing
    </Blurb>
    <Blurb title='Interests'>
      river rafting, distance running, bicycle touring, maker projects, cooking, hiking, video games
    </Blurb>
  </View>
);

export default function Resume(props: Props) {
  let { personal } = props;

  // try to load personal information, but if the file isn't there, just
  // exclude it
  let phoneNumber: ?string, address: ?string;
  try {
    const personalInformation = require('./personal');
    phoneNumber = personalInformation.phoneNumber;
    address = personalInformation.address;
  } catch(error) {
    personal = false;
  }

  return (
    <Page {...props} style={styles.page}>
      <Header
        name='Eliot Laidlaw'
        email='laidlaw.eliot@gmail.com'
        phoneNumber={'(401) 749-5971'}
        website=''
        address={address || ''}
        excludePersonalInformation={!personal}
      />
      <Education {...props} />
      <ResumeExperience {...props} />
      <ProjectExperience {...props} />
      <OtherExperience {...props} />
      <Skills {...props} />
    </Page>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
