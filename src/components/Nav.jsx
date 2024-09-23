import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Nav = () => {
    return (
        <div className='flex w-full fixed items-center z-10 justify-between text-white text-xl px-10 py-5'>
            <h2 className='font-extrabold'>F</h2>
            <div className='navelements relative flex gap-10 items-center justify betwen'>
                <a className='inline-block relative ' href="">Shop</a>
                <a className='inline-block relative ' href="">New</a>
                <a className='inline-block relative ' href="">About</a>
                <a className='inline-block relative ' href="">Stores</a>
                <a className='inline-block relative ' href="">Search</a>
                <div className='flex gap-10 ml-40'>
                    <i className="ri-shopping-bag-line"></i>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Nav