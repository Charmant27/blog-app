"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

const Nav = () => {
    // const {data: session} = useSession()
    const isUserLoggedIn = false
    return (
        <nav className="w-full h-20 flex-between border-b-2">
            <div className="flex items-center gap-3">
                <Link href="/">
                    <Image src="/assets/images/logo.svg" width={30} height={30} alt="charm-blog" />
                </Link>
                <p className="text-sm uppercase font-extrabold">Charm blogging</p>
            </div>

            <div className="flex items-center gap-10">
                <Link href="/">Home</Link>
                <Link href="/blogs">Blog posts</Link>
                <Link href="/about">About us</Link>
            </div>
            <div>
                {isUserLoggedIn ?
                    <button>Sign out</button>
                    :
                    <button className="btn" onClick={signOut}>Sign in</button>
                }
            </div>
        </nav>

    )
}

export default Nav