import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryHelloArgs = {
  amount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type ApolloQueryVariables = Exact<{
  name: Scalars['String'];
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type ApolloQuery = { __typename?: 'Query', hello?: string | null | undefined };


export const ApolloDocument = gql`
    query Apollo($name: String!, $amount: Int) {
  hello(name: $name, amount: $amount)
}
    `;

/**
 * __useApolloQuery__
 *
 * To run a query within a React component, call `useApolloQuery` and pass it any options that fit your needs.
 * When your component renders, `useApolloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApolloQuery({
 *   variables: {
 *      name: // value for 'name'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useApolloQuery(baseOptions: Apollo.QueryHookOptions<ApolloQuery, ApolloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ApolloQuery, ApolloQueryVariables>(ApolloDocument, options);
      }
export function useApolloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ApolloQuery, ApolloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ApolloQuery, ApolloQueryVariables>(ApolloDocument, options);
        }
export type ApolloQueryHookResult = ReturnType<typeof useApolloQuery>;
export type ApolloLazyQueryHookResult = ReturnType<typeof useApolloLazyQuery>;
export type ApolloQueryResult = Apollo.QueryResult<ApolloQuery, ApolloQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    