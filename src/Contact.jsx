import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact = () => {
    return (
        <>


<div class="container-fluid bg-dark">
  <h2 class="text-center">contact Me</h2>
<div class="container bg-dark">
  <div class="row  mt-5  min-vh=100">
    <div class="col-md-2  mynum text-center">
    <button type="button" class="btn btn-secondary rounded-circle"><PhoneIcon/></button> <h2>8096921400</h2>
    </div>
    <div class="col-md-2  or text-center">
    <h2>OR</h2>
    </div>
    <div class="col-md-8 ">
      
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label mytext">NAME</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your name with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label mytext">EMAIL</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  
 
  <button type="submit" class="btn btn-outline-secondary">Submit</button>
</form>


    </div>
    </div>

<br />
<br /><br /><br /><br /><br /><br /><br /><br />
   








</div>


</div>



            
        </>
    )
}

export default Contact
