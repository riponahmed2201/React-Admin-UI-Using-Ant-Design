import React from 'react'
import Custominput from '../components/Custominput'

function Resetpassword() {
  return (
    <div className='py-5' style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <h3 className='text-center'>Reset Password</h3>
        <p className='text-center'>Please enter your new password.</p>
        <form>
          <Custominput type="password" label="New Password" id="password" />
          <Custominput type="password" label="Password" id="confirmPassword" />
          <button  className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'  style={{ background: "#ffd333" }} type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default Resetpassword