"use client"
import { SessionProvider } from "next-auth/react"

const providers = ({children}) => {
    
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default providers