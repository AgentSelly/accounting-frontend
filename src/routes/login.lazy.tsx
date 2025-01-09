import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
      <div className="p-4 px-10 flex flex-col justify-center gap-2 w-fit border-2 border-secondary-500 rounded-md">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <form >
        <p className="mb-6">Enter your email to receive a one-time passcode.</p>
          <input type="text" placeholder="Enter your email here" className="h-12 rounded-lg px-4 w-full border-2 border-secondary-500" />
        <div className="mt-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-secondary-500"></div>
            <div className="peer-checked:translate-x-5 peer-checked:border-white absolute left-[2px] top-[2px] w-5 h-5 bg-white border border-gray-300 rounded-full transition-transform"></div>
            <p className="font-bold pl-2 text-sm">Remember me for 30 days</p>
          </label>
        </div>
        <button className="h-12 w-full rounded-lg mt-6 border-secondary-500 bg-secondary-500 hover:bg-secondary-600 text-white">Send 4-digit code</button>
        </form>
      </div>
  )
}


/*<label className="label justify-start cursor-pointer">
              <input type="checkbox" className="toggle" defaultChecked />
              <p className="label-text font-bold pl-2">Remember me for 30 days</p>
</label>*/
