import React from 'react';
import Achcard from './Achcard';
import LinkIcon from '@material-ui/icons/Link';

const Achi = () => {
    return (
        <>
            <div class="container-fluid bg-dark ">
            <h2 class="text-center">Achievements</h2>

            <div class="container  bg-dark ">
  <div class="row ">
    <div class="col-md-6 ">

   <Achcard title="farmers Business Book" lang=".NET Framework(C#)" degree="MSC Project"
       desc="This application is about the communication betweeen the farmers and food processing company where farmers can buy seeds and fertilizers and the food processing company and general stores can buy crops from this website."
   />

      
    </div>
    <div class="col-md-6 mt-3 mt-md-0 ">
      


    <div class="card  bg-dark  rounded-3  " style={{maxwidth: "18rem"}}>
<div class="card-header mytext1">MSC Project</div>
<div class="card-body">
  <h5 class="card-title mytext text-muted">ShowPlants.com</h5>
  <p class="card-text mytext2">this is a website where you can sell your plants online and earn money.here there are various types of plants in our website like show plants and bonsai plants and herbal plants as well and you can also regester your self in website.</p>
  <p class="card-text mytext2"> Created Using   Django(Python)    <a href="https://kataram27.github.io/showplants-github.io/" ><button type="button" class="btn btn-outline-secondary rounded-pill"><LinkIcon/> Click Here</button></a>  </p>
 
</div>
</div>






    </div>
  </div>
  <div class="row ">
    <div class="col-md-6 mt-3 ">


  <Achcard title="Bhavans Complaint Box" lang="Android Studio(Java)" degree="BSC Project"
      desc="in order to convey our problems to college we have to write letter and keep in complaint box. in order to simplify task we have created the bhavans complaint box to digitally communicate with our college officials to convey our problems."
  />

      
    </div>
    <div class="col-md-6 mt-3">
      

<Achcard title="PortFolio" lang="React(JavaScript)" degree="MSC Project"
    desc="its is a Portfolio of my own where you can find all details about me and contact me.here you can see my skills and my achievements and you can also contact me by entering the details in form and you can also see my qualification in this website."
/>


    </div>
    
  </div>

<hr class="mytext"/>


<h1 class="display-6 mytext1 text-center">Additional Projects</h1>



<div class="row bg-light  bg-dark mt-3">
    <div class="col-md-12    bg-dark">


    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button bg-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5 class="mytext1">Created Two games(CubeSlide,JumpBall)</h5>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show bg-dark" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong class="mytext2">I have created two games namely  Cube Slide(which is a 3d game ) and Jump ball(which is a 2d game) using the language C# and while playing the game the resulution can be set manually.</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h5 class="mytext1">Published A Paper On Life saving System in Indian Railways</h5>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse bg-dark" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong class="mytext2">Published a paper on life saving System in indian raiways in International journal of advance research and engineering (IJARSE) and got an impact factor of 2.83/5</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <h5 class="mytext1">achieved Ranks in (MSC) Enternace Exams</h5>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse bg-dark" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong class="mytext2">Secured <h3 class="mytext3">3</h3> rank in sri venkateshwara university enterance test (SVUCET)  (TIRUPATI) for MSC. <br /> Secured <h3 class="mytext3">46</h3> rank in osmania university (OUCET) (HYDERABAD) for MSC.</strong>
      </div>
    </div>
  </div>

 
</div>

 





</div>
</div>


</div>
  
</div>
        </>
    )
}

export default Achi