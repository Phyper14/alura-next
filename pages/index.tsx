import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from '@/src/components/Link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div>Alura Cases - Home Page</div>
      <Link href="faq">Ir para o Faq</Link>
    </div>
  )
}
