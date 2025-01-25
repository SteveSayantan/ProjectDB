const FormInput = ({label,type,name,placeholder}) => {
    return <label className="form-control w-full">
            <div className="label">
               <span className="label-text capitalize font-medium text-gray-700 ">{label}</span> 
            </div>
        <input
            name={name}
            type={type} placeholder={placeholder} required
            className="input input-bordered w-full focus:outline-none focus:ring focus:ring-blue-500"
        />
    </label>

}

export default FormInput;