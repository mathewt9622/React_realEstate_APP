import React, { useState } from 'react'

const Register = () => {

    const [InputField, changeInputField] = useState(

        {
            "Title":"",
            "Description":"",
            "Price":"",
            "Property":"",
            "Location":"",
            "Bedrooms":"",
            "Bathrooms":""
        }


    )
    const inputHandler = (event) => {
        changeInputField({ ...InputField,[event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(InputField)
    }


  return (
    <div>
         <div className="container">
        <div className="row">
            <div className="row g-3"></div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" name='Title' value={InputField.Title} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Description</label>
                    <input type="text" className="form-control" name='Description' value={InputField.Description} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Price</label>
                    <input type="text" className="form-control" name='Price' value={InputField.Price} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Property</label>
                    <input type="text" className="form-control" name='Property' value={InputField.Property} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Location </label>
                    <input type="text" className="form-control" name='Location' value={InputField.Location} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Bedrooms</label>
                    <input type="text" className="form-control" name='Bedrooms' value={InputField.Bedrooms} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Bathrooms</label>
                    <input type="text" className="form-control" name='Bathrooms' value={InputField.Bathrooms} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <p class="text-center text-muted mt-5 mb-0">Already an account? <a href="/login"
                                    class="fw-bold text-body" ><u>Login</u></a></p>
                                <button onClick={readValue} className="btn btn-success">Register</button>

                </div>
                </div>
            </div>
        </div>
       </div> 

    </div>
  )
}

export default Register