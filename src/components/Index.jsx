import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Index = () => {

 const [InputFied,changeInputField]=useState({
    "Title":"",
    "Description":"",
    "Price":"",
    "Property":"",
    "Location":"",
    "Bedrooms":"",
    "Bathrooms":""
 })

 const inputHandeler=(event)=>{
    changeInputField({...InputFied,[event.target.name]:event.target.value})
 }

 const readValue=()=>{
    console.log(InputFied)
    axios.post("http://127.0.0.1:8000/api/add/",InputFied).then(
       (response)=>{
alert(response.data.status)
       } 
    )
 }

  return (
    <div>
        <Header/>
       <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" name='Title' value={InputFied.Title} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Description</label>
                    <input type="text" className="form-control" name='Description' value={InputFied.Description} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Price</label>
                    <input type="text" className="form-control" name='Price' value={InputFied.Price} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Property</label>
                    <input type="text" className="form-control" name='Property' value={InputFied.Property} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Location </label>
                    <input type="text" className="form-control" name='Location' value={InputFied.Location} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Bedrooms</label>
                    <input type="text" className="form-control" name='Bedrooms' value={InputFied.Bedrooms} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Bathrooms</label>
                    <input type="text" className="form-control" name='Bathrooms' value={InputFied.Bathrooms} onChange={inputHandeler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={readValue} className="btn btn-success">ADD</button>
                </div>
                </div>
            </div>
        </div>
       </div> 
    </div>
  )
}

export default Index