import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState(false)
  return (
    <section className="login-wrapper grid-2 h-screen">
      <div className="col">
        <h2>Make Your Better</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus expedita a dolores maiores quisquam similique, atque labore minus quia ducimus sed qui aspernatur, maxime alias. Quam iusto illo qui quod.</p>
      </div>
      <div className="col">
        <form action="" className='p-6 border h-[90%] space-y-6'>
          <div className="f-row">
            <h3> <Link onClick={() => setLogin(false)}>Signup</Link></h3>
            <h3> <Link onClick={(() => setLogin(true))}>Login</Link></h3>
          </div>
          {login ?
            <>
              <div className="form-group">
                <input type="text" placeholder='Email' className='w-full p-2 border' />
              </div>
              <div className="f-between">
                <button className='cta'>Continue</button>
                <h5 className='text-primary'><Link>Sign in By Phone</Link></h5>
              </div>
            </> : <>
              <div className="form-group">
                <input type="text" placeholder='First name' className='w-full p-2 border' />
              </div>

              <div className="form-group">
                <input type="text" placeholder='Last Name' className='w-full p-2 border' />
              </div>

              <div className="form-group">
                <input type="text" placeholder='Email' className='w-full p-2 border' />
              </div>
              <div className="form-group">
                <input type="text" placeholder='Mobile' className='w-full p-2 border' />
              </div>
              <div className="form-group">
                <input type="text" placeholder='Job Role' className='w-full p-2 border' />
              </div>
              <p>I comply with the rules and regulation</p>

              <button className='cta'>Signup</button>

            </>
          }
        </form>
      </div>
    </section>
  )
}

export default Login