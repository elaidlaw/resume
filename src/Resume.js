/** @flow */

import React from "react";
import ReactPDF, {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  Link,
  View,
} from "@react-pdf/renderer";
import Header from "./Header";
import SectionHeader from "./SectionHeader";
import Experience from "./Experience";
import ListItem from "./ListItem";
import Blurb from "./Blurb";
import Publication from "./Publication";

type Props = {
  personal?: boolean,
};

const ResumeExperience = () => (
  <>
    <SectionHeader text="Technical Experience" />
    <Experience title="Blip Labs - Full Stack Engineer" startDate="August 2019">
      <ListItem>
        Leading development of several projects to help streamline the bill
        payment process.
      </ListItem>
      <ListItem>
        Using React Native, Node.js, Next.js, Python for ML models, and
        third-party APIs including Plaid and Basis Theory.
      </ListItem>
    </Experience>
    <Experience
      title="Amazon - Software Development Engineer Intern"
      startDate="May 2021"
      endDate="August 2021"
    >
      <ListItem>
        Developing distributed, high-availability systems as part of the Amazon
        Kinesis Data Streams (KDS) team.
      </ListItem>
      <ListItem>
        Designed and implemented a new billing architecture for KDS that reduced
        outages and saves ~$500K per year.
      </ListItem>
    </Experience>
    <Experience
      title="Brown University - Research Assistant"
      startDate="May 2020"
      endDate="December 2022"
    >
      <ListItem>
        Conducting computer vision and robotics research with Profs. James
        Tompkin and Stefanie Tellex
      </ListItem>
    </Experience>
    <Experience
      title="Brown University - Head Teaching Assistant"
      startDate="January 2020"
      endDate="May 2021"
    >
      <ListItem>
        Selected as TA for CSCI 1430 Computer Vision (spring '20, HTA spring
        '21) and CSCI 1470 Deep Learning (fall '20){" "}
      </ListItem>
      <ListItem>
        Creating slides, developing robust autograder test suite, holding office
        hours, and grading 300+ students' work
      </ListItem>
    </Experience>
  </>
);

const OtherExperience = () => (
  <>
    <SectionHeader text="Other Experience" />
    <Experience title="SBUDNIC CubeSat">
      <ListItem>
        Leading software and electronics team for SBUDNIC CubeSat mission aiming
        to redefine how quickly a satellite can be built using terrestrial,
        off-the-shelf parts (see <Link src="sbudnic.netlify.app">sbudnic.netlify.app</Link>)
      </ListItem>
    </Experience>
    <Experience title="Brown Running Club - Captain">
      <ListItem>
        Managing 50+ athletes, planning events, overseeing training, responsible
        for $10,000+ budget
      </ListItem>
    </Experience>
    <Experience
      title="Orange Guava Passion - Alto Saxophone"
    >
      <ListItem>
        Shared management responsibilities and played saxophone in student band.
        Amassed over two million Spotify streams and frequently paid $400+ to
        play at regional venues.
      </ListItem>
    </Experience>
    {/* <Blurb title="Pre-college">
      7 years of FLL/FTC robotics (internationals once), 6 years of Science
      Olympiad (nationals four times), 4 years of math team (top 10 scorer in
      New England), 4 years of CS team (nationals 3 times)
    </Blurb> */}
  </>
);

const nonIncluded = (
  <Experience title="Chooze">
    <ListItem>
      Designed and built device for safely dispensing alcohol at college parties
      in a more accountable manner
    </ListItem>
    <ListItem>
      Won $600 Best Use of Webflow prize, the largest at Hack@Brown 2019, for
      the device's user interface, which can be used on computers or smart
      phones and allows the user to customize their drinks, pay for them, and
      keep track of their total consumption
    </ListItem>
  </Experience>
);

const Publications = () => (
  <>
    <SectionHeader text="Publications" />
    <Publication
      authors={[
        "Yiqing Liang",
        "Eliot Laidlaw",
        "Alex Meyerowitz",
        "Srinath Sridhar",
        "James Tompkin",
      ]}
      url="https://visual.cs.brown.edu/saff/"
      title="Semantic Attention Flow Fields for
      Monocular Dynamic Scene Decomposition"
      venue="ICCV 2023"
    />
    <Publication
      authors={[
        "Benjamin Attal",
        "Eliot Laidlaw",
        "Aaron Gokaslan",
        "Changil Kim",
        "Christian Richardt",
        "James Tompkin",
        "Matthew O'Toole",
      ]}
      url="https://imaging.cs.cmu.edu/torf/"
      title="TöRF: Time-of-Flight Radiance FIelds for Dynamic Scene View Synthesis"
      venue="NeurIPS 2021"
    />
    <Publication
      authors={[
        "Eliot Laidlaw",
        "Austin Sumigray",
        "James Tompkin",
        "Stefanie Tellex",
      ]}
      url="https://dl.acm.org/doi/abs/10.1145/3434074.3447198"
      title="Improving Remote Environment Visualization through 360 6DoF Multi-sensor Fusion for VR Telerobotics"
      venue="HRI 2021"
    />
    <ListItem>Nominated for Best Late Breaking Report.</ListItem>
    <Blurb>
      Acknowledged in{" "}
      <Link src="https://visual.cs.brown.edu/matryodshka">ECCV 2020 paper</Link>{" "}
      on 360 degree real-time view synthesis for contributions to the rendering
      system.
    </Blurb>
  </>
);

const ProjectExperience = () => (
  <>
    <SectionHeader text="Projects" />
    <Experience title="smartFAT">
      <ListItem>
        Built fully automatic timing (FAT) system for track races using computer
        vision
      </ListItem>
      <ListItem>
        System outputs when each runner crosses the finish line (filtering,
        RANSAC line fitting) and the number on their hip sticker (multiple CNNs)
      </ListItem>
    </Experience>
    <Experience title="Jacosta the Skoolie">
      <ListItem>
        Converted a school bus to an RV, completing numerous carpentry, electrical, plumbing, and other projects (See <Link src="https://www.instagram.com/jacosta.skoolie/">our instagram</Link>).
      </ListItem>
      {/* <ListItem>
        Collected thousands of GPS routes from members of the Brown Running Club
        on Strava, and preprocessed them using the Google Maps and Open Street
        Maps APIs
      </ListItem> */}
    </Experience>
    {/* <Experience title="JETnet">
      <ListItem>
        Designed and trained a deep generative adversarial network for
        generating running routes given a map of a town/city
      </ListItem>
      {/* <ListItem>
        Collected thousands of GPS routes from members of the Brown Running Club
        on Strava, and preprocessed them using the Google Maps and Open Street
        Maps APIs
      </ListItem> 
    </Experience> */}
    {/* <Experience title="3D Printer">
      <ListItem>
        Sourced parts for and built 3D printer from scratch as a freshman in
        high school
      </ListItem>
      <ListItem>
        Designed and printed robot parts, 3D printer parts, insulation covers,
        faucet handles, paint brush holders, and many more objects to aid in
        competitions or around the house, all using the printer that I built
      </ListItem>
    </Experience> */}
  </>
);

const Education = () => (
  <>
    <SectionHeader text="Education" />
    <Experience
      title="Brown University"
      startDate="August 2018"
      endDate="December 2022"
    >
      <ListItem>ScB in Computer Science</ListItem>
    </Experience>
    {/* <Blurb title="Relevant Coursework">
      Accelerated Intro to CS, Computer Vision, Design of Robotic Systems, Intro
      to Systems, Designing Humanity Centered Robots, Deep Learning, Topics in
      Collaborative Robotics (Grad level), Data Science, Multivariable Calculus
      (Honors), Linear Algebra (Honors), Probability and Statistics (Honors),
      Differential Equations (Honors), Principles of Economics
    </Blurb> */}
  </>
);

const Skills = () => (
  <View wrap={false}>
    <SectionHeader text="Skills and Interests" />
    <Blurb title="Programming languages and technologies">
      Python, C, C++, C#, Java, Racket, JavaScript, MATLAB, HTML/CSS, jQuery,
      React, React Native, Django, Pyret, SQL, AWS, Unity, ROS
    </Blurb>
    <Blurb title="Other skills">
      graphic design, 2D and 3D CAD (Autodesk Inventor), robotics, 3D printing
    </Blurb>
    <Blurb title="Interests">
      river rafting, distance running, bicycle touring, maker projects, cooking,
      hiking, video games
    </Blurb>
  </View>
);

export default function Resume(props: Props) {
  let { personal } = props;

  // try to load personal information, but if the file isn't there, just
  // exclude it
  let phoneNumber: ?string, address: ?string;
  try {
    const personalInformation = require("./personal");
    phoneNumber = personalInformation.phoneNumber;
    address = personalInformation.address;
  } catch (error) {
    personal = false;
  }

  return (
    <Page {...props} style={styles.page}>
      <Header
        name="Eliot Laidlaw"
        email="laidlaw.eliot@gmail.com"
        phoneNumber={"(401) 749-5971"}
        website=""
        address={address || ""}
        excludePersonalInformation={!personal}
      />
      <Education {...props} />
      <ResumeExperience {...props} />
      <Publications {...props} />
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
    flexDirection: "column",
  },
});
