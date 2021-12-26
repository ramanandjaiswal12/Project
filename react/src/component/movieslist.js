import axios from "axios"
import React, { useEffect, useState, Component } from "react";
import Card from 'react-bootstrap/Card'

import image from "./image.png"

import './App.css';

function MoviesList() {
    const [data, setData] = useState([])
    useEffect(() => {

        axios.get('/movies-list', {

        })
            .then((response) => {

                console.log(response.data)
                setData(response.data)




            })



    }, []);



    return (

        <div className="main1" >

            <Card style={{ width: '18rem' }}>
                <Card.Body className="card-body">

                    {data.map((dataIn) =>
                        <div className="main-header">
                            {dataIn.details.map((details) =>

                                <div className="main-header1">
                                    < img className='img' src={image} style={{ width: "100%" }} />
                                    <br></br>
                                    <span>{dataIn.name}</span>
                                    <span style={{ padding: "70px" }}>{details.rating}</span>
                                    <span>{details.date}</span>


                                </div>
                            )
                            }
                        </div>




                    )
                    }


                </Card.Body>
            </Card>

        </div >
    )
}

export default MoviesList