import React from 'react';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


const Home = () => {
    return (
        <>
        <div class="container-fluid bg-dark">       
          
          <div class="container bg-dark">
  <div class="row  min-vh-100 align-items-center align-content-center">
    <div class="col-md-6 ">
      <h3 class="text-light">hai,</h3>
      <h1 class="text-light">I'am</h1> <h1 class="hai">K.Sanjay</h1>
      <h5 class="text-light"> I'am Web Developer</h5>
      <h5 class="text-light">From Hyderabad</h5>
    </div>
    <div class="col-md-6  mt-md-0 mt-5 text-center">
    
    <img src={process.env.PUBLIC_URL + "/Mypic.jpg"} class="img-fluid rounded-pill" alt="..."/><br /><br/>
    <a href="https://www.facebook.com/kataram.sanjay"><button type="button" class="btn btn-outline-secondary rounded-pill but"><FacebookIcon/></button></a> <a href="https://www.instagram.com/sanjay.cena/"><button type="button" class="btn btn-outline-secondary rounded-pill but"><InstagramIcon/></button></a> <a href="https://www.linkedin.com/in/kataram-sanjay-6b786b202/"><button type="button" class="btn btn-outline-secondary rounded-pill but"><LinkedInIcon/></button></a> 
      </div>
    </div>
    
  </div>

</div> 
          

        </>
    )
}

export default Home
