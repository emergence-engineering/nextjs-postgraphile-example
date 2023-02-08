import "./globals.css";
import GraphQLProvider from "@/providers/GraphQLProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <GraphQLProvider uri={"http://0.0.0.0:3001/graphql"}>
        <body>{children}</body>
      </GraphQLProvider>
    </html>
  );
}
