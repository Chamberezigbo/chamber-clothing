import React from "react";
import './homepage.style.scss'

const HomePage = () => (
    <div className= 'homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Hat</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>mens</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Jacket</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>women</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>shoe</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div> 
        </div>
    </div>
)

export default HomePage;