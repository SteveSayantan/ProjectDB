const FormInput = ({label,type,name,placeholder}) => {
    return <label className="form-control w-full">
            <div className="label">
               <span className="label-text capitalize font-medium text-base-content ">{label}</span> 
            </div>
        <input
            name={name}
            type={type} placeholder={placeholder} required
            className="input input-bordered w-full"
        />
    </label>

}

export default FormInput;