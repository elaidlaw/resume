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
  long?: boolean,
  ai?: boolean,
  personal?: boolean,
};

const AIExperience = ({ long, ai }: Props) => (
  <>
    <SectionHeader text='Data Science and Artificial Intelligence Experience' />
    <Experience
      title='Research in Adversarial Robustness'
      startDate='April 2018'
    >
      <ListItem>Developed a new framework for adversarial attacks using
        a functional threat model.</ListItem>
      <ListItem>Invented the ReColorAdv attack, which when combined with other
        attacks leads to the strongest existing attack even after adversarial
        training (paper under review).</ListItem>
      <ListItem>Investigating surrogate loss functions for improving
        adversarial robustness of neural networks.</ListItem>
    </Experience>
    <Experience
      title='Research at Max Planck Institute for Intelligent Systems'
      startDate='May 2017'
      endDate='January 2018'
    >
      <ListItem>Improved statistical face models developed at the
        institute.</ListItem>
      <ListItem>Designed a protocol to capture tens of thousands of 3D scans
        of human faces.</ListItem>
      <ListItem>Used deep learning to model the relationship between speech
        and facial motion.</ListItem>
      <ListItem>Coauthored paper presented at CVPR'19, a leading computer
        science conference.</ListItem>
    </Experience>
    <Experience
      title='Intern, Booz Allen Hamilton Inc: “Rumor Has It”'
      startDate='January 2016'
      endDate='April 2016'
    >
      <ListItem>Developed a social media analytics tool of my own design
        that I had begun in my previous internship.</ListItem>
      <ListItem>Used cutting edge data mining, machine learning, and natural
        language processing algorithms—some of which I designed myself—to
        analyze real-time Twitter data in a unique manner.</ListItem>
    </Experience>
    {(ai || long) &&
    <Experience
      title='Group Research in Automatic Bias Detection'
      startDate='September 2015'
      endDate='May 2017'
    >
      <ListItem>Led a team of eleven other students in research seeking to
        automatically quantify bias in Wikipedia and other large multilingual
        corpora.</ListItem>
      <ListItem>Research was part of Gemstone honors program.</ListItem>
      <ListItem>Received most valuable team member award (selected out of
        all students in honors program).</ListItem>
    </Experience>}
    <Experience
      title='Research in Cross-Lingual Connotation'
      startDate='January 2016'
      endDate='March 2016'
    >
      <ListItem>Researched differences in word connotation across languages
        with Prof. Marine Carpuat at the U. of Maryland.</ListItem>
      <ListItem>Worked with Google teraword n-grams and scraped news sites
        in multiple languages.</ListItem>
    </Experience>
    <Experience
      title='Intern, Booz Allen Hamilton Inc: “Twitter Polygraph”'
      startDate='June 2015'
      endDate='August 2015'
    >
      <ListItem>Served as technical lead on a team that analyzed Twitter
        data for deceitful behavior with >95% accuracy.</ListItem>
      <ListItem>Designed methods to analyze the data using data mining,
        statistics, natural language processing, and machine
        learning.</ListItem>
    </Experience>
    {long &&
    <Experience
      title='Research in Automatic Summarization of Scientific Research'
      startDate='December 2012'
      endDate='May 2014'
    >
      <ListItem>Researched automatic summarization of scientific research
        articles using natural language processing and machine
        learning.</ListItem>
      <ListItem>Won multiple awards at the International Science and
        Engineering Fair in May 2014.</ListItem>
    </Experience>
    }
  </>
);

const SoftwareExperience = ({ long }: Props) => (
  <>
    <SectionHeader text='Software Development Experience' />
    <Experience
      title='Data Scientist and Web Developer, Builda.co'
      startDate='November 2016'
    >
      <ListItem>Building an analysis pipeline for data from Fortune 500
        companies using Apache Spark.</ListItem>
      <ListItem>Created a web-based mentoring platform for entrepreneurs using
        Django, Bootstrap, jQuery and APIs from LinkedIn,
        Braintree, and Office365.</ListItem>
    </Experience>
    <Experience
      title='App Developer, Why Weight?'
      startDate='March 2018'
    >
      <ListItem>Building an app to help clients of Why Weight, a weight loss
        and life coaching company.</ListItem>
      <ListItem>Implemented features to let users track their weight, connect
        with Bluetooth scales, log food and water intake, and message the
        company’s life coaches.</ListItem>
      <ListItem>Writing the app in React Native with a Django backend hosted
        in AWS.</ListItem>
    </Experience>
    <Experience
      title='Insider Threat Analysis Tool'
      subtitle='Center for Study of Terrorism and Responses to Terrorism'
      startDate='November 2016'
      endDate='December 2018'
    >
      <ListItem>Built a tool to analyze insider threats in airport cargo
        systems with a team of three other developers.</ListItem>
      <ListItem>Implemented the user interface in JavaFX.</ListItem>
      <ListItem>Met with and presented tool to government officials in
        Department of Homeland Security, FBI, etc.</ListItem>
    </Experience>
    {long &&
    <Experience
      title='Alif Aleph'
      startDate='November 2014'
      endDate='May 2018'
    >
      <ListItem>Creating online dialogue platform for Israelis and
          Palestinians.</ListItem>
      <ListItem>Built website using Django, Bootstrap, jQuery, Gulp, and other
        technologies (see aa.zetaware.net).</ListItem>
    </Experience>}
    {long &&
    <Experience
      title='inPin'
      startDate='May 2015'
      endDate='February 2016'
    >
      <ListItem>Developed a mobile app to assist in indoor navigation for iOS
        and Android.</ListItem>
    </Experience>}
    {long &&
    <Experience
      title='Web Developer, TequilaArt LLC'
      startDate='June 2014'
      endDate='June 2015'
    >
      <ListItem>Designed and built a website in WordPress for a small company
        in Providence, RI.</ListItem>
    </Experience>}
    {long &&
    <Blurb title={'Other websites I\'ve designed/built'}>
      cs.brown.edu/people/bjm, pmbloch.com, builda.ai, www.geteasybill.com,
      workstrive.com
    </Blurb>}
    {!long &&
    <Experience
      title='Other Freelance Software Development Work'
      startDate='June 2014'
    >
      <ListItem>Including data science, mobile apps, and web
        development.</ListItem>
    </Experience>}
  </>
);

const OtherExperience = () => (
  <>
    <SectionHeader text='Other Experience and Involvement' />
    <Experience
      title='Teaching assistant'
      subtitle='University of Maryland computer science department'
      startDate='January 2018'
      endDate='May 2018'
    >
      <ListItem>Led a discussion section for Object-Oriented
        Programming I.</ListItem>
    </Experience>
    <Experience
      title='J Street U'
      startDate='October 2015'
      endDate='July 2016'
    >
      <ListItem>Worked with other students in the U.S. and Israel to advocate
        for a two-state solution to the Israeli-Palestinian
        Conflict.</ListItem>
    </Experience>
    <Experience
      title='TAMID Group'
      startDate='October 2014'
      endDate='May 2015'
    >
      <ListItem>Program that links college students with startup companies in
        Israel.</ListItem>
      <ListItem>Worked to help an Israeli startup, Insights.US, expand into
        the U.S. and scale their business plan.</ListItem>
      <ListItem>Created the website for the University of Maryland’s
        TAMID chapter.</ListItem>
    </Experience>
  </>
);

const Education = ({ long }: Props) => (
  <>
    <SectionHeader text='Education' />
    <Experience
      title='University of Maryland, College Park'
      startDate='2014'
      endDate='2018'
    >
      <ListItem>Computer science/math double degree, Middle East studies
        minor, GPA 4.00.</ListItem>
      <ListItem>Selected as one of top five graduating seniors for
        “academic distinction, exemplary character, and service to the campus
        or public communities.”</ListItem>
    </Experience>
    {long &&
    <Experience
      title='Technion Institute'
      subtitle='Haifa, Israel'
      startDate='March 2016'
      endDate='July 2016'
    >
      <ListItem>Semester abroad, studied entrepreneurship/social
        entrepreneurship.</ListItem>
    </Experience>}
  </>
);

const Skills = ({}) => (
  <View wrap={false}>
    <SectionHeader text='Skills' />
    <Blurb title='Programming languages and technologies'>
      Python, C, Java, OCaml, Racket, VBA, R, PHP, WordPress, JavaScript,
      jQuery, Angular JS, React, React Native, Django (Python),
      Google Maps API, Twitter API, LinkedIn API, iOS (Objective-C and Swift),
      Android, AWS, Heroku, MySQL
    </Blurb>
    <Blurb title='Artificial intelligence and data science'>
      natural language processing, classification, clustering, data cleaning
      and preprocessing, automatic summarization, topic modeling, statistical
      analysis, deep learning
    </Blurb>
    <Blurb title='Other skills'>
      graphic design, video editing, 3D modeling, animation
    </Blurb>
  </View>
);

const Awards = ({ long }: Props) => (
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
    <SectionHeader text='Publications and Preprints' />
    <Publication
      title='Functional Adversarial Attacks'
      authors={['Cassidy Laidlaw', 'Soheil Feizi']}
      venue='arXiv preprint'
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
  let { long, ai, personal } = props;

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
        name='Cassidy Laidlaw'
        email='laidlaw.cassidy@gmail.com'
        phoneNumber={phoneNumber || ''}
        website='cassidylaidlaw.com'
        address={address || ''}
        excludePersonalInformation={!personal}
      />
      <Education {...props} />
      {long && <Courses {...props} />}
      {ai ?
        <>
          <AIExperience {...props} />
          <Publications {...props} />
          <SoftwareExperience {...props} />
        </> :
        <>
          <SoftwareExperience {...props} />
          <AIExperience {...props} />
          <Publications {...props} />
        </>}
      {long && <OtherExperience {...props} />}
      <Skills {...props} />
      <Awards {...props} />
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
