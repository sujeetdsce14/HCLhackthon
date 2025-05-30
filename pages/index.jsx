import Link from 'next/link';

import { userService } from 'services';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import Image from "react-bootstrap/Image";
import withReactContent from 'sweetalert2-react-content'
import { Layout, AddEdit } from 'components/contacts';
import { lazy, Suspense }from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Head from 'next/head';


const MySwal = withReactContent(Swal)






export default Home;

function Home() {
  const Article = lazy(() => import('./featuredArticle'));
  const blogs=[{
    slug:"javascript",
    title:"JavaScript",
    shortDescription:"JavaScript is an advanced programming language that makes web pages more interactive. Javascript is a fullstack language, so it can support both frontend and backend "
  },{
    slug:"nodejs",
    title:"NodeJs",
    shortDescription:"Node.js is an open source server environment. Node.js allows you to run JavaScript on the server."
  },{
    slug:"reactjs",
    title:"ReactJs",
    shortDescription:"React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components."
  },{
    slug:"nextjs",
    title:"NextJs",
    shortDescription:"Next.js enables you to create full-stack Web applications by extending the latest React. it is best for SEO"
  },{
    slug:"nestjs",
    title:"NestJs",
    shortDescription:"NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements "
  },{
    slug:"typescript",
    title:"TypeScript",
    shortDescription:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
  },
  {
    slug:"jest",
    title:"Jest",
    shortDescription:"Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar"
  },
  {
    slug:"data-structure-algorithms",
    title:"Data Structure & Algorithms",
    shortDescription:"Data Structures are the programmatic way of storing data so that data can be used efficiently. Almost every enterprise application uses various types of data "
  },
  {
    slug:"system-design",
    title:"System Design",
    shortDescription:"System design refers to the process of defining the architecture, modules, interfaces, data for a system to satisfy specified requirements"
  },
  {
    slug:"software-engineering",
    title:"Software Engineering",
    shortDescription:"Software engineering is the branch of computer science that deals with the design, development, testing, and maintenance of software applications."
  }
];
    return (
      <>
      <Head>
          
      <meta charset="utf-8" />
               
            
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <!-- Primary Meta Tags --> */}
<title>Learnings Made Easy</title>
<meta name="title" content="Learnings Made Easy" />
<meta name="description" content="Learnings Made Easy is online learning platform where content is created by expert" />
<meta name="keywords" content="Learnings Made Easy,learningsmadeeasy.in,Best Learning Place"/>
{/* 
<!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://learningsmadeeasy.in/" />
<meta property="og:title" content="Learnings Made Easy" />
<meta property="og:description" content="Learnings Made Easy is online learning platform where content is created by expert" />
<meta property="og:image" content="https://learningsmadeeasy.in/images/LearningsMadeEasy.jpeg" />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://learningsmadeeasy.in/" />
<meta property="twitter:title" content="Learnings Made Easy" />
<meta property="twitter:description" content="Learnings Made Easy is online learning platform where content is created by expert" />
<meta property="twitter:image" content="https://learningsmadeeasy.in/images/LearningsMadeEasy.jpeg" />
<meta name="twitter:site" content="@SUJEETK813098" />
<meta name="twitter:creator" content="@SUJEETK813098" />

{/* <!-- Meta Tags Generated with https://metatags.io --> */}

            <meta name="theme-color" content="#000000" />
   
      </Head>
       <div className='container-heading'>My Profile</div>  
        <div className="container-body">
            <Link href={`/about`}  className="btn btn-info me-1 card-design" underline="hover">
           <div className="d-block">
        <h1 className='rounded mx-auto d-block img-thumbnail'>SUJEET KUMAR</h1>
      <Image   width={100} height={100} className="rounded mx-auto d-block img-thumbnail" src='/images/SUJEET.jpeg'  alt="Third slide" roundedCircle thumbnail/>
       <h5>Click for More Detailed Profile Information</h5>
      </div>
      </Link>

    </div>
    

    <div className='container-heading'>Featured articles</div>  
      <div maxWidth="sm" className='container-body'>
            

        <Suspense fallback={<div>Loading...</div>}>
        <Article />
        </Suspense>
               
        </div>

        <div className='container-heading'>Article by Category</div>  
      <div maxWidth="sm" className='container-body'>
            

        <Suspense fallback={<div>Loading...</div>}>
        {/* <Article /> */}
        {blogs.map(blog =>

                                    
                  <Link href={`/category/${blog.slug}`} key={blog.slug} className="btn btn-info me-1 card-design" underline="hover">
                  <Card sx={{ maxWidth: 345 ,maxHeight:200}}>
                  <CardActionArea>

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                    {blog.shortDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  </Card>
                  </Link>

                  )}
        </Suspense>
               
        </div>
    </>
    );
}
