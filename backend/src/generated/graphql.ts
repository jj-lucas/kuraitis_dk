import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  NationalizedString: ResolverTypeWrapper<NationalizedString>;
  Permission: ResolverTypeWrapper<Permission>;
  Product: ResolverTypeWrapper<Product>;
  ProductBreadcrumbs: ResolverTypeWrapper<ProductBreadcrumbs>;
  ProductImages: ResolverTypeWrapper<ProductImages>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  Variation: ResolverTypeWrapper<Variation>;
  VariationOption: ResolverTypeWrapper<VariationOption>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Book: Book;
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  NationalizedString: NationalizedString;
  Permission: Permission;
  Product: Product;
  ProductBreadcrumbs: ProductBreadcrumbs;
  ProductImages: ProductImages;
  Query: {};
  Result: Result;
  String: Scalars['String'];
  User: User;
  Variation: Variation;
  VariationOption: VariationOption;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  assignPermission?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationAssignPermissionArgs, 'permissionName' | 'userId'>>;
  createPermission?: Resolver<Maybe<ResolversTypes['Permission']>, ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'name'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'name' | 'password'>>;
  createVariation?: Resolver<Maybe<ResolversTypes['Variation']>, ParentType, ContextType, RequireFields<MutationCreateVariationArgs, 'code'>>;
  createVariationOption?: Resolver<Maybe<ResolversTypes['VariationOption']>, ParentType, ContextType, RequireFields<MutationCreateVariationOptionArgs, 'code' | 'variationId'>>;
  deletePermission?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationDeletePermissionArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  deleteVariation?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationDeleteVariationArgs, 'id'>>;
  deleteVariationOption?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationDeleteVariationOptionArgs, 'id'>>;
  signIn?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>;
  signOut?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  unassignPermission?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType, RequireFields<MutationUnassignPermissionArgs, 'permissionName' | 'userId'>>;
};

export type NationalizedStringResolvers<ContextType = any, ParentType extends ResolversParentTypes['NationalizedString'] = ResolversParentTypes['NationalizedString']> = {
  da?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Permission'] = ResolversParentTypes['Permission']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  breadcrumbs?: Resolver<Array<ResolversTypes['ProductBreadcrumbs']>, ParentType, ContextType>;
  images?: Resolver<ResolversTypes['ProductImages'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductBreadcrumbsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBreadcrumbs'] = ResolversParentTypes['ProductBreadcrumbs']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductImages'] = ResolversParentTypes['ProductImages']> = {
  parallax?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryHelloArgs, 'name'>>;
  permissions?: Resolver<Array<Maybe<ResolversTypes['Permission']>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'lang'>>;
  review?: Resolver<Maybe<ResolversTypes['NationalizedString']>, ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Variation']>>>, ParentType, ContextType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<Maybe<ResolversTypes['Permission']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Variation'] = ResolversParentTypes['Variation']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  variationOptions?: Resolver<Array<Maybe<ResolversTypes['VariationOption']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariationOptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['VariationOption'] = ResolversParentTypes['VariationOption']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Book?: BookResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NationalizedString?: NationalizedStringResolvers<ContextType>;
  Permission?: PermissionResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductBreadcrumbs?: ProductBreadcrumbsResolvers<ContextType>;
  ProductImages?: ProductImagesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Variation?: VariationResolvers<ContextType>;
  VariationOption?: VariationOptionResolvers<ContextType>;
};

