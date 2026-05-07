import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Slidbar = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        try {
            axios
                .get('https://dummyjson.com/products/category-list')
                .then(function (response) {
                    console.log(response);
                    setData(response.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        } catch (error) {
            console.log(error)
        }
    }, []);
    return (
        <div className='main-sidebar'>
            <ul className='side-main p-0 m-0'>
                {
                    data?.map((item, index) => {
                        return (
                            <li key={index} className='side-menu'>
                                <a  className='nav-link cat-item '>
                                    {item}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Slidbar