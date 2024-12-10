import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
      <div className="p-4 px-10 flex flex-col justify-center gap-2 w-fit border-2 border-secondary-500 rounded-md">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form >
          <p className="mb-8">Enter your email to receive a one-time passcode.</p>
          <input type="text" placeholder="amelie@untitledui.com" className="input w-full border-2 border-secondary-500" />
          <div className="mt-2 form-control">
            <label className="label justify-start cursor-pointer">
              <input type="checkbox" className="toggle" defaultChecked />
              <p className="label-text font-bold pl-2">Remember me for 30 days</p>
            </label>
          </div>
          <button className="btn btn-block mt-6 border-secondary-500 bg-secondary-500 hover:bg-secondary-600 text-white">Send 4-digit code</button>
        </form>
      </div>
  )
}
