import React from 'react'

const Card = (props) => {
    return (
        <>
            <div class="card mt-3 bg-dark mycard">
  <img src={props.src} class="card-img-top img-fluid rounded-3" alt="Image Not Found"/>
  <div class="card-body text-center">
    <h5 class="mytext">Degree -</h5><h6 class="mytext1">{props.degree}</h6>
    <h5 class="mytext">Institution -</h5><h6 class="mytext1">{props.Inst}</h6>
    <h5 class="mytext">Percentage -</h5><h6 class="mytext1">{props.perc}</h6>
    <h5 class="mytext">Year Of Passing -</h5><h6 class="mytext1">{props.yop}</h6>
  </div>
</div>
        </>
    )
}

export default Card
