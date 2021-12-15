import Head from 'next/head'

export const PageWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>suunn</title>
        <link
          rel="icon"
          href="https://emojiguide.org/images/emoji/q/1qmup5ljp0kmq.png"
        />
      </Head>
      <div className="h-full pb-20 bg-gradient-to-t from-yellow-100">
        {children}
        <footer className="flex justify-center mx-auto mt-20">
          <p>
            Powered by <a href="https://benji.ar">Ben 🧑🏼‍💻 </a>and{' '}
            <a href="https://github.com/daninewbs">Danielle 👩🏻‍💻</a>
          </p>
        </footer>
      </div>
    </>
  )
}
