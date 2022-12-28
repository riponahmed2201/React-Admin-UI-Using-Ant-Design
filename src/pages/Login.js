import React from 'react'
import Custominput from '../components/Custominput'

function Login() {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form>
          <Custominput type="text" label="Email address" id="email" />
          <Custominput type="password" label="Password" id="password" />
          <button className='border-0 px-3 py-2 text-white fw-bold w-100' style={{ background: "#ffd333" }} type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login