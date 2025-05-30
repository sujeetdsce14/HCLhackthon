import Link from 'next/link';
import { useState, useEffect } from 'react';

import { Spinner } from 'components';
import { Layout } from 'components/users';
import { categoryService ,alertService} from 'services';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Container } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { Category } from '@mui/icons-material';
import Head from 'next/head';






export default Article;

function Article() {
    const router = useRouter();
    const [blogs, setBlogs] = useState(null);
    console.log(blogs)

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

     
                {blogs && blogs.map(blog =>

                   
                    <Link href={`/articles/${blog.id}`} key={blog.id} className="btn btn-info me-1 card-design" underline="hover">
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
                     {!blogs &&
                    <tr>
                        <td colSpan="4">
                            <Spinner />
                        </td>
                    </tr>
                }
                {blogs && !blogs.length &&
                    <tr>
                        <td colSpan="4" className="text-center">
                            <div className="p-2">No Users To Display</div>
                        </td>
                    </tr>
                }
         
       </>
  
    );
}
