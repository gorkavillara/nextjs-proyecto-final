import Head from 'next/head'

Home.title = "Página Home";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <header className="text-green-500">
          Bienvenido a Next JS
        </header>
      </main>
    </>
  )
}
