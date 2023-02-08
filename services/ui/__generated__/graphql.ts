/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
};

/** All input for the create `Rocket` mutation. */
export type CreateRocketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Rocket` to be created by this mutation. */
  rocket: RocketInput;
};

/** The output of our create `Rocket` mutation. */
export type CreateRocketPayload = {
  __typename?: 'CreateRocketPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rocket` that was created by this mutation. */
  rocket?: Maybe<Rocket>;
  /** An edge for our `Rocket`. May be used by Relay 1. */
  rocketEdge?: Maybe<RocketsEdge>;
};


/** The output of our create `Rocket` mutation. */
export type CreateRocketPayloadRocketEdgeArgs = {
  orderBy?: InputMaybe<Array<RocketsOrderBy>>;
};

/** All input for the `deleteRocketById` mutation. */
export type DeleteRocketByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
};

/** All input for the `deleteRocket` mutation. */
export type DeleteRocketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rocket` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Rocket` mutation. */
export type DeleteRocketPayload = {
  __typename?: 'DeleteRocketPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRocketId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rocket` that was deleted by this mutation. */
  rocket?: Maybe<Rocket>;
  /** An edge for our `Rocket`. May be used by Relay 1. */
  rocketEdge?: Maybe<RocketsEdge>;
};


/** The output of our delete `Rocket` mutation. */
export type DeleteRocketPayloadRocketEdgeArgs = {
  orderBy?: InputMaybe<Array<RocketsOrderBy>>;
};

export type ListenPayload = {
  __typename?: 'ListenPayload';
  /** Our root query field type. Allows us to run any query from our subscription payload. */
  query?: Maybe<Query>;
  relatedNode?: Maybe<Node>;
  relatedNodeId?: Maybe<Scalars['ID']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Rocket`. */
  createRocket?: Maybe<CreateRocketPayload>;
  /** Deletes a single `Rocket` using its globally unique id. */
  deleteRocket?: Maybe<DeleteRocketPayload>;
  /** Deletes a single `Rocket` using a unique key. */
  deleteRocketById?: Maybe<DeleteRocketPayload>;
  /** Updates a single `Rocket` using its globally unique id and a patch. */
  updateRocket?: Maybe<UpdateRocketPayload>;
  /** Updates a single `Rocket` using a unique key and a patch. */
  updateRocketById?: Maybe<UpdateRocketPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRocketArgs = {
  input: CreateRocketInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRocketArgs = {
  input: DeleteRocketInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRocketByIdArgs = {
  input: DeleteRocketByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRocketArgs = {
  input: UpdateRocketInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRocketByIdArgs = {
  input: UpdateRocketByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Rocket`. */
  allRockets?: Maybe<RocketsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Rocket` using its globally unique `ID`. */
  rocket?: Maybe<Rocket>;
  rocketById?: Maybe<Rocket>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRocketsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<RocketCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RocketsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRocketArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRocketByIdArgs = {
  id: Scalars['UUID'];
};

export type Rocket = Node & {
  __typename?: 'Rocket';
  id: Scalars['UUID'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  year: Scalars['Int'];
};

/** A condition to be used against `Rocket` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RocketCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `year` field. */
  year?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Rocket` */
export type RocketInput = {
  id?: InputMaybe<Scalars['UUID']>;
  name: Scalars['String'];
  year: Scalars['Int'];
};

/** Represents an update to a `Rocket`. Fields that are set will be updated. */
export type RocketPatch = {
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Rocket` values. */
export type RocketsConnection = {
  __typename?: 'RocketsConnection';
  /** A list of edges which contains the `Rocket` and cursor to aid in pagination. */
  edges: Array<RocketsEdge>;
  /** A list of `Rocket` objects. */
  nodes: Array<Maybe<Rocket>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Rocket` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Rocket` edge in the connection. */
export type RocketsEdge = {
  __typename?: 'RocketsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Rocket` at the end of the edge. */
  node?: Maybe<Rocket>;
};

/** Methods to use when ordering `Rocket`. */
export enum RocketsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC'
}

/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type Subscription = {
  __typename?: 'Subscription';
  listen: ListenPayload;
};


/** The root subscription type: contains realtime events you can subscribe to with the `subscription` operation. */
export type SubscriptionListenArgs = {
  topic: Scalars['String'];
};

/** All input for the `updateRocketById` mutation. */
export type UpdateRocketByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  /** An object where the defined keys will be set on the `Rocket` being updated. */
  rocketPatch: RocketPatch;
};

/** All input for the `updateRocket` mutation. */
export type UpdateRocketInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rocket` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Rocket` being updated. */
  rocketPatch: RocketPatch;
};

/** The output of our update `Rocket` mutation. */
export type UpdateRocketPayload = {
  __typename?: 'UpdateRocketPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rocket` that was updated by this mutation. */
  rocket?: Maybe<Rocket>;
  /** An edge for our `Rocket`. May be used by Relay 1. */
  rocketEdge?: Maybe<RocketsEdge>;
};


/** The output of our update `Rocket` mutation. */
export type UpdateRocketPayloadRocketEdgeArgs = {
  orderBy?: InputMaybe<Array<RocketsOrderBy>>;
};

export type GetRocketsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRocketsQuery = { __typename?: 'Query', allRockets?: { __typename?: 'RocketsConnection', nodes: Array<{ __typename?: 'Rocket', id: any, name: string, year: number } | null> } | null };

export type CreateRocketMutationVariables = Exact<{
  year: Scalars['Int'];
  name: Scalars['String'];
}>;


export type CreateRocketMutation = { __typename?: 'Mutation', createRocket?: { __typename?: 'CreateRocketPayload', rocket?: { __typename?: 'Rocket', id: any } | null } | null };


export const GetRocketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRockets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRockets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]}}]} as unknown as DocumentNode<GetRocketsQuery, GetRocketsQueryVariables>;
export const CreateRocketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRocket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRocket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"rocket"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRocketMutation, CreateRocketMutationVariables>;