"use client"
import Image from "next/image";
import {signIn, useSession} from "next-auth/react"
import Provider from "./components/providers"
import { useRouter } from "next/navigation";
export default function Home() {
  const session=useSession()
  const router=useRouter()
  if(session.data!=null){
    router.push("/home")
  }
  console.log(process.env.GOOGLE_CLIENT_ID)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
        <button onClick={()=>{signIn()}}>signin</button>
      </main>
    </div>
  );
}
