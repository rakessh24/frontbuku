import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Navigate } from 'react-router-dom'
import img1 from '../../assets/Hero/20.png'
// import { dataDiri } from '../../__dummy__/data'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email === 'coba123@gmail.com' && password === 'asdfghjkl') {
      setIsSuccess(true)
    } else {
      setIsError(true)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setIsError(false)
  }

  if (isSuccess) {
    return <Navigate to="/ " />
  }

  return (
    <div className="w-screen h-screen flex items-start ">
      <div className="relative w-1/2 h-full">
        <img
          src={img1}
          className="w-full h-full object-cover max-w-full"
          alt="background"
        />
      </div>

      <div className="w-1/2 h-full bg-primary flex-flex-col p-20 justify-between">
        <h1 className="text-5xl text-secondary font-bold mb-10">BacaYuk!</h1>

        <div className="w-full flex flex-col max-w-[550px] ">
          <div className="w-full flex flex-col">
            <h3 className="text-3xl  text-white font-bold mb-4">Login</h3>
            <p className="text-sm  text-white mb-2">
              Selamat Datang! Ayo login terlebih dahulu
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col relative">
          <input
            type={isShowPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="absolute top-6 right-4 cursor-pointer "
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <FaEye className="h-6 w-6 text-secondary" />
            ) : (
              <FaEyeSlash className="h-6 w-6 text-secondary" />
            )}
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-4">
          <div className="w-full flex">
            <p className="text-sm text-white whitespace-nowarp cursor-pointer underline underline-offset-2">
              Lupa Password?
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col mt-5">
          <button
            className="bg-tertiary hover:bg-secondary transition-colors
              duration-200 text-white py-2 p-4 rounded-md"
            onClick={handleSubmit}
          >
            Login
          </button>
          <a
            href="/Signup"
            className="border-2 border-tertiary hover:bg-secondary transition-colors
              duration-200 text-white py-2 p-4 rounded-md mt-3 text-center"
          >
            Signup
          </a>
        </div>

        <div className="w-full mt-5">
          <p className="text-sm font-normal text-secondary">
            Belum punya akun?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              <a href="/Signup">Signup</a>
            </span>
          </p>
        </div>
        {isSuccess && (
          <>
            <div className="bg-green-200 text-green-800 px-4 py-2 rounded-md mt-4">
              your username and password is correct!
              <button className="float-right" onClick={handleClose}>
                x
              </button>
            </div>
          </>
        )}

        {isError && (
          <div className="bg-red-200 text-red-800 px-4 py-2 rounded-md mt-4">
            username and password is wrong!
            <button className="float-right" onClick={handleClose}>
              x
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
