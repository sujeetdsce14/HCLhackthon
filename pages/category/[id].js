import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Spinner } from 'components';
import { Layout } from 'components/users';
import { categoryService,alertService } from 'services';

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
import { useRouter } from 'next/router';
import Head from 'next/head';
export default Index;

function Index() {

  const Article = lazy(() => import('./article'));

  const router = useRouter();
  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
      // const  {id}  = router.query;
      // console.log("ppppppppppppppppppppppppppppppp"+JSON.stringify(id));
      
      const url= router.asPath;
      const pathSegments = url.split('/');

      // Get the last parameter (last element in the pathSegments array)
      const category= pathSegments[pathSegments.length - 1];
    console.log("cat............................"+category)
      // fetch user and set default form values if in edit mode
     categoryService.getAllByCategory(category)
          .then(x => setBlogs(x))
          .catch(alertService.error)
  }, [router]);


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
