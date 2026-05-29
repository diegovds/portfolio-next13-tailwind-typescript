import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Button from './components/Button'

const NotFound = () => {
  return (
    <>
      <title>Página não encontrada | Diego Viana</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,113,122,0.2),transparent_30rem)]" />
        <div className="bg-zinc-900/45 relative z-[1] rounded-lg border border-white/10 px-8 py-10 shadow-2xl shadow-black/30">
          <h1 className="text-8xl font-semibold leading-none text-zinc-100 sm:text-9xl">
            404
          </h1>
          <h2 className="mb-6 mt-4 text-2xl font-medium text-zinc-400 sm:text-3xl">
            Página não encontrada
          </h2>
          <Link href="/">
            <Button>
              <HiArrowNarrowLeft size={20} />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
