import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import img1 from '../../assets/Hero/20.png'

const Signup = () => {
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

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
        <h1 className="text-5xl text-secondary font-bold mb-5">BacaYuk!</h1>

        <div className="w-full flex flex-col max-w-[550px] ">
          <div className="w-full flex flex-col">
            <h3 className="text-3xl  text-white font-bold mb-4">Signup</h3>
            <p className="text-sm  text-white mb-2">
              Selamat Datang! Ayo buat akun untuk mempermudah pengalaman
              berbelanja kamu
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="name"
            placeholder="Name"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="no.telp"
            placeholder="Nomor Telfon"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
          />
        </div>
        <div className="w-full flex flex-col">
          <input
            type="alamat"
            placeholder="Alamat"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
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
              <FaEye className="h-6 w-6 text-gray-500" />
            ) : (
              <FaEyeSlash className="h-6 w-6 text-gray-500" />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col relative">
          <input
            type={isShowPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="w-full text-secondary py-4 bg-primary border-b border-secondary outline-none focus:outline-none "
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div
            className="absolute top-6 right-4 cursor-pointer "
            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
          >
            {isShowConfirmPassword ? (
              <FaEye className="h-6 w-6 text text-gray-500" />
            ) : (
              <FaEyeSlash className="h-6 w-6 text-gray-500" />
            )}
          </div>
        </div>

        <div className="w-full flex flex-col mt-5">
          <a
            className="bg-tertiary hover:bg-secondary transition-colors
              duration-200 text-white py-2 p-4 rounded-md"
            href="/"
          >
            Signup
          </a>
        </div>

        <div className="w-full mt-5">
          <p className="text-sm font-normal text-secondary">
            Sudah punya akun?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              <a href="/Login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
