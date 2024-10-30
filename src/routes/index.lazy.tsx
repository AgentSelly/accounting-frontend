import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col gap-4 border-4 border-green-500 rounded-md p-2">
      <h1 className='text-4xl text-center'>Welcome Home!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis
        dolorem officia provident sequi pariatur necessitatibus sed quaerat voluptatum
        totam illo, architecto, itaque praesentium harum obcaecati quae dignissimos
        laudantium sint.</p>
    </div>
  )
}
