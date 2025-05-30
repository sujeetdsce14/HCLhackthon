import Link from 'next/link';
import { useState, useEffect } from 'react';
//import Image from 'next/image'
import Image from "react-bootstrap/Image";
import { Spinner } from 'components';
import Accordion from 'react-bootstrap/Accordion';
import Head from 'next/head'


export default Index;

function Index() {

 


    return (
      <>
           <Head>

<meta charset="utf-8" />
          <title>Learnings Made Easy/About</title>
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="description"
      content="Analytical, highly adaptable software developer with 7 years of experience developing, deploying and evaluating software while improving product quality"
      />
      <meta name="keywords" content="ABOUT SUJEET KUMAR, BEST SOFTWARE ENGINEER"/>

</Head>
      <div className='container-about'>
      <div className="d-block">
        <h1 className='rounded mx-auto d-block img-thumbnail'>SUJEET KUMAR</h1>
      <Image   width={100} height={100} className="rounded mx-auto d-block img-thumbnail" src='/images/SUJEET.jpeg'  alt="Third slide" roundedCircle thumbnail/>
      </div>
      <Accordion defaultActiveKey={['0']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header>CAREER SUMMARY</Accordion.Header>
        <Accordion.Body>
            
            <ul>

            <li> Currently working as Senior Software Engineer at Amazon Web Services, designing and developing an Employee Engagement Portal from scratch using the MERN stack.</li>
            <li>Skilled troubleshooter with understanding of cloud technologies and messaging systems.</li>
            <li> Proficient in JavaScript and TypeScript, with additional knowledge in Python, SQL, NoSQL, and various databases such as MySQL and MongoDB.</li>
            <li>Experienced in UI development using HTML, CSS, Bootstrap, Material UI, React-Bootstrap, and Sweet-alert.</li>
            <li>Proven track record in developing scalable infrastructure, implementing DevOps methodologies, and driving test automation initiatives to improve software quality & efficiency.</li>
            <li>Implemented social share and social feed functionality for the Microsoft Partner Innovation Portal, increasing user engagement and brand visibility.</li>
            <li>Led a team of subordinate members, mentoring and guiding them to achieve project goals and deliver high-quality software solutions.</li>
            <li>Received customer appreciation for exceptional problem-solving skills and resolution of technical issues in a timely manner.</li>
            <li> Achieved reduction in deployment time by implementing CI/CD pipelines and leveraging cloud technologies such as AWS DynamoDB, AWS Lambda, and AWS CloudWatch.</li>
  <li>Analytical, highly adaptable software developer with 7 years of experience developing, deploying and evaluating software while improving product quality.</li>
  <li>Skilled in Developing Highly Scalable Infrastructure, DevOps and Agile Methodologies, test plan development, execution, and test automation.</li>
  <li>Skilled troubleshooter continually focused on identifying,isolating and resolving technical issues.</li>
  <li>Strong knowledge cloud technologies and messaging system.</li>
  <li>Strong understanding of DSA and MERN stack.</li>
  <li>Experience in Mentoring Sub-ordinate Team member.</li>
       </ul>
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>SKILLS</Accordion.Header>
        <Accordion.Body>
     
        <ul>
  <li>Programming: JavaScript, TypeScript, MERN Stack (MongoDB, Express.js, React.js, Node.js), Nest.Js, Next.Js, Python, SQL, NOSQL                                                                                                          </li>
  <li>Cloud Technologies: AWS DynamoDB, AWS Lambda (Serverless), AWS CloudWatch, AWS Kinesis, AWS EC2, AWS S3, and AWS Elastic Search, Azure</li>
  <li>DevOps Tools: Git and Jenkins</li>
  <li>Testing Applications: Jest  </li>
  <li>Agile Management Tool: Jira, Azure DevOps</li>
  <li>Additional Skills:Python,Java and Spring Boot</li>
  <li>Operating Systems: Linux, Windows</li>
</ul>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>EDUCATION</Accordion.Header>
        <Accordion.Body>
        <ul>
       <li>Master of Technology (Digital Communication & Network Engineering) Dayananda Sagar College of Engineering, Bangalore       75%                2010 – 2012</li>
       <li>Bachelor of Technology ( Electronics & Communication Engineering )                                                          60%                2006- 2010</li>
          </ul>
     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>EXPERIENCE</Accordion.Header>
        <Accordion.Body>
        <ul>
            <h5> Senior Software Engineer,  December 2022 –Present                                                                               </h5>
            <h5> Amazon Web Service –Bangalore, Karnataka</h5>  
            <li> Design & Development of AWS Employee Engagement Portal from scratch using MERN</li>   
            <li> Code optimization and unit testing for another Portal API using NestJs & Typescript</li>   
            <li> Documenting software solutions through flowcharts, layouts, diagrams, charts, code comments, and clear code</li>   
            <li> API design, development and deployment using Python, JavaScript & JavaScript framework</li>   
            <li> UI development and integration into backend API using JavaScript</li>   
            </ul>
            <ul>
            <h5>Senior Software Engineer, Research and Development February 2022 – June 2022</h5>   
            <h5> One Trust –Bangalore, Karnataka</h5>   
            <li>Providing information related to software bugs & defects by collecting, analyzing, and summarizing development & 
                service issues and rendering assistance in troubleshooting the same</li>   
            <li>Development of new feature in the Portal which include UI & API development using JavaScript</li>   
            <li>Creating company corporate portal using JavaScript & NextJs</li> 
            </ul>
            <ul>
            <h5> Senior Software Engineer, Mindtree Limited April 2020 – February 2022</h5>   
            <h5>  Microsoft –Bangalore, Karnataka</h5>   
            <li> Design & Development of Microsoft Partner Innovation Portal</li>   
            <li> Social share implementation of Facebook, LinkedIn & Twitter</li>   
            <li> Social Feed implementation of Twitter</li>   
            <li> Implementation of unit testing using JEST, identification of bugs and resolving the bugs</li> 
            </ul>
            <ul>  
            <h5> Software Engineer , Research and Development July 2019 – March 2020</h5>   
            <h5>  Namaste Credit(Opendoors Fintech Pvt Ltd) –Bangalore, Karnataka</h5>   
            <li>  Design and Development of Insurance Portal,</li>   
            <li>  Documenting software solutions through flowcharts, layouts, diagrams, charts, code comments.</li>   
            <li>  Unit Testing using JEST , identifying bugs and resolving bugs</li>   
            </ul>
            <ul>
            <h5> Software Engineer , Research and Development Feb 2016 – July 2019</h5>   
            <h5> Innovation System Plus –Bangalore, Karnataka</h5>   
            <li>  Design and development of company corporate portal</li>   
            <li>  API Design, Development & Deployment</li>   
            <li>  SMS, EMAIL & Payment Gateway Integration into Portal</li>   
            <li>  Maintenance of corporate portal and developing new feature into the portal</li>   
            <li>  Deployment of developed software into AWS server using cost effective way</li>  
            </ul>
            <ul> 
            <h5> Freelance Software Engineer , Research and Development JUN 2022 – Dec 2022</h5>   
            <h5>  CDSCO (Ministry of Health and Family Welfare GOI) -INDIA</h5>   
            <li> Design and development of CDSCO Employee Engagement portal using MERN from scratch</li>   
            <li> API Design, Development & Deployment</li>   
            <li> UI development and backend API integration using JavaScript</li>   
            <li> Tracking employee performance</li>   
            </ul>
            <ul>
            <h5> Freelance Software Engineer JUN 2013 – Feb 2016</h5>   
            <li> Design and development of Various client Portal</li>   
            <li> API Design, Development & Deployment</li>   
            <li> UI development and backend API integration</li>   
            </ul>
   
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>TRAINING/PROJECT/INTERNSHIP</Accordion.Header>
        <Accordion.Body>
        <ul>
<h5> Project Trainee, Research and Development 2011 –2012                                                                                 </h5>
<h5> ISRO Satellite Centre(ISAC) –Bangalore, Karnataka</h5>
    <li>Design & Development of Proximity-1 Protocol of Chandrayaan-2</li>
    <li>Documenting software and hardware solutions through flowcharts, layouts, diagrams, charts, code comments,and clear code</li>
</ul><ul>
<h5>Project Trainee, Research and Development 2009 –2010</h5>
<h5>Tata Teleservice Limited –Bangalore, Karnataka</h5>
<li>RF Planning and optimization of CDMA (2G/3G) Network</li>
</ul>
     
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>AWARD/ACHIEVEMENT</Accordion.Header>
        <Accordion.Body>
        <ul>
<li> Received Gold Medal as school topper in 10th standard including 90% in Mathematics and also 95% in Advance Mathematics                                                                                                  </li>
<li> A-Team Awarded for Displaying Exemplary Team sprit & Expert Thinking by Mindtree Limited</li>
</ul>
     
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    
    </div>
       </>
  
    );
}
