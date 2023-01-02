import React from 'react'
import Custominput from '../components/Custominput'

function Addbrand() {
    return (
        <div>
            <h3 className='mb-4 title'>Add brand</h3>
            <div className=''>
                <form action=''>
                    <Custominput type="text" label="Enter blog category" />
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Brand</button>
                </form>
            </div>
        </div>
    )
}

export default Addbrand