import { Form } from "react-router-dom";
import {  FormInput, SubmitBtn } from "../components";

const Login = () => {
    return <main className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
        <Form method="post" className="space-y-6 bg-white w-11/12 max-w-md mt-8 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <FormInput label='email address' type='email' name='email' placeholder='user@xyz.com' />
            <FormInput label='password' type='password' name='password' placeholder='secret' />
            <SubmitBtn />        
        </Form>
    </main>
}

export default Login;