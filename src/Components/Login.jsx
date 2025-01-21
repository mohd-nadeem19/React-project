// import React, { useState } from 'react';

const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const formData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDB7UXbT2nxHH4zOBZ_NTQrdJRUdtVAQqY",
            {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "Application/json"
                }
            }
        )

        const data = await response.json()

        console.log(data.idToken)
        localStorage.setItem("Token", data.idToken)
      
    }




    return (
        <div className='flex flex-col place-items-center min-h-screen bg-gray-100'>
            <h1 className='text-3xl font-bold mb-6'>Login</h1>
            <form onSubmit={ handleSubmit } className='bg-white p-6 rounded shadow-md w-80 space-y-4'>
                <div>
                    <label htmlFor="email" className='block text-gray-700 font-medium mb-2'>Email</label>
                    <input type="email" name="email" id="email" required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:bg-blue-400'/>
                </div>

                <div>
                    <label htmlFor="password" className='block text-gray-700 font-medium mb-2' >Password</label>
                    <input type="password" name="password" id="password" className='w-full px-4 py-2 border rounded-md focus:outline-none focus:bg-blue-400' />
                </div>

                <button type='submit' className='bg-blue-700 py-2 w-full rounded text-white font-medium'>SignUp</button>

            </form>
        </div>

    );
}

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Placeholder for form submission logic
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-4">Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

export default Login;
