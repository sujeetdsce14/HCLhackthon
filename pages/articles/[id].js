import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom';
import { Spinner } from 'components';
import { Layout } from 'components/users';
import { articleService } from 'services';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Head from 'next/head';


export default BlogDetail;


 
function BlogDetail(){
    const router = useRouter();
    const [blogs, setBlogs] = useState(null);
    const [urls, setUrls] = useState(null);
    //
    // { id } = useParams();

    useEffect(() => {
      const url= router.asPath;
      setUrls(url);
        const { id } = router.query;
        console.log("hhhhhhhhhhhhhh"+JSON.stringify(id))
        articleService.getById(id).then(x => setBlogs(x));
    }, [router.query.id]);

;

    return (
      <>
                             <Head>
                              

<meta charset="utf-8" />
          <title>Learnings Made Easy </title>
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="description"
      content={blogs?.shortDescription}
      />
      <meta name="keywords" content={blogs?.title}/>
      {/* meta tag for linkedin & facebook */}
      <meta property='og:title' content={blogs?.title}/>
      <meta property='og:image' content="https://learningsmadeeasy.in/images/LearningsMadeEasy.jpeg" />
      <meta property='og:description' content={blogs?.shortDescription}/>
      <meta property='og:url' content={urls} />
      <meta property="og:type"               content="articles" />
       {/* meta tag for facebook */}
       <meta name="twitter:card" content={blogs?.title}/>
      <meta name="twitter:site" content="@SUJEETK813098" />
      <meta name="twitter:creator" content="@SUJEETK813098" />

</Head>
               
      <div maxWidth="sm" className='container-body'>
                  
                    
                    <Card >
                    <CardActionArea>
                   
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <pre>{blogs?.title}</pre>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                       <pre>{blogs?.shortDescription}</pre>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                      <pre>{blogs?.longDescription}</pre> 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                 
                  
            
                {!blogs &&
                    <tr>
                        <td colSpan="4">
                            <Spinner />
                        </td>
                    </tr>
                }
            
       </div>
       </>
  
    );
}
