"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const page = () => {
    const router=useRouter();
    const session=useSession();
    if(session.data==null){
        router.push("/")
    }
  return (
    <div>
        <button onClick={()=>{signOut()}}>signout</button>
    </div>
  )
}

export default page