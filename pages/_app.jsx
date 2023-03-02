import Head from "next/head"

import '../style.css'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Jogo da Velha</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App