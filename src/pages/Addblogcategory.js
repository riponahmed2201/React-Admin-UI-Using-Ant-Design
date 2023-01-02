import React from 'react'
import Custominput from '../components/Custominput'

function Addblogcategory() {
    return (
        <div>
            <h3 className='mb-4 title'>Add blog category</h3>
            <div className=''>
                <form action=''>
                    <Custominput type="text" label="Enter blog category" />
                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Blog Category</button>
                </form>
            </div>
        </div>
    )
}

export default Addblogcategory