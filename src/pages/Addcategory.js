import React from 'react'
import Custominput from '../components/Custominput'

function Addcategory() {
    return (
        <div>
            <h3 className='mb-4 title'>Add category</h3>
            <div className=''>
                <form action=''>
                    <Custominput type="text" label="Enter category" />
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default Addcategory