import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div className="p-2">
      <div className="flex flex-col justify-center">
        <img src="src\assets\avatar.svg" className='w-24 h-24' />
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
