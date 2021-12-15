import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'

const API_URL = 'http://suunn.herokuapp.com/mqtt'

const Home: NextPage = () => {
  const [color, setColor] = useState<string>('#ffffff')
  useEffect(() => {
    const postReqOpts = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: 'suunn/color', message: { color } }),
    }
    fetch(API_URL, postReqOpts)
  }, [color])
  return (
    <div className="h-screen bg-gradient-to-t from-yellow-200">
      <Head>
        <title>suunn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center max-w-3xl mx-auto">
        <h1 className="my-10 font-mono text-6xl font-bold text-yellow-600">
          suunns
        </h1>
        <SketchPicker
          color={color}
          onChangeComplete={(color: Record<string, string>) =>
            setColor(color.hex)
          }
        />
        <div className="px-4 py-2 mt-4 text-white bg-yellow-500 rounded-md cursor-pointer hover:bg-blue-900">
          <Link href="/report">Report</Link>
        </div>
      </main>

      <footer className="flex justify-center mx-auto mt-20">
        <p>Powered by Ben and Danielle</p>
      </footer>
    </div>
  )
}

export default Home
