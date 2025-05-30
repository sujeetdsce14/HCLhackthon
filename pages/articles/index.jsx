import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Spinner } from 'components';
import { Layout } from 'components/users';
import { articleService } from 'services';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { lazy, Suspense }from 'react';


export default Index;

function Index() {
    const [blogs, setBlogs] = useState(null);
    const Article = lazy(() => import('./article'));
    useEffect(() => {
        articleService.getAll().then(x => setBlogs(x));
    }, []);



    return (
      <>
       
      <div maxWidth="sm" className='container-body'>
               

        <Suspense fallback={<div>Loading...</div>}>
        <Article />
        </Suspense>
               
        </div>
       </>
  
    );
}
