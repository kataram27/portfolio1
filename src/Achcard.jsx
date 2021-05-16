import React from 'react'

const Achcard = (props) => {
    return (
        <>
            
            <div class="card  bg-dark  rounded-3  " style={{maxwidth: "18rem"}}>
  <div class="card-header mytext1">{props.degree}</div>
  <div class="card-body">
    <h5 class="card-title mytext text-muted">{props.title}</h5>
    <p class="card-text mytext2">{props.desc}</p>
    <p class="card-text mytext2"> Created Using   {props.lang}</p>
   
  </div>
</div>


        </>
    )
}

export default Achcard;


