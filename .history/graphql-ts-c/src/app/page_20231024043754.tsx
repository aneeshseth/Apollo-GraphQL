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
const query2 = gql`query ExampleQuery {
  books {
    title
    author
  }
}
`
const query3 = gql`query ExampleQuery {
  books {
    title
    author
  }
}
`
export default function Home() {
  const { data: data1, loading: loading1, error: error1 } = useQuery(query); 
  const { data: data2, loading: loading2, error: error2, refetch: refetch2 } = useQuery(query2); 

  const handleQuery2Click = async () => {
    try {
      await refetch2(); 
      console.log(data2)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.main}>
      <div>
        <button onClick={handleQuery2Click}>Fetch Data for Query 2</button>
        <button onClick={() => console.log(data1)}>Check Data for Query 1</button>
        <button onClick={() => console.log(data2)}>Check Data for Query 2</button>
      </div>
    </main>
  );
}
