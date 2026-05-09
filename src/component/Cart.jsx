import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const orders = useSelector((state) => state.cart)
    console.log(orders)

   

    return (
        <div className='container'>
            <div className='text-center'>
                <table className="table table-danger table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>No.</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Qty</th>
                            <th scope='col'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.cartData.map((item, index) => {
                                return <tr key={index}>
                                    <th className='col-1' scope="row">{index + 1}</th>
                                    <td className='col-2'>
                                        <div className=' p-2'>

                                            <img src={item.thumbnail} className='img-fluid w-50' alt="" />

                                        </div>
                                    </td>
                                    <td className='col-3'>{item.title}</td>
                                    <td className='col-2'>1</td>
                                    <td className='col-2'>${Math.round(item.price)}</td>
                                    {/* <td>{orders.amount}</td>
                                   <td>{orders.c_gst_9}</td>
                                   <td>{orders.s_gst_9}</td>
                                   <td>{orders.Total}</td> */}

                                </tr>


                            })
                        }

                        <tr>
                            <td colSpan={4}>Amount </td>
                            <td ><b> ${orders.amount}</b></td>
                        </tr>
                        <tr>
                            <td colSpan={4}>C-GST% </td>
                            <td><span>${orders.c_gst_9}</span></td>
                        </tr>
                        <tr>
                            <td colSpan={4}> S-GST% </td>
                            <td><span>${orders.s_gst_9}</span></td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Total </td>
                            <td><b>  ${orders.Total}</b></td>
                        </tr>
                        <tr>
                            <td colSpan={4}><b>Total in INR</b> </td>
                            <td><b>   ₹{orders.inr}</b></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Cart;