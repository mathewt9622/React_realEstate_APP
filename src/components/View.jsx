import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const View = () => {

    const [data,changeData]=useState([])


const fetchData=()=>{
    axios.post("http://127.0.0.1:8000/api/view/").then(
        (response)=>{
            changeData(response.data)
        }
    )
}

useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="row g-3"></div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">

                        {data.map(
                            (value,Index)=>{
                                return<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


<div class="card" >
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Title:{value.Title}</li>
    <li class="list-group-item">Desceiption:{value.Description}</li>
    <li class="list-group-item">Price:{value.Price}</li>
    <li class="list-group-item">Property:{value.Property}</li>
    <li class="list-group-item">Location{value.Location}</li>
    <li class="list-group-item">Bedrooms{value.Bedrooms}</li>
    <li class="list-group-item">Bathrooms:{value.Bathrooms}</li>
  </ul>
</div>


                                </div>
                            }
                        )}
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View