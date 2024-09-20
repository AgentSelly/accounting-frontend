import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen border-4 border-green-500 w-full rounded-2xl p-2 font-title">
      <h1>Welcome Home!</h1>
      
    </div>
  )
}