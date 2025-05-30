import React, { useState } from 'react';

import Slider from "react-slick";
import Image from "react-bootstrap/Image";
import Accordion from 'react-bootstrap/Accordion';




const Article=(props)=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
<div id="OurTeam" class="container-fluid">
  <h1>Our Team</h1>
  <div class="container">
      <div class="row">
          <div class="col-lg-12">
            {/* <h2>Medical Staff</h2> */}
            <Slider {...settings} className="slider-faculty">
      <div className="d-block">
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>MR.BYAS KUMAR <br /> FOUNDER</p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>DR PRADEEP KUMAR SUMAN  <br />CO-FOUNDER</p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>Mr VIVEK KUMAR  </p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p> ANJU KUMARI</p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>GOPAL KRISHNA</p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>MANJEET KUMAR</p>
      </div>
      <div>
      <Image className="d-block  img-fluid mx-auto w-50"  alt="Third slide" roundedCircle thumbnail/><p>ROHAN KUMAR</p>
      </div>
    </Slider>
                {/* <div class="slider slider-faculty">
                    <div><img class="d-block  img-fluid" src={img} alt="Third slide" /><p>Dr SANTOSH KUMAR<br/>PRINCIPAL </p></div>
					<div><img class="d-block  img-fluid" src={img} alt="Third slide" /><p>Mr AMIT PRAKASH<br/>Assistant Professor </p></div>
					<div><img class="d-block  img-fluid" src={img}alt="Third slide" /><p>Dr HARSH SINGH<br/>Assistant Professor </p></div>
					<div><img class="d-block  img-fluid" src={img} alt="Third slide" /><p>Dr ALOK KUMAR<br/>Assistant Professor </p></div>
					<div><img class="d-block  img-fluid" src={img} alt="Third slide" /><p>Dr MADAN LAL<br/>Assistant Professor </p></div>
					<div><img class="d-block  img-fluid" src="Content/Public/images/t6.png" alt="Third slide" /><p>Mr GURBACHAN SINGH<br/>Assistant Professor </p></div>
					
                  </div> */}
          </div>
          <div class="col-lg-12">
            {/* <h2>Non-Teaching Staff</h2> */}
                <div class="slider slider-non-faculty">
                    {/* <div><img class="d-block  img-fluid" src="Content/Public/images/nt1.png" alt="Third slide" /><p>Ms SUMAN <br/>Librarian</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt2.png" alt="Third slide" /><p>Ms SANJANA<br/>Head Clerk</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt3.png" alt="Third slide" /><p>Mr VIVEK KUMAR<br/>Office-Cum-Account Assistant </p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt4.png" alt="Third slide" /><p>Mr RAM KARAN<br/>Technical Assistant</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt5.png" alt="Third slide" /><p>Mr HARKESH KUMAR<br/>Lab Attendant</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt6.png" alt="Third slide" /><p>Mrs RAJNI<br/>SWEEPER</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt7.png" alt="Third slide" /><p>Mrs SUNITA<br/>Helper</p></div>
                    <div><img class="d-block  img-fluid" src="Content/Public/images/nt8.png" alt="Third slide" /><p>Mr AMIT KUMAR<br/>Store Keeper</p></div> */}
                </div>
          </div>
      </div>
  </div>
</div>
);
}

export default Article;

