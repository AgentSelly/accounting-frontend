import { createLazyFileRoute } from '@tanstack/react-router'
import avatar from '../assets/avatar.jpg';

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
      <div className="min-h-screen w-full border-4 border-green-500 rounded-md p-2">
      <div className="flex flex-col justify-items-centercenter">
        <img src={avatar} className='w-24 h-24'/>
        <form>
            <label>Enter your name:
            <input type="text" />
          </label>
          <label>Enter your email:
            <input type="text" />
            </label>
        </form>
      </div>  
      </div>
  )
}