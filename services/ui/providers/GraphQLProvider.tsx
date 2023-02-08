"use client";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { PropsWithChildren } from "react";

export default function GraphQLProvider({
  uri,
  children,
}: PropsWithChildren<{ uri: string }>) {
  const httpLink = createHttpLink({ uri });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    ssrMode: true,
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
