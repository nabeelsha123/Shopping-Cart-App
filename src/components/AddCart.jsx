import React from 'react'
import Navbar from './Navbar'
const AddCart = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                
                <div className="row">
                    <div class="card">
                        <div class="card-body">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Product Name</b></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Image</b></label>
                                        <input type="file" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label"><b>Description</b></label>
                                        <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Price</b></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Rating</b></label>
                                        <br />
                                        <label htmlFor="" className="form-check-label">0</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">1</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">2</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">3</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">4</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">5</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Brand</b></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Manufacturing Date</b></label>
                                        <input type="date" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Expiry Date</b></label>
                                        <input type="date" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label"><b>Dealer Name</b></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCart