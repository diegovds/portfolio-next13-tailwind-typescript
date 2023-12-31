import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import Button from './components/Button'

const NotFound = () => {
  return (
    <>
      <title>Página não encontrada | Diego Dev</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-9xl font-bold text-emerald-500">404</h1>
        <h2 className="mb-4 text-3xl font-medium text-gray-400">
          Página não encontrada
        </h2>
        <Link href="/">
          <Button>
            <HiArrowNarrowLeft size={20} />
            Voltar para Home
          </Button>
        </Link>
      </div>
    </>
  )
}

export default NotFound
