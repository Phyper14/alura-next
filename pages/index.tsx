import Link from '../src/components/Link'
interface Props {
  children: React.ReactNode
  as: string
}

const GlobalStyle = () => {
  return (
    <style global jsx>
      { `
        body {
          font-family: sans-serif;
        }
      `}
    </style>
  )
}
const Title = ({ children, as }: Props) => {
  const Tag = as;
  return (
    <>
      <Tag>
        {children}
      </Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  )
}
export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Title as="h1">Alura Cases - Home Page</Title>
      <Link href="faq">Ir para o Faq</Link>
    </div>
  )
}