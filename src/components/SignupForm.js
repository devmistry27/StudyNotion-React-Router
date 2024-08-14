import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    const [accountType, setAccountType] = useState("student");

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match")
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }

        const FinalData = {
            ...accountData,
            accountType
        }

        navigate("/dashboard");
    }

    const style = {
        boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset',
    };

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max' style={style}>
                <button className={`${accountType === "student"
                    ?
                    "bg-richblack-900 text-richblack-5"
                    :
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full trasition-all duration-200`}
                    onClick={() => setAccountType("student")}>
                    Student
                </button>
                <button className={`${accountType === "instructor"
                    ?
                    "bg-richblack-900 text-richblack-5"
                    :
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full trasition-all duration-200`}
                    onClick={() => setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} className='w-full flex flex-col gap-y-4'>
                <div className='flex gap-x-5'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName}
                            className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                            style={style}
                        />
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type='text'
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName}
                            className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                            style={style}
                        />
                    </label>
                </div>

                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                        style={style}
                    />
                </label>

                <div className='flex gap-x-4'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                            style={style}
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !(prev))}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ('text') : ('password')}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full'
                            style={style}
                        />
                        <span
                            className='absolute right-3 top-[38px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !(prev))}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm