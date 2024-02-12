/* eslint-disable react/no-unescaped-entities */

import LeftObj1 from "./assets/left_obj_1.svg";
import LeftObj2 from "./assets/left_obj_05.svg";
import RightObj3 from "./assets/right_obj_05.svg";
import LeftObj3 from "./assets/left_obj_03.svg";
import RightObj1 from "./assets/right_obj_1.svg";
import RightObj2 from "./assets/right_obj_03.svg";
import styles from "./style.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.about_block}>
        <div className={styles.block_figure}>
          <img src={LeftObj1} alt="left-figure-01" />
        </div>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>Web Development Services</h2>
            <p>
              Welcome to our Web Development service, where we specialize in
              creating optimized solutions for clients. We offer one-page and
              multi-page website development, revamping existing legacy
              applications, and creating online stores, CMS, blogs, and news
              portals. Leveraging modern technologies like React, Redux, and C#,
              we deliver robust and scalable solutions. Partner with us for a
              website that exceeds your expectations. Contact us today to
              discuss your project and achieve digital success.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>Api and Integration</h2>
            <p>
              Our API and Integration service, where we specialize in creating
              optimized solutions for our clients. We understand the importance
              of seamless data exchange and functionality across complex IT
              landscapes. Our team excels at linking disparate components, such
              as new systems, legacy assets, and partner data, into cohesive
              digital ecosystems. By leveraging APIs and integrations, we
              amplify your revenue channels, enable new business models, and
              provide a lasting competitive advantage. Partner with us to
              enhance your digital capabilities. Contact us today to discuss
              your integration needs and achieve optimal results.
            </p>
          </div>
        </div>
        <div className={styles.block_figure}>
          <img src={RightObj2} alt="right-figure-01" />
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_figure}>
          <img src={LeftObj2} alt="left-figure-02" />
        </div>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>Software Development Lifecycle (SDLC) Consulting</h2>
            <p>
              We specialize in optimizing software development processes for our
              clients. Our experts provide guidance on DevOps, GitFlow, testing,
              Agile methodologies, team interactions, and documentation
              practices. We help streamline development and operations
              processes, implement efficient version control strategies, enhance
              testing methodologies, and foster collaboration between teams. Our
              goal is to optimize your software development lifecycle, ensuring
              seamless project management and delivering high-quality results.
              Partner with us to enhance your development capabilities. Contact
              us today to discuss your specific requirements and achieve optimal
              software development outcomes.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>Software Documentation and Consulting Services</h2>
            <p>
              We provide optimized solutions for our clients. Our experts offer
              guidance on UML, architectural patterns, architectural reviews,
              and creating UML diagrams. We excel in documenting systems,
              including user manuals and developer manuals, ensuring clear and
              comprehensive guidance for both end-users and developers. With our
              services, you can effectively communicate system architecture,
              design, and functionality, facilitating seamless collaboration and
              understanding. Partner with us to enhance your software
              documentation practices. Contact us today to discuss your specific
              requirements and achieve optimal documentation outcomes.
            </p>
          </div>
        </div>
        <div className={styles.block_figure}>
          <img src={RightObj1} alt="right-figure-01" />
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_figure}>
          <img src={LeftObj3} alt="left-figure-03" />
        </div>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>InfraTech Solutions</h2>
            <p>
              Our team of expert engineers designs and constructs network
              infrastructure tailored to meet the specific requirements,
              purposes, and processes of your company. We analyze your needs and
              goals to develop a customized solution that optimizes performance,
              scalability, and security. Additionally, we specialize in
              meticulously documenting the infrastructure, providing you with
              detailed reports and diagrams that enhance understanding and
              facilitate future maintenance and upgrades. With InfraTech
              Solutions, you can rely on our expertise to create a robust and
              efficient network infrastructure that aligns perfectly with your
              business objectives.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>InfraTech Solutions</h2>
            <p>
              Our team of expert engineers designs and constructs network
              infrastructure tailored to meet the specific requirements,
              purposes, and processes of your company. We analyze your needs and
              goals to develop a customized solution that optimizes performance,
              scalability, and security. Additionally, we specialize in
              meticulously documenting the infrastructure, providing you with
              detailed reports and diagrams that enhance understanding and
              facilitate future maintenance and upgrades. With InfraTech
              Solutions, you can rely on our expertise to create a robust and
              efficient network infrastructure that aligns perfectly with your
              business objectives.
            </p>
          </div>
        </div>
        <div className={styles.block_figure}>
          <img src={RightObj3} alt="right-figure-01" />
        </div>
      </div>
      <div className={styles.about_block}>
        <div className={styles.block_figure}>
          <img src={LeftObj1} alt="left-figure-01" className="w-full" />
        </div>
        <div className={styles.block_content}>
          <div className={styles.content_text}>
            <h2>Web scraping / data scraping</h2>
            <p>
              At our high-tech company, we offer exceptional tech consulting
              services that cater to the diverse needs of our clients. Among our
              wide range of offerings, our web scraping service stands out as a
              valuable solution for businesses seeking optimized data extraction
              from websites. With our expertise in web development, business
              solutions, tech management, architecture, and infrastructure
              solutions, our web scraping service ensures efficient and accurate
              extraction of relevant information for our clients. Harnessing
              advanced technologies and techniques, we provide a seamless and
              reliable web scraping experience, enabling businesses to gather
              critical data effortlessly. Trust us to deliver top-notch web
              scraping solutions that empower your organization with valuable
              insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
