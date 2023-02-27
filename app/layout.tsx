import { Footer, Header } from '@/components'
import { Roboto, Lato } from '@next/font/google'
import './globals.css'

const lato = Lato(
    {
        weight: ['400', '900'],
        subsets: ['latin']
    }
)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <div className={`${lato.className}`}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    )
}
