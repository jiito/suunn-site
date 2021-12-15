import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SketchPicker } from 'react-color'
import { PageWrapper } from '../components/PageWrapper'

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

  const [showDetail, setShowDetail] = useState<boolean>(false)
  return (
    <PageWrapper>
      <main className="flex flex-col items-center h-screen max-w-3xl mx-auto">
        <h1 className="mt-10 font-mono text-6xl font-bold text-yellow-600">
          suunns
        </h1>
        <h1 className="mb-10 font-mono text-6xl font-bold text-yellow-100">
          snnuus
        </h1>
        <SketchPicker
          color={color}
          onChangeComplete={(color: Record<string, string>) =>
            setColor(color.hex)
          }
        />
        <button
          onClick={() => setShowDetail((v) => !v)}
          className="px-4 py-2 mt-4 font-bold text-black rounded-full hover:bg-gray-400 hover:text-white cursor-help"
        >
          What does this do?
        </button>
        {showDetail && (
          <p className="text-center">
            When you click on the color component above, we publish the color to
            our MQTT broker under the <code>suunn/color</code> topic. This means
            that any devices subscribed to that topic will get the message. Ours
            suunns are listening for messages on this topic to change their
            light color.
          </p>
        )}
        <div className="flex justify-around w-5/12 pt-8">
          <div className="px-4 py-2 mt-4 text-white bg-yellow-500 rounded-md cursor-pointer hover:bg-blue-900">
            <Link href="/report">Final Writeup</Link>
          </div>
          <div className="px-4 py-2 mt-4 text-white bg-black rounded-md cursor-pointer hover:bg-gray-900">
            <Link href="/report">Github Repo</Link>
          </div>
        </div>
      </main>
    </PageWrapper>
  )
}

export default Home
