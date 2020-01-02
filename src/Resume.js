/** @flow */

import React from 'react';
import ReactPDF, { Text, Document, Font, Page, StyleSheet, Image,
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
    <SectionHeader text='Work Experience' />
    <Experience
      title='App Developer, Blip Labs'
      startDate='August 2019'
    >
      <ListItem>Building an iOS app for bill payment and management
        using React Native.</ListItem>
      <ListItem>Implementing integrations with Q2 Billing API, Plaid API and
        Django (Python) backend</ListItem>
      <ListItem>Reporting directly to Co-CEOs as an integral part of this new
        FinTech startup</ListItem>
    </Experience>
    <Experience
      title='Grader, Art of Problem Solving'
      startDate='April 2018'
    >
      <ListItem>Reading students' work in math and computer science and giving
        thoughtful feedback on accuracy, clarity, and style</ListItem>
      <ListItem>Suggested improvements to the grading interface that were
        implemented</ListItem>
      <ListItem>Asked specifically by company CTO to apply to be a paid
        developer intern</ListItem>
    </Experience>
  </>
);

const OtherExperience = () => (
  <>
    <SectionHeader text='Other Experience and Involvement' />
    <Experience
      title='Recruiting Chair'
      subtitle='Brown Running Club'
      startDate='May 2019'
    >
      <ListItem>Chosen from several applicants to position on 5 person club
        leadership team</ListItem>
      <ListItem>Managing 50+ athletes, planning events, overseeing training,
        responsible for $10000+ budget</ListItem>
      <ListItem>Led team to third consecutive nationals appearance
        fall 2019</ListItem>
    </Experience>
  </>
);

const Education = () => (
  <>
    <SectionHeader text='Education' />
    <Experience
      title='Brown University'
      startDate='2018'
      endDate='2022 (Expected)'
    >
      <ListItem>Candidate for ScB in Computer Science</ListItem>
    </Experience>
    <Blurb title='Relevant Coursework'>
        accelerated intro to CS, computer vision,
        design of robotic systems, intro to systems, designing humanity centered
        robots, deep learning, multivariable calculus, linear algebra,
        probability and statistics
    </Blurb>
  </>
);

const Skills = () => (
  <View wrap={false}>
    <SectionHeader text='Skills' />
    <Blurb title='Programming languages and technologies'>
      Python, C, Java, Racket, JavaScript, MATLAB, HTML/CSS,
      jQuery, React, React Native, Django (Python)
    </Blurb>
    <Blurb title='Other skills'>
      graphic design, 2D and 3D CAD (Autodesk Inventor)
    </Blurb>
  </View>
);

const Awards = () => (
  <>
    <SectionHeader text='Honors and Awards' />
    <Blurb title='University of Maryland University Medal Finalist'>
      selected as one of five finalists for the highest honor that the
      university can bestow on an undergraduate student based on the criteria
      of “academic distinction, exemplary character, and service to the
      campus or public communities.”
    </Blurb>
    <Blurb title='Gemstone Honors Program Most Valuable Team Member'>
      selected as the student who contributed most to his/her research team out
      of all students in my honors program.
    </Blurb>
    <Blurb title='Banneker/Key Scholarship'>
      the University of Maryland's most prestigious scholarship.
    </Blurb>
  </>
);

const Publications = () => (
  <>
    <SectionHeader text='Publications' />
    <Publication
      title='Functional Adversarial Attacks'
      authors={['Cassidy Laidlaw', 'Soheil Feizi']}
      venue='NeurIPS 2019'
      url='https://arxiv.org/abs/1906.00001'
    />
    <Publication
      title='Capture, Learning, and Synthesis of 3D Speaking Styles'
      authors={[
        'Daniel Cudeiro*',
        'Timo Bolkart*',
        'Cassidy Laidlaw',
        'Anurag Ranjan',
        'Michael J. Black',
      ]}
      venue='CVPR 2019'
      url='https://voca.is.tue.mpg.de/'
    />
  </>
);

const Courses = () => (
  <>
    <SectionHeader text='Coursework' />
    <Blurb title='Computer science'>
      C/computer systems, programming languages, algorithms, compilers,
      operating systems, machine learning, artificial intelligence,
      computational linguistics I and II (graduate level)
    </Blurb>
    <Blurb title='Mathematics'>
      linear algebra (at Brown University), multivariate calculus
      (at Brown University), differential equations, real analysis
      (single variable and multivariate), differential forms,
      abstract algebra, axiomatic set theory, probability theory,
      mathematical statistics, computational methods
    </Blurb>
    <Blurb title='Middle East studies'>
      Israeli/Palestinian Conflict, Islamic civilization,
      women in the Middle East, Israel and the Arab Spring,
      history of the Ottoman Empire
    </Blurb>
    <Blurb title='Entrepreneurship/social entrepreneurship'>
      social ventures (at Technion), organizations and entrepreneurship
      (at Technion), writing for social entrepreneurship
    </Blurb>
    <Blurb title='Music'>
      men’s chorus (3 semesters), jazz big band (3 semesters),
      jazz combo (5 semesters), classical piano lessons (1 semester)
    </Blurb>
    <Blurb title='Other courses'>
      environmental economics, global inequality, mechanism design,
      human sexuality, ethics, introduction to African-American studies,
      African-American literature
    </Blurb>
  </>
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
        phoneNumber={phoneNumber || ''}
        website=''
        address={address || ''}
        excludePersonalInformation={!personal}
      />
      <Education {...props} />
      <ResumeExperience {...props} />
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
