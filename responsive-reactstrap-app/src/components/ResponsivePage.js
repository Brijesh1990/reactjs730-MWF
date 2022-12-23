import React from 'react';
import { Button, Table, Form ,Input} from 'reactstrap';
function ResponsivePage()
{
    return (
        <React.Fragment>

        {/* <div className='container-fluid mt-5 bg-dark text-white mx-auto p-5'>
          <Button type='button' className='btn btn-lg btn-danger'>Add Me</Button>
          </div>
          <div className='container mt-5 bg-dark text-white mx-auto p-5'>
          <Button type='button' className='btn btn-lg btn-danger'>Add Me</Button>
          </div>

          
          <div className='container w-75 mt-5 bg-dark text-white p-5'>
          <Button type='button' className='btn btn-lg btn-danger'>Add Me</Button>
          </div> */}

           <div className='container col-md-6 mx-auto bg-light p-5 mt-5'>
            <h1 className='text-center'>Login Form</h1>
          <hr className='border border-2 border-dark w-50 mx-auto' />
          <Form>
            <div className='form-group col-md-5 mx-auto mt-1'>
                <input type="text" name="email" placeholder='email' className='form-control'></input>
            </div>
            
            <div className='form-group col-md-5 mx-auto mt-3'>
                <input type="password" name="pass" placeholder='password' className='form-control'></input>
            </div>

            
            <div className='form-group col-md-5 mx-auto mt-3'>
                <Button type="button" name="pass" placeholder='password' className='btn btn-lg btn-info'>Login</Button>
                <b> &nbsp; Forget Password</b>
            </div>
            <div className='form-group col-md-6 mx-auto mt-3'>
                <b>Don't have an account<a href=''>Create Account</a></b>
            </div>
          </Form>
          </div>
        </React.Fragment>
    )
}
export default ResponsivePage;