import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import fs from 'fs/promises'
import path from 'path'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  const { products } = props;


  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}><Link href={`/products/${product.id}`}> {product.title} </Link>  </li>
        ))}
      </ul>

    </>
  )
}

export async function getStaticProps() {

  console.log('Re-Generating');

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData)

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }

    }

  }

  if (data.products.length === 0) {
    return { notFound: true }
  }


  return {
    props: {
      products: data.products
    },
    revalidate: 60,

  }
}
