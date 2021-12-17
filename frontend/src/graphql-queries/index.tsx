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

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<User>;
  userCreate?: Maybe<User>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserCreateArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  currentUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryHelloArgs = {
  amount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permission>>>;
};

export type ApolloQueryVariables = Exact<{
  name: Scalars['String'];
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type ApolloQuery = { __typename?: 'Query', hello?: string | null | undefined };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id?: string | null | undefined, name?: string | null | undefined, email?: string | null | undefined, permissions?: Array<{ __typename?: 'Permission', name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', name?: string | null | undefined } | null | undefined };


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
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    name
    email
    permissions {
      name
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    name
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    