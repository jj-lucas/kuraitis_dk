import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  assignPermission?: Maybe<Result>;
  createPermission?: Maybe<Permission>;
  createUser?: Maybe<User>;
  createVariation?: Maybe<Variation>;
  createVariationOption?: Maybe<VariationOption>;
  deletePermission?: Maybe<Result>;
  deleteUser?: Maybe<Result>;
  deleteVariation?: Maybe<Result>;
  deleteVariationOption?: Maybe<Result>;
  signIn?: Maybe<User>;
  signOut?: Maybe<Result>;
  unassignPermission?: Maybe<Result>;
};


export type MutationAssignPermissionArgs = {
  permissionName: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreatePermissionArgs = {
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateVariationArgs = {
  code: Scalars['String'];
};


export type MutationCreateVariationOptionArgs = {
  code: Scalars['String'];
  variationId: Scalars['String'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVariationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVariationOptionArgs = {
  id: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUnassignPermissionArgs = {
  permissionName: Scalars['String'];
  userId: Scalars['String'];
};

export type NationalizedString = {
  __typename?: 'NationalizedString';
  da?: Maybe<Scalars['String']>;
  en?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  breadcrumbs: Array<ProductBreadcrumbs>;
  images: ProductImages;
  title: Scalars['String'];
};

export type ProductBreadcrumbs = {
  __typename?: 'ProductBreadcrumbs';
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ProductImages = {
  __typename?: 'ProductImages';
  parallax?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  currentUser?: Maybe<User>;
  hello?: Maybe<Scalars['String']>;
  permissions: Array<Maybe<Permission>>;
  product?: Maybe<Product>;
  review?: Maybe<NationalizedString>;
  users: Array<Maybe<User>>;
  variations?: Maybe<Array<Maybe<Variation>>>;
};


export type QueryHelloArgs = {
  amount?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};


export type QueryProductArgs = {
  lang: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  message: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Maybe<Permission>>;
};

export type Variation = {
  __typename?: 'Variation';
  code: Scalars['String'];
  id: Scalars['ID'];
  variationOptions: Array<Maybe<VariationOption>>;
};

export type VariationOption = {
  __typename?: 'VariationOption';
  code: Scalars['String'];
  id: Scalars['ID'];
};

export type ApolloQueryVariables = Exact<{
  name: Scalars['String'];
  amount?: InputMaybe<Scalars['Int']>;
}>;


export type ApolloQuery = { __typename?: 'Query', hello?: string | null };

export type ReviewQueryVariables = Exact<{ [key: string]: never; }>;


export type ReviewQuery = { __typename?: 'Query', review?: { __typename?: 'NationalizedString', da?: string | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser?: { __typename?: 'User', id: string, name: string, email: string, permissions: Array<{ __typename?: 'Permission', name: string } | null> } | null };

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'User', name: string } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', signOut?: { __typename?: 'Result', message: string } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, permissions: Array<{ __typename?: 'Permission', name: string } | null> } | null> };

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'Result', message: string } | null };

export type PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionsQuery = { __typename?: 'Query', permissions: Array<{ __typename?: 'Permission', id: string, name: string } | null> };

export type AssignPermissionMutationVariables = Exact<{
  userId: Scalars['String'];
  permissionName: Scalars['String'];
}>;


export type AssignPermissionMutation = { __typename?: 'Mutation', assignPermission?: { __typename?: 'Result', message: string } | null };

export type UnassignPermissionMutationVariables = Exact<{
  userId: Scalars['String'];
  permissionName: Scalars['String'];
}>;


export type UnassignPermissionMutation = { __typename?: 'Mutation', unassignPermission?: { __typename?: 'Result', message: string } | null };

export type VariationsQueryVariables = Exact<{ [key: string]: never; }>;


export type VariationsQuery = { __typename?: 'Query', variations?: Array<{ __typename?: 'Variation', id: string, code: string, variationOptions: Array<{ __typename?: 'VariationOption', id: string, code: string } | null> } | null> | null };

export type CreateVariationMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type CreateVariationMutation = { __typename?: 'Mutation', createVariation?: { __typename?: 'Variation', id: string } | null };

export type DeleteVariationMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteVariationMutation = { __typename?: 'Mutation', deleteVariation?: { __typename?: 'Result', message: string } | null };

export type CreateVariationOptionMutationVariables = Exact<{
  code: Scalars['String'];
  variationId: Scalars['String'];
}>;


export type CreateVariationOptionMutation = { __typename?: 'Mutation', createVariationOption?: { __typename?: 'VariationOption', id: string } | null };

export type DeleteVariationOptionMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteVariationOptionMutation = { __typename?: 'Mutation', deleteVariationOption?: { __typename?: 'Result', message: string } | null };


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
export const ReviewDocument = gql`
    query Review {
  review {
    da
  }
}
    `;

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewQuery(baseOptions?: Apollo.QueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, options);
      }
export function useReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, options);
        }
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = Apollo.QueryResult<ReviewQuery, ReviewQueryVariables>;
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
export const SignOutDocument = gql`
    mutation SignOut {
  signOut {
    message
  }
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
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
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
  createUser(name: $name, email: $email, password: $password) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    message
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const PermissionsDocument = gql`
    query Permissions {
  permissions {
    id
    name
  }
}
    `;

/**
 * __usePermissionsQuery__
 *
 * To run a query within a React component, call `usePermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePermissionsQuery(baseOptions?: Apollo.QueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
      }
export function usePermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionsQuery, PermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionsQuery, PermissionsQueryVariables>(PermissionsDocument, options);
        }
export type PermissionsQueryHookResult = ReturnType<typeof usePermissionsQuery>;
export type PermissionsLazyQueryHookResult = ReturnType<typeof usePermissionsLazyQuery>;
export type PermissionsQueryResult = Apollo.QueryResult<PermissionsQuery, PermissionsQueryVariables>;
export const AssignPermissionDocument = gql`
    mutation AssignPermission($userId: String!, $permissionName: String!) {
  assignPermission(userId: $userId, permissionName: $permissionName) {
    message
  }
}
    `;
export type AssignPermissionMutationFn = Apollo.MutationFunction<AssignPermissionMutation, AssignPermissionMutationVariables>;

/**
 * __useAssignPermissionMutation__
 *
 * To run a mutation, you first call `useAssignPermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignPermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignPermissionMutation, { data, loading, error }] = useAssignPermissionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      permissionName: // value for 'permissionName'
 *   },
 * });
 */
export function useAssignPermissionMutation(baseOptions?: Apollo.MutationHookOptions<AssignPermissionMutation, AssignPermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AssignPermissionMutation, AssignPermissionMutationVariables>(AssignPermissionDocument, options);
      }
export type AssignPermissionMutationHookResult = ReturnType<typeof useAssignPermissionMutation>;
export type AssignPermissionMutationResult = Apollo.MutationResult<AssignPermissionMutation>;
export type AssignPermissionMutationOptions = Apollo.BaseMutationOptions<AssignPermissionMutation, AssignPermissionMutationVariables>;
export const UnassignPermissionDocument = gql`
    mutation UnassignPermission($userId: String!, $permissionName: String!) {
  unassignPermission(userId: $userId, permissionName: $permissionName) {
    message
  }
}
    `;
export type UnassignPermissionMutationFn = Apollo.MutationFunction<UnassignPermissionMutation, UnassignPermissionMutationVariables>;

/**
 * __useUnassignPermissionMutation__
 *
 * To run a mutation, you first call `useUnassignPermissionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnassignPermissionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unassignPermissionMutation, { data, loading, error }] = useUnassignPermissionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      permissionName: // value for 'permissionName'
 *   },
 * });
 */
export function useUnassignPermissionMutation(baseOptions?: Apollo.MutationHookOptions<UnassignPermissionMutation, UnassignPermissionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnassignPermissionMutation, UnassignPermissionMutationVariables>(UnassignPermissionDocument, options);
      }
export type UnassignPermissionMutationHookResult = ReturnType<typeof useUnassignPermissionMutation>;
export type UnassignPermissionMutationResult = Apollo.MutationResult<UnassignPermissionMutation>;
export type UnassignPermissionMutationOptions = Apollo.BaseMutationOptions<UnassignPermissionMutation, UnassignPermissionMutationVariables>;
export const VariationsDocument = gql`
    query Variations {
  variations {
    id
    code
    variationOptions {
      id
      code
    }
  }
}
    `;

/**
 * __useVariationsQuery__
 *
 * To run a query within a React component, call `useVariationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useVariationsQuery(baseOptions?: Apollo.QueryHookOptions<VariationsQuery, VariationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VariationsQuery, VariationsQueryVariables>(VariationsDocument, options);
      }
export function useVariationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VariationsQuery, VariationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VariationsQuery, VariationsQueryVariables>(VariationsDocument, options);
        }
export type VariationsQueryHookResult = ReturnType<typeof useVariationsQuery>;
export type VariationsLazyQueryHookResult = ReturnType<typeof useVariationsLazyQuery>;
export type VariationsQueryResult = Apollo.QueryResult<VariationsQuery, VariationsQueryVariables>;
export const CreateVariationDocument = gql`
    mutation CreateVariation($code: String!) {
  createVariation(code: $code) {
    id
  }
}
    `;
export type CreateVariationMutationFn = Apollo.MutationFunction<CreateVariationMutation, CreateVariationMutationVariables>;

/**
 * __useCreateVariationMutation__
 *
 * To run a mutation, you first call `useCreateVariationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariationMutation, { data, loading, error }] = useCreateVariationMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useCreateVariationMutation(baseOptions?: Apollo.MutationHookOptions<CreateVariationMutation, CreateVariationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVariationMutation, CreateVariationMutationVariables>(CreateVariationDocument, options);
      }
export type CreateVariationMutationHookResult = ReturnType<typeof useCreateVariationMutation>;
export type CreateVariationMutationResult = Apollo.MutationResult<CreateVariationMutation>;
export type CreateVariationMutationOptions = Apollo.BaseMutationOptions<CreateVariationMutation, CreateVariationMutationVariables>;
export const DeleteVariationDocument = gql`
    mutation DeleteVariation($id: String!) {
  deleteVariation(id: $id) {
    message
  }
}
    `;
export type DeleteVariationMutationFn = Apollo.MutationFunction<DeleteVariationMutation, DeleteVariationMutationVariables>;

/**
 * __useDeleteVariationMutation__
 *
 * To run a mutation, you first call `useDeleteVariationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVariationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVariationMutation, { data, loading, error }] = useDeleteVariationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVariationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVariationMutation, DeleteVariationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVariationMutation, DeleteVariationMutationVariables>(DeleteVariationDocument, options);
      }
export type DeleteVariationMutationHookResult = ReturnType<typeof useDeleteVariationMutation>;
export type DeleteVariationMutationResult = Apollo.MutationResult<DeleteVariationMutation>;
export type DeleteVariationMutationOptions = Apollo.BaseMutationOptions<DeleteVariationMutation, DeleteVariationMutationVariables>;
export const CreateVariationOptionDocument = gql`
    mutation CreateVariationOption($code: String!, $variationId: String!) {
  createVariationOption(code: $code, variationId: $variationId) {
    id
  }
}
    `;
export type CreateVariationOptionMutationFn = Apollo.MutationFunction<CreateVariationOptionMutation, CreateVariationOptionMutationVariables>;

/**
 * __useCreateVariationOptionMutation__
 *
 * To run a mutation, you first call `useCreateVariationOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariationOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariationOptionMutation, { data, loading, error }] = useCreateVariationOptionMutation({
 *   variables: {
 *      code: // value for 'code'
 *      variationId: // value for 'variationId'
 *   },
 * });
 */
export function useCreateVariationOptionMutation(baseOptions?: Apollo.MutationHookOptions<CreateVariationOptionMutation, CreateVariationOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVariationOptionMutation, CreateVariationOptionMutationVariables>(CreateVariationOptionDocument, options);
      }
export type CreateVariationOptionMutationHookResult = ReturnType<typeof useCreateVariationOptionMutation>;
export type CreateVariationOptionMutationResult = Apollo.MutationResult<CreateVariationOptionMutation>;
export type CreateVariationOptionMutationOptions = Apollo.BaseMutationOptions<CreateVariationOptionMutation, CreateVariationOptionMutationVariables>;
export const DeleteVariationOptionDocument = gql`
    mutation DeleteVariationOption($id: String!) {
  deleteVariationOption(id: $id) {
    message
  }
}
    `;
export type DeleteVariationOptionMutationFn = Apollo.MutationFunction<DeleteVariationOptionMutation, DeleteVariationOptionMutationVariables>;

/**
 * __useDeleteVariationOptionMutation__
 *
 * To run a mutation, you first call `useDeleteVariationOptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVariationOptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVariationOptionMutation, { data, loading, error }] = useDeleteVariationOptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVariationOptionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVariationOptionMutation, DeleteVariationOptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVariationOptionMutation, DeleteVariationOptionMutationVariables>(DeleteVariationOptionDocument, options);
      }
export type DeleteVariationOptionMutationHookResult = ReturnType<typeof useDeleteVariationOptionMutation>;
export type DeleteVariationOptionMutationResult = Apollo.MutationResult<DeleteVariationOptionMutation>;
export type DeleteVariationOptionMutationOptions = Apollo.BaseMutationOptions<DeleteVariationOptionMutation, DeleteVariationOptionMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    