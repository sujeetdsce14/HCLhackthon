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


export default BlogDetail;


 
function BlogDetail(){
    const router = useRouter();
    const [blogs, setBlogs] = useState(null);
    //
    // { id } = useParams();

    useEffect(() => {
        const { id } = router.query;
        console.log("hhhhhhhhhhhhhh"+JSON.stringify(id))
        articleService.getById(id).then(x => setBlogs(x));
    }, [router.query.id]);

;

    return (
      <>
      
               

                  
                    
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                   
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {blogs?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                       {blogs?.shortDescription}
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
