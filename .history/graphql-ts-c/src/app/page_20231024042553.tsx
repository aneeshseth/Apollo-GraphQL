"use client"
import Image from 'next/image'
import styles from './page.module.css'
export const dynamic = "force-dynamic";
import {useState} from 'react'
import { useSuspenseQuery, useQuery} from "@apollo/experimental-nextjs-app-support/ssr";
import { useLazyQuery } from "@apollo/client";
import {
 gql
} from "@apollo/client";
export default function Home() {
  const query = gql`query ExampleQuery {
    books {
      title
    }
  }`
  const 
  const [books, setBooks] = useState()
  const checkServer = async () => {
  }
  return (
    <main className={styles.main}>
     <div>
    <button onClick={() => checkServer()}>Check GraphQL server</button>
    <button onClick={() => console.log(books)}>Check Books</button>
  </div>;
    </main>
  )
}
