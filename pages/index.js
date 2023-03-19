import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { calculate as calculatePlate } from '@/public/plate-calculator'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    console.log(calculatePlate(100))
    return (
        <>
        <Head>
            <title>Plate Calculator</title>
            <meta name="description" content="Calculate plates needed" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/*<link rel="icon" href="/favicon.ico" />*/}
            <Script src="plate-calculator.js"></Script>
        </Head>
        <main className={styles.main}>
            <p>Hello world</p>
        </main>
        </>
    )
}
