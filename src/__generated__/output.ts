import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Decimal: { input: any; output: any; }
};

export type Case = {
  imagePath: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
  oldPriceEUR?: Maybe<Scalars['Decimal']['output']>;
  oldPriceRUB?: Maybe<Scalars['Decimal']['output']>;
  oldPriceUSD?: Maybe<Scalars['Decimal']['output']>;
  priceEUR: Scalars['Decimal']['output'];
  priceRUB: Scalars['Decimal']['output'];
  priceUSD: Scalars['Decimal']['output'];
  slug: Scalars['String']['output'];
};

export type CaseInfo = {
  imagePath: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Category = {
  cases: Array<Case>;
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
};

export enum Currency {
  Eur = 'EUR',
  Rub = 'RUB',
  Usd = 'USD'
}

export type CurrentCase = {
  imagePath: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
  oldPriceEUR?: Maybe<Scalars['Decimal']['output']>;
  oldPriceRUB?: Maybe<Scalars['Decimal']['output']>;
  oldPriceUSD?: Maybe<Scalars['Decimal']['output']>;
  priceEUR: Scalars['Decimal']['output'];
  priceRUB: Scalars['Decimal']['output'];
  priceUSD: Scalars['Decimal']['output'];
  skins: Array<Skin>;
  slug: Scalars['String']['output'];
};

export type CurrentSkin = {
  cases: Array<Case>;
  imagePath: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
  qualities: Array<Quality>;
  rarity: Rarity;
  similarSkins: Array<Skin>;
};

export type CurrentUser = {
  avatarPath: Scalars['String']['output'];
  balance: Scalars['Decimal']['output'];
  currency: Currency;
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type Mutation = {
  contract: Win;
  logout: Scalars['Boolean']['output'];
  openCase: Array<Array<Skin>>;
  requestWin: Scalars['Int']['output'];
  sellAllWins: Scalars['Decimal']['output'];
  sellWins: Array<Scalars['Int']['output']>;
  updateTradeLink: Scalars['String']['output'];
};


export type MutationContractArgs = {
  items: Array<Scalars['Int']['input']>;
};


export type MutationOpenCaseArgs = {
  slug: Scalars['String']['input'];
  times: Scalars['Int']['input'];
};


export type MutationRequestWinArgs = {
  winId: Scalars['Int']['input'];
};


export type MutationSellWinsArgs = {
  items: Array<Scalars['Int']['input']>;
};


export type MutationUpdateTradeLinkArgs = {
  tradeLink: Scalars['String']['input'];
};

export enum Origin {
  Case = 'CASE',
  Contract = 'CONTRACT',
  Upgrade = 'UPGRADE'
}

export type Quality = {
  priceEUR: Scalars['Decimal']['output'];
  priceRUB: Scalars['Decimal']['output'];
  priceUSD: Scalars['Decimal']['output'];
  statTrakPriceEUR: Scalars['Decimal']['output'];
  statTrakPriceRUB: Scalars['Decimal']['output'];
  statTrakPriceUSD: Scalars['Decimal']['output'];
  wear: Wear;
};

export type Query = {
  catalog: Array<Category>;
  currentCase: CurrentCase;
  currentSkin: CurrentSkin;
  currentUser: CurrentUser;
  statistics: Statistics;
  user: User;
  wins: Wins;
};


export type QueryCurrentCaseArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCurrentSkinArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryWinsArgs = {
  query: WinsQueryInput;
};

export enum Rarity {
  Classified = 'CLASSIFIED',
  Consumer = 'CONSUMER',
  Covert = 'COVERT',
  Gold = 'GOLD',
  Industrial = 'INDUSTRIAL',
  MilSpec = 'MIL_SPEC',
  Restricted = 'RESTRICTED'
}

export type Skin = {
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  isStatTrak?: Maybe<Scalars['Boolean']['output']>;
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
  priceEUR?: Maybe<Scalars['Decimal']['output']>;
  priceRUB?: Maybe<Scalars['Decimal']['output']>;
  priceUSD?: Maybe<Scalars['Decimal']['output']>;
  rarity: Rarity;
  status?: Maybe<Status>;
  wear?: Maybe<Wear>;
  win?: Maybe<Win>;
};

export enum Stat {
  Case = 'CASE',
  Contract = 'CONTRACT',
  Win = 'WIN'
}

export type Statistic = {
  increment: Scalars['Int']['output'];
  stat: Stat;
};

export type Statistics = {
  cases: Scalars['Int']['output'];
  contracts: Scalars['Int']['output'];
  wins: Scalars['Int']['output'];
};

export enum Status {
  Contracted = 'CONTRACTED',
  Received = 'RECEIVED',
  Requested = 'REQUESTED',
  Sold = 'SOLD',
  Upgraded = 'UPGRADED',
  Won = 'WON'
}

export type Subscription = {
  liveStatistics?: Maybe<Statistic>;
  liveWins?: Maybe<Win>;
};


export type SubscriptionLiveWinsArgs = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  avatarPath: Scalars['String']['output'];
  balance?: Maybe<Scalars['Decimal']['output']>;
  currency?: Maybe<Currency>;
  id: Scalars['Int']['output'];
  steamId: Scalars['String']['output'];
  tradeLink?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserInfo = {
  avatarPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export enum Wear {
  BattleScarred = 'BATTLE_SCARRED',
  FactoryNew = 'FACTORY_NEW',
  FieldTested = 'FIELD_TESTED',
  MinimalWear = 'MINIMAL_WEAR',
  WellWorn = 'WELL_WORN'
}

export type Win = {
  case?: Maybe<CaseInfo>;
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  isStatTrak: Scalars['Boolean']['output'];
  nameEn: Scalars['String']['output'];
  nameRu: Scalars['String']['output'];
  origin: Origin;
  priceEUR: Scalars['Decimal']['output'];
  priceRUB: Scalars['Decimal']['output'];
  priceUSD: Scalars['Decimal']['output'];
  rarity: Rarity;
  skinId: Scalars['Int']['output'];
  status: Status;
  user: UserInfo;
  wear: Wear;
};

export type Wins = {
  count: Scalars['Int']['output'];
  wins: Array<Win>;
};

export type WinsQueryInput = {
  isNotUser?: InputMaybe<Scalars['Boolean']['input']>;
  isUserRequired?: InputMaybe<Scalars['Boolean']['input']>;
  page: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
  status?: InputMaybe<Status>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type OpenCaseMutationVariables = Exact<{
  slug: Scalars['String']['input'];
  times: Scalars['Int']['input'];
}>;


export type OpenCaseMutation = { openCase: Array<Array<{ nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, win?: { id: number, priceRUB: any, priceUSD: any, priceEUR: any } | null }>> };

export type ContractMutationVariables = Exact<{
  items: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type ContractMutation = { contract: { id: number, skinId: number, nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, priceRUB: any, priceUSD: any, priceEUR: any, isStatTrak: boolean } };

export type UpdateTradeLinkMutationVariables = Exact<{
  tradeLink: Scalars['String']['input'];
}>;


export type UpdateTradeLinkMutation = { updateTradeLink: string };

export type RequestWinMutationVariables = Exact<{
  winId: Scalars['Int']['input'];
}>;


export type RequestWinMutation = { requestWin: number };

export type SellAllWinsMutationVariables = Exact<{ [key: string]: never; }>;


export type SellAllWinsMutation = { sellAllWins: any };

export type SellWinsMutationVariables = Exact<{
  items: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type SellWinsMutation = { sellWins: Array<number> };

export type CurrentCaseQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CurrentCaseQuery = { currentCase: { nameRu: string, nameEn: string, slug: string, imagePath: string, oldPriceRUB?: any | null, oldPriceUSD?: any | null, oldPriceEUR?: any | null, priceRUB: any, priceUSD: any, priceEUR: any, skins: Array<{ id: number, nameRu: string, nameEn: string, imagePath: string, rarity: Rarity }> } };

export type CatalogQueryVariables = Exact<{ [key: string]: never; }>;


export type CatalogQuery = { catalog: Array<{ nameRu: string, nameEn: string, cases: Array<{ nameRu: string, nameEn: string, slug: string, imagePath: string, oldPriceRUB?: any | null, oldPriceUSD?: any | null, oldPriceEUR?: any | null, priceRUB: any, priceUSD: any, priceEUR: any }> }> };

export type CurrentSkinQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CurrentSkinQuery = { currentSkin: { nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, qualities: Array<{ priceRUB: any, priceUSD: any, priceEUR: any, statTrakPriceRUB: any, statTrakPriceUSD: any, statTrakPriceEUR: any, wear: Wear }>, cases: Array<{ nameRu: string, nameEn: string, slug: string, imagePath: string, oldPriceRUB?: any | null, oldPriceUSD?: any | null, oldPriceEUR?: any | null, priceRUB: any, priceUSD: any, priceEUR: any }>, similarSkins: Array<{ id: number, nameRu: string, nameEn: string, imagePath: string, rarity: Rarity }> } };

export type StatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type StatisticsQuery = { statistics: { wins: number, cases: number, contracts: number } };

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { user: { id: number, steamId: string, username: string, avatarPath: string, balance?: any | null, tradeLink?: string | null, currency?: Currency | null } };

export type WinsQueryVariables = Exact<{
  query: WinsQueryInput;
}>;


export type WinsQuery = { wins: { wins: Array<{ nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, origin: Origin, case?: { imagePath: string } | null, user: { id: number, username: string, avatarPath: string } }> } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { currentUser: { id: number, username: string, avatarPath: string, balance: any, currency: Currency } };

export type ContractWinsQueryVariables = Exact<{
  query: WinsQueryInput;
}>;


export type ContractWinsQuery = { wins: { count: number, wins: Array<{ id: number, skinId: number, nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, priceRUB: any, priceUSD: any, priceEUR: any, isStatTrak: boolean }> } };

export type UserWinsQueryVariables = Exact<{
  query: WinsQueryInput;
}>;


export type UserWinsQuery = { wins: { count: number, wins: Array<{ id: number, nameRu: string, nameEn: string, imagePath: string, priceRUB: any, priceUSD: any, priceEUR: any, rarity: Rarity, wear: Wear, origin: Origin, status: Status, isStatTrak: boolean, case?: { imagePath: string, slug: string } | null }> } };

export type LiveStatisticsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LiveStatisticsSubscription = { liveStatistics?: { increment: number, stat: Stat } | null };

export type LiveWinsSubscriptionVariables = Exact<{
  userId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LiveWinsSubscription = { liveWins?: { nameRu: string, nameEn: string, imagePath: string, rarity: Rarity, origin: Origin, case?: { imagePath: string } | null, user: { id: number, username: string, avatarPath: string } } | null };


export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const OpenCaseDocument = gql`
    mutation OpenCase($slug: String!, $times: Int!) {
  openCase(slug: $slug, times: $times) {
    nameRu
    nameEn
    imagePath
    rarity
    win {
      id
      priceRUB
      priceUSD
      priceEUR
    }
  }
}
    `;
export type OpenCaseMutationFn = Apollo.MutationFunction<OpenCaseMutation, OpenCaseMutationVariables>;

/**
 * __useOpenCaseMutation__
 *
 * To run a mutation, you first call `useOpenCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOpenCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [openCaseMutation, { data, loading, error }] = useOpenCaseMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      times: // value for 'times'
 *   },
 * });
 */
export function useOpenCaseMutation(baseOptions?: Apollo.MutationHookOptions<OpenCaseMutation, OpenCaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OpenCaseMutation, OpenCaseMutationVariables>(OpenCaseDocument, options);
      }
export type OpenCaseMutationHookResult = ReturnType<typeof useOpenCaseMutation>;
export type OpenCaseMutationResult = Apollo.MutationResult<OpenCaseMutation>;
export type OpenCaseMutationOptions = Apollo.BaseMutationOptions<OpenCaseMutation, OpenCaseMutationVariables>;
export const ContractDocument = gql`
    mutation Contract($items: [Int!]!) {
  contract(items: $items) {
    id
    skinId
    nameRu
    nameEn
    imagePath
    rarity
    priceRUB
    priceUSD
    priceEUR
    isStatTrak
  }
}
    `;
export type ContractMutationFn = Apollo.MutationFunction<ContractMutation, ContractMutationVariables>;

/**
 * __useContractMutation__
 *
 * To run a mutation, you first call `useContractMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContractMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contractMutation, { data, loading, error }] = useContractMutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useContractMutation(baseOptions?: Apollo.MutationHookOptions<ContractMutation, ContractMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContractMutation, ContractMutationVariables>(ContractDocument, options);
      }
export type ContractMutationHookResult = ReturnType<typeof useContractMutation>;
export type ContractMutationResult = Apollo.MutationResult<ContractMutation>;
export type ContractMutationOptions = Apollo.BaseMutationOptions<ContractMutation, ContractMutationVariables>;
export const UpdateTradeLinkDocument = gql`
    mutation UpdateTradeLink($tradeLink: String!) {
  updateTradeLink(tradeLink: $tradeLink)
}
    `;
export type UpdateTradeLinkMutationFn = Apollo.MutationFunction<UpdateTradeLinkMutation, UpdateTradeLinkMutationVariables>;

/**
 * __useUpdateTradeLinkMutation__
 *
 * To run a mutation, you first call `useUpdateTradeLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTradeLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTradeLinkMutation, { data, loading, error }] = useUpdateTradeLinkMutation({
 *   variables: {
 *      tradeLink: // value for 'tradeLink'
 *   },
 * });
 */
export function useUpdateTradeLinkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTradeLinkMutation, UpdateTradeLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTradeLinkMutation, UpdateTradeLinkMutationVariables>(UpdateTradeLinkDocument, options);
      }
export type UpdateTradeLinkMutationHookResult = ReturnType<typeof useUpdateTradeLinkMutation>;
export type UpdateTradeLinkMutationResult = Apollo.MutationResult<UpdateTradeLinkMutation>;
export type UpdateTradeLinkMutationOptions = Apollo.BaseMutationOptions<UpdateTradeLinkMutation, UpdateTradeLinkMutationVariables>;
export const RequestWinDocument = gql`
    mutation RequestWin($winId: Int!) {
  requestWin(winId: $winId)
}
    `;
export type RequestWinMutationFn = Apollo.MutationFunction<RequestWinMutation, RequestWinMutationVariables>;

/**
 * __useRequestWinMutation__
 *
 * To run a mutation, you first call `useRequestWinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestWinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestWinMutation, { data, loading, error }] = useRequestWinMutation({
 *   variables: {
 *      winId: // value for 'winId'
 *   },
 * });
 */
export function useRequestWinMutation(baseOptions?: Apollo.MutationHookOptions<RequestWinMutation, RequestWinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestWinMutation, RequestWinMutationVariables>(RequestWinDocument, options);
      }
export type RequestWinMutationHookResult = ReturnType<typeof useRequestWinMutation>;
export type RequestWinMutationResult = Apollo.MutationResult<RequestWinMutation>;
export type RequestWinMutationOptions = Apollo.BaseMutationOptions<RequestWinMutation, RequestWinMutationVariables>;
export const SellAllWinsDocument = gql`
    mutation SellAllWins {
  sellAllWins
}
    `;
export type SellAllWinsMutationFn = Apollo.MutationFunction<SellAllWinsMutation, SellAllWinsMutationVariables>;

/**
 * __useSellAllWinsMutation__
 *
 * To run a mutation, you first call `useSellAllWinsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellAllWinsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellAllWinsMutation, { data, loading, error }] = useSellAllWinsMutation({
 *   variables: {
 *   },
 * });
 */
export function useSellAllWinsMutation(baseOptions?: Apollo.MutationHookOptions<SellAllWinsMutation, SellAllWinsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SellAllWinsMutation, SellAllWinsMutationVariables>(SellAllWinsDocument, options);
      }
export type SellAllWinsMutationHookResult = ReturnType<typeof useSellAllWinsMutation>;
export type SellAllWinsMutationResult = Apollo.MutationResult<SellAllWinsMutation>;
export type SellAllWinsMutationOptions = Apollo.BaseMutationOptions<SellAllWinsMutation, SellAllWinsMutationVariables>;
export const SellWinsDocument = gql`
    mutation SellWins($items: [Int!]!) {
  sellWins(items: $items)
}
    `;
export type SellWinsMutationFn = Apollo.MutationFunction<SellWinsMutation, SellWinsMutationVariables>;

/**
 * __useSellWinsMutation__
 *
 * To run a mutation, you first call `useSellWinsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSellWinsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sellWinsMutation, { data, loading, error }] = useSellWinsMutation({
 *   variables: {
 *      items: // value for 'items'
 *   },
 * });
 */
export function useSellWinsMutation(baseOptions?: Apollo.MutationHookOptions<SellWinsMutation, SellWinsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SellWinsMutation, SellWinsMutationVariables>(SellWinsDocument, options);
      }
export type SellWinsMutationHookResult = ReturnType<typeof useSellWinsMutation>;
export type SellWinsMutationResult = Apollo.MutationResult<SellWinsMutation>;
export type SellWinsMutationOptions = Apollo.BaseMutationOptions<SellWinsMutation, SellWinsMutationVariables>;
export const CurrentCaseDocument = gql`
    query CurrentCase($slug: String!) {
  currentCase(slug: $slug) {
    nameRu
    nameEn
    slug
    imagePath
    oldPriceRUB
    oldPriceUSD
    oldPriceEUR
    priceRUB
    priceUSD
    priceEUR
    skins {
      id
      nameRu
      nameEn
      imagePath
      rarity
    }
  }
}
    `;

/**
 * __useCurrentCaseQuery__
 *
 * To run a query within a React component, call `useCurrentCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentCaseQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCurrentCaseQuery(baseOptions: Apollo.QueryHookOptions<CurrentCaseQuery, CurrentCaseQueryVariables> & ({ variables: CurrentCaseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentCaseQuery, CurrentCaseQueryVariables>(CurrentCaseDocument, options);
      }
export function useCurrentCaseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentCaseQuery, CurrentCaseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentCaseQuery, CurrentCaseQueryVariables>(CurrentCaseDocument, options);
        }
export function useCurrentCaseSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentCaseQuery, CurrentCaseQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentCaseQuery, CurrentCaseQueryVariables>(CurrentCaseDocument, options);
        }
export type CurrentCaseQueryHookResult = ReturnType<typeof useCurrentCaseQuery>;
export type CurrentCaseLazyQueryHookResult = ReturnType<typeof useCurrentCaseLazyQuery>;
export type CurrentCaseSuspenseQueryHookResult = ReturnType<typeof useCurrentCaseSuspenseQuery>;
export type CurrentCaseQueryResult = Apollo.QueryResult<CurrentCaseQuery, CurrentCaseQueryVariables>;
export const CatalogDocument = gql`
    query Catalog {
  catalog {
    nameRu
    nameEn
    cases {
      nameRu
      nameEn
      slug
      imagePath
      oldPriceRUB
      oldPriceUSD
      oldPriceEUR
      priceRUB
      priceUSD
      priceEUR
    }
  }
}
    `;

/**
 * __useCatalogQuery__
 *
 * To run a query within a React component, call `useCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatalogQuery(baseOptions?: Apollo.QueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
      }
export function useCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export function useCatalogSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CatalogQuery, CatalogQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CatalogQuery, CatalogQueryVariables>(CatalogDocument, options);
        }
export type CatalogQueryHookResult = ReturnType<typeof useCatalogQuery>;
export type CatalogLazyQueryHookResult = ReturnType<typeof useCatalogLazyQuery>;
export type CatalogSuspenseQueryHookResult = ReturnType<typeof useCatalogSuspenseQuery>;
export type CatalogQueryResult = Apollo.QueryResult<CatalogQuery, CatalogQueryVariables>;
export const CurrentSkinDocument = gql`
    query CurrentSkin($id: Int!) {
  currentSkin(id: $id) {
    nameRu
    nameEn
    imagePath
    rarity
    qualities {
      priceRUB
      priceUSD
      priceEUR
      statTrakPriceRUB
      statTrakPriceUSD
      statTrakPriceEUR
      wear
    }
    cases {
      nameRu
      nameEn
      slug
      imagePath
      oldPriceRUB
      oldPriceUSD
      oldPriceEUR
      priceRUB
      priceUSD
      priceEUR
    }
    similarSkins {
      id
      nameRu
      nameEn
      imagePath
      rarity
    }
  }
}
    `;

/**
 * __useCurrentSkinQuery__
 *
 * To run a query within a React component, call `useCurrentSkinQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentSkinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentSkinQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCurrentSkinQuery(baseOptions: Apollo.QueryHookOptions<CurrentSkinQuery, CurrentSkinQueryVariables> & ({ variables: CurrentSkinQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentSkinQuery, CurrentSkinQueryVariables>(CurrentSkinDocument, options);
      }
export function useCurrentSkinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentSkinQuery, CurrentSkinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentSkinQuery, CurrentSkinQueryVariables>(CurrentSkinDocument, options);
        }
export function useCurrentSkinSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentSkinQuery, CurrentSkinQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentSkinQuery, CurrentSkinQueryVariables>(CurrentSkinDocument, options);
        }
export type CurrentSkinQueryHookResult = ReturnType<typeof useCurrentSkinQuery>;
export type CurrentSkinLazyQueryHookResult = ReturnType<typeof useCurrentSkinLazyQuery>;
export type CurrentSkinSuspenseQueryHookResult = ReturnType<typeof useCurrentSkinSuspenseQuery>;
export type CurrentSkinQueryResult = Apollo.QueryResult<CurrentSkinQuery, CurrentSkinQueryVariables>;
export const StatisticsDocument = gql`
    query Statistics {
  statistics {
    wins
    cases
    contracts
  }
}
    `;

/**
 * __useStatisticsQuery__
 *
 * To run a query within a React component, call `useStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatisticsQuery(baseOptions?: Apollo.QueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
      }
export function useStatisticsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
        }
export function useStatisticsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StatisticsQuery, StatisticsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StatisticsQuery, StatisticsQueryVariables>(StatisticsDocument, options);
        }
export type StatisticsQueryHookResult = ReturnType<typeof useStatisticsQuery>;
export type StatisticsLazyQueryHookResult = ReturnType<typeof useStatisticsLazyQuery>;
export type StatisticsSuspenseQueryHookResult = ReturnType<typeof useStatisticsSuspenseQuery>;
export type StatisticsQueryResult = Apollo.QueryResult<StatisticsQuery, StatisticsQueryVariables>;
export const UserDocument = gql`
    query User($id: Int!) {
  user(id: $id) {
    id
    steamId
    username
    avatarPath
    balance
    tradeLink
    currency
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> & ({ variables: UserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const WinsDocument = gql`
    query Wins($query: WinsQueryInput!) {
  wins(query: $query) {
    wins {
      nameRu
      nameEn
      imagePath
      rarity
      case {
        imagePath
      }
      user {
        id
        username
        avatarPath
      }
      origin
    }
  }
}
    `;

/**
 * __useWinsQuery__
 *
 * To run a query within a React component, call `useWinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useWinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWinsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useWinsQuery(baseOptions: Apollo.QueryHookOptions<WinsQuery, WinsQueryVariables> & ({ variables: WinsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WinsQuery, WinsQueryVariables>(WinsDocument, options);
      }
export function useWinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WinsQuery, WinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WinsQuery, WinsQueryVariables>(WinsDocument, options);
        }
export function useWinsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WinsQuery, WinsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WinsQuery, WinsQueryVariables>(WinsDocument, options);
        }
export type WinsQueryHookResult = ReturnType<typeof useWinsQuery>;
export type WinsLazyQueryHookResult = ReturnType<typeof useWinsLazyQuery>;
export type WinsSuspenseQueryHookResult = ReturnType<typeof useWinsSuspenseQuery>;
export type WinsQueryResult = Apollo.QueryResult<WinsQuery, WinsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    username
    avatarPath
    balance
    currency
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
export function useCurrentUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserSuspenseQueryHookResult = ReturnType<typeof useCurrentUserSuspenseQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const ContractWinsDocument = gql`
    query ContractWins($query: WinsQueryInput!) {
  wins(query: $query) {
    wins {
      id
      skinId
      nameRu
      nameEn
      imagePath
      rarity
      priceRUB
      priceUSD
      priceEUR
      isStatTrak
    }
    count
  }
}
    `;

/**
 * __useContractWinsQuery__
 *
 * To run a query within a React component, call `useContractWinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContractWinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContractWinsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useContractWinsQuery(baseOptions: Apollo.QueryHookOptions<ContractWinsQuery, ContractWinsQueryVariables> & ({ variables: ContractWinsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContractWinsQuery, ContractWinsQueryVariables>(ContractWinsDocument, options);
      }
export function useContractWinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContractWinsQuery, ContractWinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContractWinsQuery, ContractWinsQueryVariables>(ContractWinsDocument, options);
        }
export function useContractWinsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ContractWinsQuery, ContractWinsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ContractWinsQuery, ContractWinsQueryVariables>(ContractWinsDocument, options);
        }
export type ContractWinsQueryHookResult = ReturnType<typeof useContractWinsQuery>;
export type ContractWinsLazyQueryHookResult = ReturnType<typeof useContractWinsLazyQuery>;
export type ContractWinsSuspenseQueryHookResult = ReturnType<typeof useContractWinsSuspenseQuery>;
export type ContractWinsQueryResult = Apollo.QueryResult<ContractWinsQuery, ContractWinsQueryVariables>;
export const UserWinsDocument = gql`
    query UserWins($query: WinsQueryInput!) {
  wins(query: $query) {
    wins {
      id
      nameRu
      nameEn
      imagePath
      priceRUB
      priceUSD
      priceEUR
      rarity
      wear
      case {
        imagePath
        slug
      }
      origin
      status
      isStatTrak
    }
    count
  }
}
    `;

/**
 * __useUserWinsQuery__
 *
 * To run a query within a React component, call `useUserWinsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserWinsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserWinsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useUserWinsQuery(baseOptions: Apollo.QueryHookOptions<UserWinsQuery, UserWinsQueryVariables> & ({ variables: UserWinsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserWinsQuery, UserWinsQueryVariables>(UserWinsDocument, options);
      }
export function useUserWinsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserWinsQuery, UserWinsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserWinsQuery, UserWinsQueryVariables>(UserWinsDocument, options);
        }
export function useUserWinsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<UserWinsQuery, UserWinsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserWinsQuery, UserWinsQueryVariables>(UserWinsDocument, options);
        }
export type UserWinsQueryHookResult = ReturnType<typeof useUserWinsQuery>;
export type UserWinsLazyQueryHookResult = ReturnType<typeof useUserWinsLazyQuery>;
export type UserWinsSuspenseQueryHookResult = ReturnType<typeof useUserWinsSuspenseQuery>;
export type UserWinsQueryResult = Apollo.QueryResult<UserWinsQuery, UserWinsQueryVariables>;
export const LiveStatisticsDocument = gql`
    subscription LiveStatistics {
  liveStatistics {
    increment
    stat
  }
}
    `;

/**
 * __useLiveStatisticsSubscription__
 *
 * To run a query within a React component, call `useLiveStatisticsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLiveStatisticsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveStatisticsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useLiveStatisticsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LiveStatisticsSubscription, LiveStatisticsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LiveStatisticsSubscription, LiveStatisticsSubscriptionVariables>(LiveStatisticsDocument, options);
      }
export type LiveStatisticsSubscriptionHookResult = ReturnType<typeof useLiveStatisticsSubscription>;
export type LiveStatisticsSubscriptionResult = Apollo.SubscriptionResult<LiveStatisticsSubscription>;
export const LiveWinsDocument = gql`
    subscription LiveWins($userId: Int) {
  liveWins(userId: $userId) {
    nameRu
    nameEn
    imagePath
    rarity
    case {
      imagePath
    }
    user {
      id
      username
      avatarPath
    }
    origin
  }
}
    `;

/**
 * __useLiveWinsSubscription__
 *
 * To run a query within a React component, call `useLiveWinsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLiveWinsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveWinsSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useLiveWinsSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LiveWinsSubscription, LiveWinsSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LiveWinsSubscription, LiveWinsSubscriptionVariables>(LiveWinsDocument, options);
      }
export type LiveWinsSubscriptionHookResult = ReturnType<typeof useLiveWinsSubscription>;
export type LiveWinsSubscriptionResult = Apollo.SubscriptionResult<LiveWinsSubscription>;