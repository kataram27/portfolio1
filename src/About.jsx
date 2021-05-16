import Card from './Card';
const About = () => {
    return (
        <>
        
            <div class="container-fluid bg-dark">
            <h2 class="text-center">Qualification</h2>
        <div class="container bg-dark">
  <div class="row  bg-dark">
    <div class="col-md-4  bg-dark">
    <Card src="https://static.toiimg.com/photo/56236830.cms" degree="MSC(Computer Science)" Inst="Osmania University" perc="8.14" yop="2020"/>
  
    </div>
    <div class="col-md-4  bg-dark">
    <Card src="https://www.vidyavision.com/CollegeUploads/Photos/2019-19-8-18-18-33_Bharatiya%20Vidya%20CLG.jpg" degree="BSC(Computer Science)" Inst="Bhavans Viveknanda College" perc="9.0" yop="2018"/>
  
    </div>
    <div class="col-md-4  bg-dark">
    <Card src="https://www.getmyneed.com/images/institutes/d831e48916f9834e83d9d25ea5d9673a.jpg" degree="Intermediate(MPC)" Inst="Narayana Junior College" perc="8.6" yop="2015"/>
    </div>
  </div>
  
  <div class="container bg-dark">
  <div class="row">
    <div class="col-md-4 bg-dark">
    <Card src="https://yellowslate.com/blog/wp-content/uploads/2018/12/Featured.jpg" degree="10th" Inst="Dwaraka High School" perc="8.3" yop="2013"/>
    </div>
    <div class="col-md-8 bg-dark">
      
    </div>
  </div>
</div>
</div>
           </div> 
        </>
    )
}

export default About    
