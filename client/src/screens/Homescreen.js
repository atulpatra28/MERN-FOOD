import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFoods } from '../actions/foodActions'
import menuItems from '../menudata';
import Menu from '../components/Menu';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Homescreen() {

    const dispatch = useDispatch()

    const foodsstate = useSelector(state => state.getAllFoodsReducer)

    const { foods, error, loading } = foodsstate

    useEffect(() => {
        dispatch(getAllFoods())
    }, [])
    return (
        <div>
            <div className="row justify-content-center">


                {loading ? (<Loading/>) : error ? (<Error error="Something went wrong..."/>) : (

                    menuItems.map((item) => {
                        return (
                            <div className="col-md-3 m-3" key={item ._id }>
                                <div >
                                    <Menu items ={item} />
                                </div>
                            </div>
   

                        )
                    }))}





            </div>
        </div>
    );
}
