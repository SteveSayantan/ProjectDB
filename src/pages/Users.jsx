import { toast } from "react-toastify";
import { UserSearchContainer,UsersContainer } from "../components";
import { customInstance } from "../utils";

export const action=async({request})=>{
    try {
        const data= await request.formData();
        console.log([...data.entries()])
        const {data:{institute}}= await customInstance.post('/institutes',data)
        console.log(institute)
        toast.success(`${institute.name} created successfully!`)
    } catch (error) {
        const msg= error.response?.data?.msg ?? "Something went wrong"
        toast.error(msg);
    }
    finally{
        document.getElementById("add-user-modal").close();
        document.getElementById("add-user-form").reset();
    }
    return null;
}

export const loader= async function(){
    const res= await customInstance('/institutes');
    return {users:res.data.institutes,count:res.data.count};
}

const Users = () => {

    return <main className="min-h-screen">
        <UserSearchContainer />
        <UsersContainer/>
    </main>



};

export default Users;
