import React from 'react'
import Custominput from '../components/Custominput'

function Addcolor() {
    return (
        <div>
            <h3 className='mb-4 title'>Add color</h3>
            <div className=''>
                <form action=''>
                    <Custominput type="color" label="Enter color" />
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Color</button>
                </form>
            </div>
        </div>
    )
}

export default Addcolor