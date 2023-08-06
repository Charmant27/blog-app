"use client"

import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut, getProviders } from "next-auth/react"
import { useState, useEffect } from "react"

const Nav = () => {
    const {data: session} = useSession()

    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setProvider = async () => {
            const response = await getProviders()

            setProviders(response)
        }

        setProvider()
    }, [])

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
                {session?.user ? (
                    <div className="flex items-center gap-3">
                        <Link href="/create-blog" className="btn">
                            Create a blog
                        </Link>
                        <button
                            type="button"
                            onClick={signOut}
                            className="btn"
                        >
                            sign out
                        </button>
                        <Image
                            src={session?.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="profile"
                        />
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="btn"
                            >
                                Sign in
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav
