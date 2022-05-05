import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div style={{height: '50vh'}} className="error-page text-center my-5">
            <h1 className='headline'>That Page Doesn't Exist!!</h1>
            <p>Oops!!! Sorry, the page you were looking for could not be found</p>

            <div className='my-2'>
                <h1 className='error'>404</h1>
            </div>
        </div>
    );
};

export default NotFound;