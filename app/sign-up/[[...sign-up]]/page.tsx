import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <SignUp />
      </div>
    </div>
  )
}
