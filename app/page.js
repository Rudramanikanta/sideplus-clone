"use client"
import Image from "next/image";
import {signIn, useSession} from "next-auth/react"
import Provider from "./components/providers"
import { useRouter } from "next/navigation";
import MainComponent from "./home/MainComponent";
export default function Home() {
  const session=useSession()
  const router=useRouter()
  return (
    <div>
      <MainComponent></MainComponent>
    </div>
  );
}
