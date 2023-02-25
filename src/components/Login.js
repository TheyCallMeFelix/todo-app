import { useAuth } from "context/AuthContext";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError,] = useState(null)
  const [isLoggingIn, setIsLoggingIn] = useState(true)

  const { login, signup, } = useAuth()

  async function submitHandler () {
  if (!email || !password) { 
    setError('Please enter email and password')
    return 
  }

  if (isLoggingIn) {
    try {
      await login(email, password)
    } catch (err) {
      setError('Incorrect Email or Password')
    }
    return
  }

  await signup(email, password)
}


  return (
  <div className="flex-1 text-xs sm: text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
    <h1 className="font-extrabold text-2xl select-none sm:text-4xl uppercase">{isLoggingIn ? 'login' : 'Register'}</h1>
    {error && <div className="w-full max-w-[40ch] border-rose-500 text-rose-500 text-center duration-150">{error}</div>}
    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email Adress" className='outline-none duration-300 border-b-2 border-solid border-white focus:border-gray-500 text-slate-900 p-2 w-full max-w-[40ch]' />
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='outline-none duration-300 border-b-2 border-solid border-white focus:border-gray-500 text-slate-900 p-2 w-full max-w-[40ch]' />
    <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase p-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 ">
      <h2 className="relative z-20 hover:text-slate-900"> Submit</h2>
      </button>
      <h2 className="duration-300 hover:scale-110 cursor-pointer" onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
      
  </div>
  )
};
export default Login;