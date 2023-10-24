"use client";

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

export default function PollPage() {
  const [
    getBooks, 
    { loading, data }
  ] = useQuery(query);
  const [books, setBooks] = useState()
  const checkServer = async () => {
    getBooks()
  }
  return <div>
    <button onClick={() => checkServer()}>Check GraphQL server</button>
    <button onClick={() => console.log(books)}>Check Books</button>
  </div>;
};