import { gql } from "@/__generated__";

export const GET_ROCKETS_QUERY = gql(/* GraphQL */ `
  query GetRockets {
    allRockets {
      nodes {
        id
        name
        year
      }
    }
  }
`);

export const CREATE_ROCKET_MUTATION = gql(/* GraphQL */ `
  mutation CreateRocket($year: Int!, $name: String!) {
    createRocket(input: { rocket: { year: $year, name: $name } }) {
      rocket {
        id
      }
    }
  }
`);
