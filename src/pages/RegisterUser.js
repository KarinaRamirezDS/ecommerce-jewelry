import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch} from 'react-redux';
import {userCreateThunk} from '../redux/actions';
import "./styles/RegisterUser.styles.css"
import { Link } from 'react-router-dom';


const RegisterUser = () => {

    const {handleSubmit, register } = useForm();
    const dispatch = useDispatch();

    const submit = data =>{
        console.log(data);
        dispatch(userCreateThunk(data))
    }


  return( 
      <div className='backRegister'>
         <h1 className='titulo'>Sign up</h1>

            <form className='form2' onSubmit={handleSubmit(submit)}>
                <div className='formRegister'>
                    <label htmlFor='email'>Email: </label>
                    <input  
                    type='email' 
                    id='email' 
                    placeholder='exaple@examplo.com'
                    {...register('email')}
                    />
                </div>
                <div className='formRegister' >
                <label htmlFor='firstName'>First Name:  </label>
                    <input  
                    type='text' 
                    id='firstName' 
                    placeholder='First Name'
                    {...register('first_name')}    
                    />
                </div>
                <div className='formRegister'>
                    <label htmlFor='lastName'>Last Name:  </label>
                    <input  
                    type='text' 
                    id='lastName'  
                    placeholder='Last Name'
                    {...register('last_name')}
                    />
                </div>
                <div className='formRegister'>
                <label htmlFor='password'>Password:  </label>
                    <input  
                    type='text' 
                    id='password' 
                    placeholder='Password'
                    {...register('password')}   
                    />
                </div>
                <Link className='buttonLogin' to="/Login">Sign up</Link>
               
            </form>
  </div>
  );
 
};

export default RegisterUser;
