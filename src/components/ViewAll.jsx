import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchDataFromApi = () => {
        axios.get("https://fakestoreapi.com/products").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchDataFromApi() }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="card">
                            <div class="card-body">
                                <div className="row g-3">
                                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col"><b>ID</b></th>
                                                    <th scope="col"><b>Title</b></th>
                                                    <th scope="col"><b>Price</b></th>
                                                    <th scope="col"><b>Description</b></th>
                                                    <th scope="col"><b>Category</b></th>
                                                    <th scope="col"><b>Image</b></th>
                                                    <th scope="col"><b>Rating</b></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data.map(
                                                        (value, index) => {
                                                            return <tr>
                                                                <th scope="row">{value.id}</th>
                                                                <td>{value.title}</td>
                                                                <td>{value.price}</td>
                                                                <td>{value.description}</td>
                                                                <td>{value.category}</td>
                                                                <td>{<img src={value.image} style={{ width: 100, height: 100 }} />}</td>
                                                                <td>{value.rating.rate} ({value.rating.count} reviews)</td>
                                                            </tr>
                                                        })
                                                }
                                            </tbody>
                                        </table>
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

export default ViewAll