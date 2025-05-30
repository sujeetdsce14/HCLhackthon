import Link from 'next/link';

import { userService } from 'services';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Layout, AddEdit } from 'components/contacts';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Head from 'next/head';


const MySwal = withReactContent(Swal)






export default Home;

function Home() {
    const [enteredName,setEnteredName]=useState('');
    const [enteredEmail,setEnteredEmail]=useState('');
    const [enteredPhone,setEnteredPhone]=useState('');
    const [enteredQuery,setEnteredQuery]=useState('');

    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value)
    };
    const emailChangeHandler=(event)=>{
        setEnteredEmail(event.target.value)
    };
    const phoneChangeHandler=(event)=>{
        setEnteredPhone(event.target.value)
    };
    const queryChangeHandler=(event)=>{
        setEnteredQuery(event.target.value)
    };

    const iconStyle = {
      color: 'blue', // Change the color
      fontSize: '36px', // Change the font size
    };

    const submitHandler= async (event)=>{
        event.preventDefault();
        const formData={
            name:enteredName,
            email:enteredEmail,
            phone:enteredPhone,
            query:enteredQuery
        }

    console.log(formData)
    const response =await fetch('/api/contacts',{
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json',
        }
    });
   const data= await response.json();
   if(data.length!==0){

            MySwal.fire({
                title: <p>Thanks for your trust , we will get back to you shortely</p>,
                icon:'success',
                // didOpen: () => {
                // // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                // //MySwal.showLoading()
                // },
            }).then(() => {
                return //MySwal.fire(<p>Shorthand works too</p>)
            })
   }
   console.log(data);
   setEnteredName('');
   setEnteredEmail('');
   setEnteredPhone('');

    };
    return (
      <>
                  <Head>

<meta charset="utf-8" />
          <title>Learnings Made Easy/contact</title>
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
      name="description"
      content="phone number:+91-8130984653,email:learningsmadeeasy@gmail.com"
      />
      <meta name="keywords" content="contact sujeet kumar,+918130984653, software development"/>

</Head>
      <div className="container-body">
           
            <div className="conatct">
   
            {/* <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={enteredEmail} onChange={emailChangeHandler} placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" value={enteredPhone} onChange={phoneChangeHandler} placeholder="Enter phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicQuery">
        <Form.Label>Query</Form.Label>
        <Form.Control as="textarea" value={enteredQuery} onChange={queryChangeHandler} rows={4} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

            
          
              <Layout className='contact-form'>
              <AddEdit />
              </Layout>
              
              <div className='contact-details'>
                <h3>Contact Detail</h3>
                <h5> <a href="tel:+918130984653" className='text-color'><CallIcon style={iconStyle} />+91-8130984653</a></h5>
                <h5><a href="mailto:learningsmadeeasy@gmail.com" className='text-color'><EmailIcon style={iconStyle} />learningsmadeeasy@gmail.com</a></h5>

              </div>
        </div>
        </div>
        </>
    );
}
