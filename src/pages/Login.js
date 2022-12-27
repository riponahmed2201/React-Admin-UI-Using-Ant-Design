import React from 'react'
import Custominput from '../components/Custominput'

function Login() {
  return (
    <div className='py-5' style={{ background: "#ffd333" }}>
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-3'>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form>
          <Custominput type="text" placeholder="Email address" id="email" />
          <Custominput type="password" placeholder="Password" id="password" />
          <button className='border-0 px-3 py-2' style={{ background: "#ffd333" }}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login