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




export default Article;

function Article() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        articleService.getAllFeatured().then(x => setBlogs(x));
    }, []);



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
