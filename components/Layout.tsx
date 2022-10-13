import Navbar from "./Navbar"
import Footer from './Footer'
import React from 'react'
import Head from 'next/head'

type Layout = {
    children: React.ReactNode
}

export default function Layout({children}:Layout) {
    return (
        <>
        <Head>
            <title>PokeNext</title>
        </Head>

            <Navbar/>
                <main className="main-container">{children}</main>
            <Footer/>
        </>
    )
}