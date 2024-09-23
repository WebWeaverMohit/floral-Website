import React from 'react'

const Bottom = () => {
    return (
        <div id="bottom" className='relative gap-20 flex justify-between items-start px-[10vw] text-white font-[DreamCottage] mt-[20vw]'>
            <div id="bot1" className='w-1/2 '></div>
            <div id="bot2" className='w-1/2 h-[32vw] px-10'>
                <h1 className='text-8xl leading-[0.9]'>Blue Pottery <br />Decorative <br />Vase</h1>
                <div className='flex items-center mt-10 justify-between'>
                    <button className='px-8 py-3 border-2 rounded-full'>Add to Cart</button>
                    <h2 className='text-4xl'>$57</h2>
                </div>
            </div>
        </div>
    )
}

export default Bottom