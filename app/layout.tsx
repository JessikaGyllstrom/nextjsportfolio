import '../globals.css'
import { Inter, Pattaya, Roboto_Mono, Rampart_One, Berkshire_Swash } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pattaya = Pattaya({ 
  subsets: ['latin'],
  weight:["400"],
  variable: '--font-pattaya',
});
 const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
const rampart = Rampart_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rampart',
  weight: '400'
})
const swash = Berkshire_Swash({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rampart',
  weight: '400'
})

export const links = {
  github: 'https://github.com/JessikaGyllstrom',
  linkedIn: 'https://www.linkedin.com/in/jessika-gyllström-226b9a1b7/',
  email: 'jessikagyllstrom@protonmail.com',
}
export const metadata = {
  title: 'Jessika Gyllström Portfolio',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='min-h-[100vh] flex flex-col dark:darkbg'>    
        <Navbar/>
        <main className={`${inter.variable} ${pattaya.variable}`}>{children}</main>
        <Footer links={links} />
      </body>
    </html>
  )
}