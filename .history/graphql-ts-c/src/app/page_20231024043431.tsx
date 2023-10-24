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
const query = gql`query ExampleQuery {
  books {
    title
  }
}`
const query2 = gql``
export default function Home() {
   const [books, setBooks] = useState()
  const {fetchMore, loading, error} = useQuery(query);
  return (
    <main className={styles.main}>
     <div>
    <button onClick={async () => {
      const fet = await fetchMore({});
      console.log(fet)
    }}>Check GraphQL server</button>
    <button onClick={() => console.log(books)}>Check Books</button>
  </div>;
    </main>
  )
}
