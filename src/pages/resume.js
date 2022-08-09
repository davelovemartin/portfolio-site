import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ResumePage = () => (
  <Layout title="Resumé">
    <ul>
      <li>
        <h2>Lead DesignOps &amp; Creative Technologist - Immersive Labs</h2>
        <p>Oct 2021 - Present</p>
        <ul>
          <li>Built hi-fidelity prototypes for usability testing.</li>
          <li>Line management, mentoring and coaching.</li>
          <li>Stakeholder engagement.</li>
        </ul>
      </li>
      <li>
        <h2>Senior Frontend Engineer - Statsbomb</h2>
        <p>Jul 2021 - Oct 2021</p>
        <ul>
          <li>
            Created data visualisations for a React application. Head hunted by
            Immersive Labs.
          </li>
        </ul>
      </li>
      <li>
        <h2>Senior Creative Technologist - cxpartners</h2>
        <p>Jan 2018 - Jul 2021</p>
        <p>
          As a full stack developer with a great understanding of the creative
          process, a love of ideation sessions and an empathy-led approach to
          co-design, I created immersive realistic prototypes to uncover insight
          from user testing, made web pages accessible and crafted cleanly-coded
          web applications.
        </p>
        <p>
          cxpartners inspired me to explore and push beyond the boundaries of my
          comfort zone. I gave conference talks, ran workshops with clients and
          stakeholders, conducted user research interviews and much more
          besides. I championed inclusive design, forged a new role as Creative
          Technologist and gained three promotions in as many years.
        </p>
        <p>In my time at cxpartners, I also wrote these blog posts:</p>
        <ul>
          <li>
            <a href="https://www.cxpartners.co.uk/our-thinking/digital-service-design-and-the-creative-technologist">
              Digital Service Design and the Creative Technologist; tricks of
              the trade
            </a>
            ,
          </li>
          <li>
            <a href="https://www.cxpartners.co.uk/our-thinking/the-very-definition-of-a-creative-technologist">
              The very definition of a Creative Technologist
            </a>
            ,
          </li>
          <li>
            <a href="https://www.cxpartners.co.uk/our-thinking/de-risk-your-digital-transformation-with-this-one-simple">
              De-risk your Digital Transformation with this one simple service
            </a>
            ,
          </li>
          <li>
            <a href="https://www.cxpartners.co.uk/our-thinking/designing-the-perfect-user-experience">
              Designing the perfect user experience
            </a>
            ,
          </li>
        </ul>
      </li>
      <li>
        <h2>Founder - Call of the Brave</h2>
        <p>May 2014 - Dec 2017</p>
        <p>
          Call of the Brave started as an idea from a university project - what
          if t-shirt designers were able to upload and share their designs and
          get enough pre-orders to make screen-printing viable? Any successful
          designs would be printed on ethical t-shirts and a percentage of the
          profit would go to worthy causes.
        </p>
        <p>
          I launched an initial MVP and iterated on the product using the skills
          I learned in my Web Design BSc.
        </p>
        <p>
          I raised around £15k in investment/grants, took part in the Web Start
          Bristol incubator, School for Social Entrepreneurs and based a lot of
          my Innovation and Applied Entrepreneurship MSc work on working on the
          business.
        </p>
        <p>
          I employed students from University of Bristol, organised marketing
          initiatives and negotiated sales and contracts.
        </p>
        <p>
          I stepped away from Call of the Brave after a few years after
          realising I was unable to maintain a healthy work-life balance running
          the business full-time.
        </p>
      </li>
      <li>
        <h2>Professional development career break</h2>
        <p>Sep 2011 - Sep 2017</p>
        <p>
          I took a career break and took courses in Project Management, LEAN Six
          Sigma and a Foundation Degree in Internet Studies. I then went to the
          University of the West of England, Bristol where I acheived a First in
          Web Design BSc (Hons).
        </p>
        <p>
          I fully immersed myself in the world of Web Design and to support my
          studies, I undertook freelance work for individuals, small businesses
          and agencies.
        </p>
        <p>
          I became a Peer Assisted Learner - mentoring students in the year
          below. Later, I became an associate lecturer and ran a short-course
          coding bootcamp.
        </p>
        <p>
          The university also supported me through their Student Enterprise
          Scheme to explore my start-up idea.
        </p>
        <p>
          I followed my undergraduate degree with a Masters in Innovation and
          Applied Entrepreneurship (MSc).
        </p>
      </li>
      <li>
        <h2>Assistant Manager - Lloyds Banking Group</h2>
        <p>Mar 2007 - Sep 2011</p>
        <p>
          I ensured the integrity of the bank's accounts by performing key
          Sarbanes Oxley controls (balance sheet reconciliations) between the
          statutory accounts (SAP) and the customer banking systems.
        </p>
        <p>
          The role required using SQL to interrogate customer account data
          providing insight to business analysts and management accountants.
        </p>
        <p>
          During my time at Lloyds, I used LEAN process improvement methods to
          optimise our teams' work and Visual Basic skills to automate manual
          processes in Excel.
        </p>
        <p>
          I left Lloyds to start full-time education but was rehired as a
          contractor to work on the merger of Halifax Bank of Scotland systems
          due to my knowledge of systems interfaces and SQL.
        </p>
      </li>
      <li>
        <h2>Various</h2>
        <p>Jun 1997 - Sep 2007</p>
        <p>
          Held a variety of both permanent and contract roles where I utilised
          my abilty to create and automate spreadsheets. Employers included:
          AXA, London Life, and Bristol City Council.
        </p>
      </li>
    </ul>
  </Layout>
);

export default ResumePage;

export const Head = ({ data, location }) => (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content={data.site.siteMetadata.description} />
    <meta name="twitter" content={data.site.siteMetadata.twitter} />
    <meta name="twitter:url" content={`${location.pathname}`} />
  </>
);

export const query = graphql`
  query ResumeQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        siteUrl
      }
    }
  }
`;
