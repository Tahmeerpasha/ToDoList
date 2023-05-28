import React from 'react'

const Input = (props) => {
    return (
        <>
            <div className="flex">
                <input onChange={props.handleChange} type="text" placeholder="Add your todos here" className="m-1 ml-40 w-8/12 border bg-pink-300 border-pink-600 mt-20 p-3 rounded-lg font-serif" />
                <button onClick={props.handleClick} className='mt-20 w-20 text-center h-12 bg-pink-500 text-white font-serif font-extrabold rounded-lg border border-pink-400'>Add</button>
            </div>
        </>
    )
}

export default Input