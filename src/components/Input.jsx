import React,{useId} from 'react'

const Input = React.forwardRef(function Input ({
    label,
    type = "text",//password/text/string
    className = "",
    ...props

},ref) {
    //useRefrence help to use single component reused on multiple place but state is in diffrent place so we take ref of it
    const id = useId()
    return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>
        }
        <input type={type}
        className={`px-3 py-2 rounded-lg bg-white
        text-black outline-none focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
        />
    </div>
    )
})

export default Input
