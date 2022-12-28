import React from 'react'
import Custominput from '../components/Custominput'

function Forgotpassword() {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please enter your registered email to get reset password mail.</p>
        <form>
          <Custominput type="text" label="Email address" id="email" />
          <button  className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'  style={{ background: "#ffd333" }} type="submit">Send Link</button>
        </form>
      </div>
    </div>
  )
}

export default Forgotpassword