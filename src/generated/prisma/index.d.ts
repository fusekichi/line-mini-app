
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RichMenu
 * 
 */
export type RichMenu = $Result.DefaultSelection<Prisma.$RichMenuPayload>
/**
 * Model UserRichMenu
 * 
 */
export type UserRichMenu = $Result.DefaultSelection<Prisma.$UserRichMenuPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.richMenu`: Exposes CRUD operations for the **RichMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RichMenus
    * const richMenus = await prisma.richMenu.findMany()
    * ```
    */
  get richMenu(): Prisma.RichMenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRichMenu`: Exposes CRUD operations for the **UserRichMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRichMenus
    * const userRichMenus = await prisma.userRichMenu.findMany()
    * ```
    */
  get userRichMenu(): Prisma.UserRichMenuDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RichMenu: 'RichMenu',
    UserRichMenu: 'UserRichMenu'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "richMenu" | "userRichMenu"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RichMenu: {
        payload: Prisma.$RichMenuPayload<ExtArgs>
        fields: Prisma.RichMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RichMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RichMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          findFirst: {
            args: Prisma.RichMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RichMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          findMany: {
            args: Prisma.RichMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>[]
          }
          create: {
            args: Prisma.RichMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          createMany: {
            args: Prisma.RichMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RichMenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>[]
          }
          delete: {
            args: Prisma.RichMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          update: {
            args: Prisma.RichMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          deleteMany: {
            args: Prisma.RichMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RichMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RichMenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>[]
          }
          upsert: {
            args: Prisma.RichMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichMenuPayload>
          }
          aggregate: {
            args: Prisma.RichMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRichMenu>
          }
          groupBy: {
            args: Prisma.RichMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<RichMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.RichMenuCountArgs<ExtArgs>
            result: $Utils.Optional<RichMenuCountAggregateOutputType> | number
          }
        }
      }
      UserRichMenu: {
        payload: Prisma.$UserRichMenuPayload<ExtArgs>
        fields: Prisma.UserRichMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRichMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRichMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          findFirst: {
            args: Prisma.UserRichMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRichMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          findMany: {
            args: Prisma.UserRichMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>[]
          }
          create: {
            args: Prisma.UserRichMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          createMany: {
            args: Prisma.UserRichMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRichMenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>[]
          }
          delete: {
            args: Prisma.UserRichMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          update: {
            args: Prisma.UserRichMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          deleteMany: {
            args: Prisma.UserRichMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRichMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRichMenuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>[]
          }
          upsert: {
            args: Prisma.UserRichMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRichMenuPayload>
          }
          aggregate: {
            args: Prisma.UserRichMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRichMenu>
          }
          groupBy: {
            args: Prisma.UserRichMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRichMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRichMenuCountArgs<ExtArgs>
            result: $Utils.Optional<UserRichMenuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    richMenu?: RichMenuOmit
    userRichMenu?: UserRichMenuOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RichMenuCountOutputType
   */

  export type RichMenuCountOutputType = {
    userRichMenus: number
  }

  export type RichMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRichMenus?: boolean | RichMenuCountOutputTypeCountUserRichMenusArgs
  }

  // Custom InputTypes
  /**
   * RichMenuCountOutputType without action
   */
  export type RichMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenuCountOutputType
     */
    select?: RichMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RichMenuCountOutputType without action
   */
  export type RichMenuCountOutputTypeCountUserRichMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRichMenuWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    lineUserId: string | null
    displayName: string | null
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    lineUserId: string | null
    displayName: string | null
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lineUserId: number
    displayName: number
    pictureUrl: number
    statusMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    lineUserId?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lineUserId?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lineUserId?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    lineUserId: string
    displayName: string
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRichMenu?: boolean | User$userRichMenuArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUserId?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    lineUserId?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lineUserId" | "displayName" | "pictureUrl" | "statusMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRichMenu?: boolean | User$userRichMenuArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userRichMenu: Prisma.$UserRichMenuPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lineUserId: string
      displayName: string
      pictureUrl: string | null
      statusMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRichMenu<T extends User$userRichMenuArgs<ExtArgs> = {}>(args?: Subset<T, User$userRichMenuArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly lineUserId: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly pictureUrl: FieldRef<"User", 'String'>
    readonly statusMessage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userRichMenu
   */
  export type User$userRichMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    where?: UserRichMenuWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RichMenu
   */

  export type AggregateRichMenu = {
    _count: RichMenuCountAggregateOutputType | null
    _min: RichMenuMinAggregateOutputType | null
    _max: RichMenuMaxAggregateOutputType | null
  }

  export type RichMenuMinAggregateOutputType = {
    id: string | null
    name: string | null
    richMenuId: string | null
    description: string | null
    imageUrl: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RichMenuMaxAggregateOutputType = {
    id: string | null
    name: string | null
    richMenuId: string | null
    description: string | null
    imageUrl: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RichMenuCountAggregateOutputType = {
    id: number
    name: number
    richMenuId: number
    description: number
    imageUrl: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RichMenuMinAggregateInputType = {
    id?: true
    name?: true
    richMenuId?: true
    description?: true
    imageUrl?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RichMenuMaxAggregateInputType = {
    id?: true
    name?: true
    richMenuId?: true
    description?: true
    imageUrl?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RichMenuCountAggregateInputType = {
    id?: true
    name?: true
    richMenuId?: true
    description?: true
    imageUrl?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RichMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RichMenu to aggregate.
     */
    where?: RichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichMenus to fetch.
     */
    orderBy?: RichMenuOrderByWithRelationInput | RichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RichMenus
    **/
    _count?: true | RichMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RichMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RichMenuMaxAggregateInputType
  }

  export type GetRichMenuAggregateType<T extends RichMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateRichMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRichMenu[P]>
      : GetScalarType<T[P], AggregateRichMenu[P]>
  }




  export type RichMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RichMenuWhereInput
    orderBy?: RichMenuOrderByWithAggregationInput | RichMenuOrderByWithAggregationInput[]
    by: RichMenuScalarFieldEnum[] | RichMenuScalarFieldEnum
    having?: RichMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RichMenuCountAggregateInputType | true
    _min?: RichMenuMinAggregateInputType
    _max?: RichMenuMaxAggregateInputType
  }

  export type RichMenuGroupByOutputType = {
    id: string
    name: string
    richMenuId: string
    description: string | null
    imageUrl: string | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: RichMenuCountAggregateOutputType | null
    _min: RichMenuMinAggregateOutputType | null
    _max: RichMenuMaxAggregateOutputType | null
  }

  type GetRichMenuGroupByPayload<T extends RichMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RichMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RichMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RichMenuGroupByOutputType[P]>
            : GetScalarType<T[P], RichMenuGroupByOutputType[P]>
        }
      >
    >


  export type RichMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    richMenuId?: boolean
    description?: boolean
    imageUrl?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userRichMenus?: boolean | RichMenu$userRichMenusArgs<ExtArgs>
    _count?: boolean | RichMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["richMenu"]>

  export type RichMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    richMenuId?: boolean
    description?: boolean
    imageUrl?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["richMenu"]>

  export type RichMenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    richMenuId?: boolean
    description?: boolean
    imageUrl?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["richMenu"]>

  export type RichMenuSelectScalar = {
    id?: boolean
    name?: boolean
    richMenuId?: boolean
    description?: boolean
    imageUrl?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RichMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "richMenuId" | "description" | "imageUrl" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["richMenu"]>
  export type RichMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRichMenus?: boolean | RichMenu$userRichMenusArgs<ExtArgs>
    _count?: boolean | RichMenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RichMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RichMenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RichMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RichMenu"
    objects: {
      userRichMenus: Prisma.$UserRichMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      richMenuId: string
      description: string | null
      imageUrl: string | null
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["richMenu"]>
    composites: {}
  }

  type RichMenuGetPayload<S extends boolean | null | undefined | RichMenuDefaultArgs> = $Result.GetResult<Prisma.$RichMenuPayload, S>

  type RichMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RichMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RichMenuCountAggregateInputType | true
    }

  export interface RichMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RichMenu'], meta: { name: 'RichMenu' } }
    /**
     * Find zero or one RichMenu that matches the filter.
     * @param {RichMenuFindUniqueArgs} args - Arguments to find a RichMenu
     * @example
     * // Get one RichMenu
     * const richMenu = await prisma.richMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RichMenuFindUniqueArgs>(args: SelectSubset<T, RichMenuFindUniqueArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RichMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RichMenuFindUniqueOrThrowArgs} args - Arguments to find a RichMenu
     * @example
     * // Get one RichMenu
     * const richMenu = await prisma.richMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RichMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, RichMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RichMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuFindFirstArgs} args - Arguments to find a RichMenu
     * @example
     * // Get one RichMenu
     * const richMenu = await prisma.richMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RichMenuFindFirstArgs>(args?: SelectSubset<T, RichMenuFindFirstArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RichMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuFindFirstOrThrowArgs} args - Arguments to find a RichMenu
     * @example
     * // Get one RichMenu
     * const richMenu = await prisma.richMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RichMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, RichMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RichMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RichMenus
     * const richMenus = await prisma.richMenu.findMany()
     * 
     * // Get first 10 RichMenus
     * const richMenus = await prisma.richMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const richMenuWithIdOnly = await prisma.richMenu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RichMenuFindManyArgs>(args?: SelectSubset<T, RichMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RichMenu.
     * @param {RichMenuCreateArgs} args - Arguments to create a RichMenu.
     * @example
     * // Create one RichMenu
     * const RichMenu = await prisma.richMenu.create({
     *   data: {
     *     // ... data to create a RichMenu
     *   }
     * })
     * 
     */
    create<T extends RichMenuCreateArgs>(args: SelectSubset<T, RichMenuCreateArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RichMenus.
     * @param {RichMenuCreateManyArgs} args - Arguments to create many RichMenus.
     * @example
     * // Create many RichMenus
     * const richMenu = await prisma.richMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RichMenuCreateManyArgs>(args?: SelectSubset<T, RichMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RichMenus and returns the data saved in the database.
     * @param {RichMenuCreateManyAndReturnArgs} args - Arguments to create many RichMenus.
     * @example
     * // Create many RichMenus
     * const richMenu = await prisma.richMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RichMenus and only return the `id`
     * const richMenuWithIdOnly = await prisma.richMenu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RichMenuCreateManyAndReturnArgs>(args?: SelectSubset<T, RichMenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RichMenu.
     * @param {RichMenuDeleteArgs} args - Arguments to delete one RichMenu.
     * @example
     * // Delete one RichMenu
     * const RichMenu = await prisma.richMenu.delete({
     *   where: {
     *     // ... filter to delete one RichMenu
     *   }
     * })
     * 
     */
    delete<T extends RichMenuDeleteArgs>(args: SelectSubset<T, RichMenuDeleteArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RichMenu.
     * @param {RichMenuUpdateArgs} args - Arguments to update one RichMenu.
     * @example
     * // Update one RichMenu
     * const richMenu = await prisma.richMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RichMenuUpdateArgs>(args: SelectSubset<T, RichMenuUpdateArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RichMenus.
     * @param {RichMenuDeleteManyArgs} args - Arguments to filter RichMenus to delete.
     * @example
     * // Delete a few RichMenus
     * const { count } = await prisma.richMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RichMenuDeleteManyArgs>(args?: SelectSubset<T, RichMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RichMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RichMenus
     * const richMenu = await prisma.richMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RichMenuUpdateManyArgs>(args: SelectSubset<T, RichMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RichMenus and returns the data updated in the database.
     * @param {RichMenuUpdateManyAndReturnArgs} args - Arguments to update many RichMenus.
     * @example
     * // Update many RichMenus
     * const richMenu = await prisma.richMenu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RichMenus and only return the `id`
     * const richMenuWithIdOnly = await prisma.richMenu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RichMenuUpdateManyAndReturnArgs>(args: SelectSubset<T, RichMenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RichMenu.
     * @param {RichMenuUpsertArgs} args - Arguments to update or create a RichMenu.
     * @example
     * // Update or create a RichMenu
     * const richMenu = await prisma.richMenu.upsert({
     *   create: {
     *     // ... data to create a RichMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RichMenu we want to update
     *   }
     * })
     */
    upsert<T extends RichMenuUpsertArgs>(args: SelectSubset<T, RichMenuUpsertArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RichMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuCountArgs} args - Arguments to filter RichMenus to count.
     * @example
     * // Count the number of RichMenus
     * const count = await prisma.richMenu.count({
     *   where: {
     *     // ... the filter for the RichMenus we want to count
     *   }
     * })
    **/
    count<T extends RichMenuCountArgs>(
      args?: Subset<T, RichMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RichMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RichMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RichMenuAggregateArgs>(args: Subset<T, RichMenuAggregateArgs>): Prisma.PrismaPromise<GetRichMenuAggregateType<T>>

    /**
     * Group by RichMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RichMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RichMenuGroupByArgs['orderBy'] }
        : { orderBy?: RichMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RichMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRichMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RichMenu model
   */
  readonly fields: RichMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RichMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RichMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userRichMenus<T extends RichMenu$userRichMenusArgs<ExtArgs> = {}>(args?: Subset<T, RichMenu$userRichMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RichMenu model
   */
  interface RichMenuFieldRefs {
    readonly id: FieldRef<"RichMenu", 'String'>
    readonly name: FieldRef<"RichMenu", 'String'>
    readonly richMenuId: FieldRef<"RichMenu", 'String'>
    readonly description: FieldRef<"RichMenu", 'String'>
    readonly imageUrl: FieldRef<"RichMenu", 'String'>
    readonly isDefault: FieldRef<"RichMenu", 'Boolean'>
    readonly createdAt: FieldRef<"RichMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"RichMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RichMenu findUnique
   */
  export type RichMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter, which RichMenu to fetch.
     */
    where: RichMenuWhereUniqueInput
  }

  /**
   * RichMenu findUniqueOrThrow
   */
  export type RichMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter, which RichMenu to fetch.
     */
    where: RichMenuWhereUniqueInput
  }

  /**
   * RichMenu findFirst
   */
  export type RichMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter, which RichMenu to fetch.
     */
    where?: RichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichMenus to fetch.
     */
    orderBy?: RichMenuOrderByWithRelationInput | RichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RichMenus.
     */
    cursor?: RichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RichMenus.
     */
    distinct?: RichMenuScalarFieldEnum | RichMenuScalarFieldEnum[]
  }

  /**
   * RichMenu findFirstOrThrow
   */
  export type RichMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter, which RichMenu to fetch.
     */
    where?: RichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichMenus to fetch.
     */
    orderBy?: RichMenuOrderByWithRelationInput | RichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RichMenus.
     */
    cursor?: RichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RichMenus.
     */
    distinct?: RichMenuScalarFieldEnum | RichMenuScalarFieldEnum[]
  }

  /**
   * RichMenu findMany
   */
  export type RichMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter, which RichMenus to fetch.
     */
    where?: RichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RichMenus to fetch.
     */
    orderBy?: RichMenuOrderByWithRelationInput | RichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RichMenus.
     */
    cursor?: RichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RichMenus.
     */
    skip?: number
    distinct?: RichMenuScalarFieldEnum | RichMenuScalarFieldEnum[]
  }

  /**
   * RichMenu create
   */
  export type RichMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a RichMenu.
     */
    data: XOR<RichMenuCreateInput, RichMenuUncheckedCreateInput>
  }

  /**
   * RichMenu createMany
   */
  export type RichMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RichMenus.
     */
    data: RichMenuCreateManyInput | RichMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RichMenu createManyAndReturn
   */
  export type RichMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * The data used to create many RichMenus.
     */
    data: RichMenuCreateManyInput | RichMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RichMenu update
   */
  export type RichMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a RichMenu.
     */
    data: XOR<RichMenuUpdateInput, RichMenuUncheckedUpdateInput>
    /**
     * Choose, which RichMenu to update.
     */
    where: RichMenuWhereUniqueInput
  }

  /**
   * RichMenu updateMany
   */
  export type RichMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RichMenus.
     */
    data: XOR<RichMenuUpdateManyMutationInput, RichMenuUncheckedUpdateManyInput>
    /**
     * Filter which RichMenus to update
     */
    where?: RichMenuWhereInput
    /**
     * Limit how many RichMenus to update.
     */
    limit?: number
  }

  /**
   * RichMenu updateManyAndReturn
   */
  export type RichMenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * The data used to update RichMenus.
     */
    data: XOR<RichMenuUpdateManyMutationInput, RichMenuUncheckedUpdateManyInput>
    /**
     * Filter which RichMenus to update
     */
    where?: RichMenuWhereInput
    /**
     * Limit how many RichMenus to update.
     */
    limit?: number
  }

  /**
   * RichMenu upsert
   */
  export type RichMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the RichMenu to update in case it exists.
     */
    where: RichMenuWhereUniqueInput
    /**
     * In case the RichMenu found by the `where` argument doesn't exist, create a new RichMenu with this data.
     */
    create: XOR<RichMenuCreateInput, RichMenuUncheckedCreateInput>
    /**
     * In case the RichMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RichMenuUpdateInput, RichMenuUncheckedUpdateInput>
  }

  /**
   * RichMenu delete
   */
  export type RichMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
    /**
     * Filter which RichMenu to delete.
     */
    where: RichMenuWhereUniqueInput
  }

  /**
   * RichMenu deleteMany
   */
  export type RichMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RichMenus to delete
     */
    where?: RichMenuWhereInput
    /**
     * Limit how many RichMenus to delete.
     */
    limit?: number
  }

  /**
   * RichMenu.userRichMenus
   */
  export type RichMenu$userRichMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    where?: UserRichMenuWhereInput
    orderBy?: UserRichMenuOrderByWithRelationInput | UserRichMenuOrderByWithRelationInput[]
    cursor?: UserRichMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRichMenuScalarFieldEnum | UserRichMenuScalarFieldEnum[]
  }

  /**
   * RichMenu without action
   */
  export type RichMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RichMenu
     */
    select?: RichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RichMenu
     */
    omit?: RichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichMenuInclude<ExtArgs> | null
  }


  /**
   * Model UserRichMenu
   */

  export type AggregateUserRichMenu = {
    _count: UserRichMenuCountAggregateOutputType | null
    _min: UserRichMenuMinAggregateOutputType | null
    _max: UserRichMenuMaxAggregateOutputType | null
  }

  export type UserRichMenuMinAggregateOutputType = {
    id: string | null
    userId: string | null
    richMenuId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRichMenuMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    richMenuId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRichMenuCountAggregateOutputType = {
    id: number
    userId: number
    richMenuId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRichMenuMinAggregateInputType = {
    id?: true
    userId?: true
    richMenuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRichMenuMaxAggregateInputType = {
    id?: true
    userId?: true
    richMenuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRichMenuCountAggregateInputType = {
    id?: true
    userId?: true
    richMenuId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRichMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRichMenu to aggregate.
     */
    where?: UserRichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRichMenus to fetch.
     */
    orderBy?: UserRichMenuOrderByWithRelationInput | UserRichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRichMenus
    **/
    _count?: true | UserRichMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRichMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRichMenuMaxAggregateInputType
  }

  export type GetUserRichMenuAggregateType<T extends UserRichMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRichMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRichMenu[P]>
      : GetScalarType<T[P], AggregateUserRichMenu[P]>
  }




  export type UserRichMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRichMenuWhereInput
    orderBy?: UserRichMenuOrderByWithAggregationInput | UserRichMenuOrderByWithAggregationInput[]
    by: UserRichMenuScalarFieldEnum[] | UserRichMenuScalarFieldEnum
    having?: UserRichMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRichMenuCountAggregateInputType | true
    _min?: UserRichMenuMinAggregateInputType
    _max?: UserRichMenuMaxAggregateInputType
  }

  export type UserRichMenuGroupByOutputType = {
    id: string
    userId: string
    richMenuId: string
    createdAt: Date
    updatedAt: Date
    _count: UserRichMenuCountAggregateOutputType | null
    _min: UserRichMenuMinAggregateOutputType | null
    _max: UserRichMenuMaxAggregateOutputType | null
  }

  type GetUserRichMenuGroupByPayload<T extends UserRichMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRichMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRichMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRichMenuGroupByOutputType[P]>
            : GetScalarType<T[P], UserRichMenuGroupByOutputType[P]>
        }
      >
    >


  export type UserRichMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    richMenuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRichMenu"]>

  export type UserRichMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    richMenuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRichMenu"]>

  export type UserRichMenuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    richMenuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRichMenu"]>

  export type UserRichMenuSelectScalar = {
    id?: boolean
    userId?: boolean
    richMenuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRichMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "richMenuId" | "createdAt" | "updatedAt", ExtArgs["result"]["userRichMenu"]>
  export type UserRichMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }
  export type UserRichMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }
  export type UserRichMenuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    richMenu?: boolean | RichMenuDefaultArgs<ExtArgs>
  }

  export type $UserRichMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRichMenu"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      richMenu: Prisma.$RichMenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      richMenuId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRichMenu"]>
    composites: {}
  }

  type UserRichMenuGetPayload<S extends boolean | null | undefined | UserRichMenuDefaultArgs> = $Result.GetResult<Prisma.$UserRichMenuPayload, S>

  type UserRichMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRichMenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRichMenuCountAggregateInputType | true
    }

  export interface UserRichMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRichMenu'], meta: { name: 'UserRichMenu' } }
    /**
     * Find zero or one UserRichMenu that matches the filter.
     * @param {UserRichMenuFindUniqueArgs} args - Arguments to find a UserRichMenu
     * @example
     * // Get one UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRichMenuFindUniqueArgs>(args: SelectSubset<T, UserRichMenuFindUniqueArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRichMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRichMenuFindUniqueOrThrowArgs} args - Arguments to find a UserRichMenu
     * @example
     * // Get one UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRichMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRichMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRichMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuFindFirstArgs} args - Arguments to find a UserRichMenu
     * @example
     * // Get one UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRichMenuFindFirstArgs>(args?: SelectSubset<T, UserRichMenuFindFirstArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRichMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuFindFirstOrThrowArgs} args - Arguments to find a UserRichMenu
     * @example
     * // Get one UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRichMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRichMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRichMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRichMenus
     * const userRichMenus = await prisma.userRichMenu.findMany()
     * 
     * // Get first 10 UserRichMenus
     * const userRichMenus = await prisma.userRichMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRichMenuWithIdOnly = await prisma.userRichMenu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRichMenuFindManyArgs>(args?: SelectSubset<T, UserRichMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRichMenu.
     * @param {UserRichMenuCreateArgs} args - Arguments to create a UserRichMenu.
     * @example
     * // Create one UserRichMenu
     * const UserRichMenu = await prisma.userRichMenu.create({
     *   data: {
     *     // ... data to create a UserRichMenu
     *   }
     * })
     * 
     */
    create<T extends UserRichMenuCreateArgs>(args: SelectSubset<T, UserRichMenuCreateArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRichMenus.
     * @param {UserRichMenuCreateManyArgs} args - Arguments to create many UserRichMenus.
     * @example
     * // Create many UserRichMenus
     * const userRichMenu = await prisma.userRichMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRichMenuCreateManyArgs>(args?: SelectSubset<T, UserRichMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRichMenus and returns the data saved in the database.
     * @param {UserRichMenuCreateManyAndReturnArgs} args - Arguments to create many UserRichMenus.
     * @example
     * // Create many UserRichMenus
     * const userRichMenu = await prisma.userRichMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRichMenus and only return the `id`
     * const userRichMenuWithIdOnly = await prisma.userRichMenu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRichMenuCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRichMenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRichMenu.
     * @param {UserRichMenuDeleteArgs} args - Arguments to delete one UserRichMenu.
     * @example
     * // Delete one UserRichMenu
     * const UserRichMenu = await prisma.userRichMenu.delete({
     *   where: {
     *     // ... filter to delete one UserRichMenu
     *   }
     * })
     * 
     */
    delete<T extends UserRichMenuDeleteArgs>(args: SelectSubset<T, UserRichMenuDeleteArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRichMenu.
     * @param {UserRichMenuUpdateArgs} args - Arguments to update one UserRichMenu.
     * @example
     * // Update one UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRichMenuUpdateArgs>(args: SelectSubset<T, UserRichMenuUpdateArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRichMenus.
     * @param {UserRichMenuDeleteManyArgs} args - Arguments to filter UserRichMenus to delete.
     * @example
     * // Delete a few UserRichMenus
     * const { count } = await prisma.userRichMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRichMenuDeleteManyArgs>(args?: SelectSubset<T, UserRichMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRichMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRichMenus
     * const userRichMenu = await prisma.userRichMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRichMenuUpdateManyArgs>(args: SelectSubset<T, UserRichMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRichMenus and returns the data updated in the database.
     * @param {UserRichMenuUpdateManyAndReturnArgs} args - Arguments to update many UserRichMenus.
     * @example
     * // Update many UserRichMenus
     * const userRichMenu = await prisma.userRichMenu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRichMenus and only return the `id`
     * const userRichMenuWithIdOnly = await prisma.userRichMenu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRichMenuUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRichMenuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRichMenu.
     * @param {UserRichMenuUpsertArgs} args - Arguments to update or create a UserRichMenu.
     * @example
     * // Update or create a UserRichMenu
     * const userRichMenu = await prisma.userRichMenu.upsert({
     *   create: {
     *     // ... data to create a UserRichMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRichMenu we want to update
     *   }
     * })
     */
    upsert<T extends UserRichMenuUpsertArgs>(args: SelectSubset<T, UserRichMenuUpsertArgs<ExtArgs>>): Prisma__UserRichMenuClient<$Result.GetResult<Prisma.$UserRichMenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRichMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuCountArgs} args - Arguments to filter UserRichMenus to count.
     * @example
     * // Count the number of UserRichMenus
     * const count = await prisma.userRichMenu.count({
     *   where: {
     *     // ... the filter for the UserRichMenus we want to count
     *   }
     * })
    **/
    count<T extends UserRichMenuCountArgs>(
      args?: Subset<T, UserRichMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRichMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRichMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRichMenuAggregateArgs>(args: Subset<T, UserRichMenuAggregateArgs>): Prisma.PrismaPromise<GetUserRichMenuAggregateType<T>>

    /**
     * Group by UserRichMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRichMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRichMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRichMenuGroupByArgs['orderBy'] }
        : { orderBy?: UserRichMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRichMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRichMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRichMenu model
   */
  readonly fields: UserRichMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRichMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRichMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    richMenu<T extends RichMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RichMenuDefaultArgs<ExtArgs>>): Prisma__RichMenuClient<$Result.GetResult<Prisma.$RichMenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRichMenu model
   */
  interface UserRichMenuFieldRefs {
    readonly id: FieldRef<"UserRichMenu", 'String'>
    readonly userId: FieldRef<"UserRichMenu", 'String'>
    readonly richMenuId: FieldRef<"UserRichMenu", 'String'>
    readonly createdAt: FieldRef<"UserRichMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRichMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRichMenu findUnique
   */
  export type UserRichMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter, which UserRichMenu to fetch.
     */
    where: UserRichMenuWhereUniqueInput
  }

  /**
   * UserRichMenu findUniqueOrThrow
   */
  export type UserRichMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter, which UserRichMenu to fetch.
     */
    where: UserRichMenuWhereUniqueInput
  }

  /**
   * UserRichMenu findFirst
   */
  export type UserRichMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter, which UserRichMenu to fetch.
     */
    where?: UserRichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRichMenus to fetch.
     */
    orderBy?: UserRichMenuOrderByWithRelationInput | UserRichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRichMenus.
     */
    cursor?: UserRichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRichMenus.
     */
    distinct?: UserRichMenuScalarFieldEnum | UserRichMenuScalarFieldEnum[]
  }

  /**
   * UserRichMenu findFirstOrThrow
   */
  export type UserRichMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter, which UserRichMenu to fetch.
     */
    where?: UserRichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRichMenus to fetch.
     */
    orderBy?: UserRichMenuOrderByWithRelationInput | UserRichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRichMenus.
     */
    cursor?: UserRichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRichMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRichMenus.
     */
    distinct?: UserRichMenuScalarFieldEnum | UserRichMenuScalarFieldEnum[]
  }

  /**
   * UserRichMenu findMany
   */
  export type UserRichMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter, which UserRichMenus to fetch.
     */
    where?: UserRichMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRichMenus to fetch.
     */
    orderBy?: UserRichMenuOrderByWithRelationInput | UserRichMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRichMenus.
     */
    cursor?: UserRichMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRichMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRichMenus.
     */
    skip?: number
    distinct?: UserRichMenuScalarFieldEnum | UserRichMenuScalarFieldEnum[]
  }

  /**
   * UserRichMenu create
   */
  export type UserRichMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRichMenu.
     */
    data: XOR<UserRichMenuCreateInput, UserRichMenuUncheckedCreateInput>
  }

  /**
   * UserRichMenu createMany
   */
  export type UserRichMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRichMenus.
     */
    data: UserRichMenuCreateManyInput | UserRichMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRichMenu createManyAndReturn
   */
  export type UserRichMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * The data used to create many UserRichMenus.
     */
    data: UserRichMenuCreateManyInput | UserRichMenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRichMenu update
   */
  export type UserRichMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRichMenu.
     */
    data: XOR<UserRichMenuUpdateInput, UserRichMenuUncheckedUpdateInput>
    /**
     * Choose, which UserRichMenu to update.
     */
    where: UserRichMenuWhereUniqueInput
  }

  /**
   * UserRichMenu updateMany
   */
  export type UserRichMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRichMenus.
     */
    data: XOR<UserRichMenuUpdateManyMutationInput, UserRichMenuUncheckedUpdateManyInput>
    /**
     * Filter which UserRichMenus to update
     */
    where?: UserRichMenuWhereInput
    /**
     * Limit how many UserRichMenus to update.
     */
    limit?: number
  }

  /**
   * UserRichMenu updateManyAndReturn
   */
  export type UserRichMenuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * The data used to update UserRichMenus.
     */
    data: XOR<UserRichMenuUpdateManyMutationInput, UserRichMenuUncheckedUpdateManyInput>
    /**
     * Filter which UserRichMenus to update
     */
    where?: UserRichMenuWhereInput
    /**
     * Limit how many UserRichMenus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRichMenu upsert
   */
  export type UserRichMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRichMenu to update in case it exists.
     */
    where: UserRichMenuWhereUniqueInput
    /**
     * In case the UserRichMenu found by the `where` argument doesn't exist, create a new UserRichMenu with this data.
     */
    create: XOR<UserRichMenuCreateInput, UserRichMenuUncheckedCreateInput>
    /**
     * In case the UserRichMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRichMenuUpdateInput, UserRichMenuUncheckedUpdateInput>
  }

  /**
   * UserRichMenu delete
   */
  export type UserRichMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
    /**
     * Filter which UserRichMenu to delete.
     */
    where: UserRichMenuWhereUniqueInput
  }

  /**
   * UserRichMenu deleteMany
   */
  export type UserRichMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRichMenus to delete
     */
    where?: UserRichMenuWhereInput
    /**
     * Limit how many UserRichMenus to delete.
     */
    limit?: number
  }

  /**
   * UserRichMenu without action
   */
  export type UserRichMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRichMenu
     */
    select?: UserRichMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRichMenu
     */
    omit?: UserRichMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRichMenuInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    lineUserId: 'lineUserId',
    displayName: 'displayName',
    pictureUrl: 'pictureUrl',
    statusMessage: 'statusMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RichMenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    richMenuId: 'richMenuId',
    description: 'description',
    imageUrl: 'imageUrl',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RichMenuScalarFieldEnum = (typeof RichMenuScalarFieldEnum)[keyof typeof RichMenuScalarFieldEnum]


  export const UserRichMenuScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    richMenuId: 'richMenuId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRichMenuScalarFieldEnum = (typeof UserRichMenuScalarFieldEnum)[keyof typeof UserRichMenuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    lineUserId?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    pictureUrl?: StringNullableFilter<"User"> | string | null
    statusMessage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userRichMenu?: XOR<UserRichMenuNullableScalarRelationFilter, UserRichMenuWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    statusMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRichMenu?: UserRichMenuOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lineUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    pictureUrl?: StringNullableFilter<"User"> | string | null
    statusMessage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userRichMenu?: XOR<UserRichMenuNullableScalarRelationFilter, UserRichMenuWhereInput> | null
  }, "id" | "lineUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    statusMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    lineUserId?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    statusMessage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RichMenuWhereInput = {
    AND?: RichMenuWhereInput | RichMenuWhereInput[]
    OR?: RichMenuWhereInput[]
    NOT?: RichMenuWhereInput | RichMenuWhereInput[]
    id?: StringFilter<"RichMenu"> | string
    name?: StringFilter<"RichMenu"> | string
    richMenuId?: StringFilter<"RichMenu"> | string
    description?: StringNullableFilter<"RichMenu"> | string | null
    imageUrl?: StringNullableFilter<"RichMenu"> | string | null
    isDefault?: BoolFilter<"RichMenu"> | boolean
    createdAt?: DateTimeFilter<"RichMenu"> | Date | string
    updatedAt?: DateTimeFilter<"RichMenu"> | Date | string
    userRichMenus?: UserRichMenuListRelationFilter
  }

  export type RichMenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    richMenuId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userRichMenus?: UserRichMenuOrderByRelationAggregateInput
  }

  export type RichMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    richMenuId?: string
    AND?: RichMenuWhereInput | RichMenuWhereInput[]
    OR?: RichMenuWhereInput[]
    NOT?: RichMenuWhereInput | RichMenuWhereInput[]
    name?: StringFilter<"RichMenu"> | string
    description?: StringNullableFilter<"RichMenu"> | string | null
    imageUrl?: StringNullableFilter<"RichMenu"> | string | null
    isDefault?: BoolFilter<"RichMenu"> | boolean
    createdAt?: DateTimeFilter<"RichMenu"> | Date | string
    updatedAt?: DateTimeFilter<"RichMenu"> | Date | string
    userRichMenus?: UserRichMenuListRelationFilter
  }, "id" | "richMenuId">

  export type RichMenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    richMenuId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RichMenuCountOrderByAggregateInput
    _max?: RichMenuMaxOrderByAggregateInput
    _min?: RichMenuMinOrderByAggregateInput
  }

  export type RichMenuScalarWhereWithAggregatesInput = {
    AND?: RichMenuScalarWhereWithAggregatesInput | RichMenuScalarWhereWithAggregatesInput[]
    OR?: RichMenuScalarWhereWithAggregatesInput[]
    NOT?: RichMenuScalarWhereWithAggregatesInput | RichMenuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RichMenu"> | string
    name?: StringWithAggregatesFilter<"RichMenu"> | string
    richMenuId?: StringWithAggregatesFilter<"RichMenu"> | string
    description?: StringNullableWithAggregatesFilter<"RichMenu"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"RichMenu"> | string | null
    isDefault?: BoolWithAggregatesFilter<"RichMenu"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RichMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RichMenu"> | Date | string
  }

  export type UserRichMenuWhereInput = {
    AND?: UserRichMenuWhereInput | UserRichMenuWhereInput[]
    OR?: UserRichMenuWhereInput[]
    NOT?: UserRichMenuWhereInput | UserRichMenuWhereInput[]
    id?: StringFilter<"UserRichMenu"> | string
    userId?: StringFilter<"UserRichMenu"> | string
    richMenuId?: StringFilter<"UserRichMenu"> | string
    createdAt?: DateTimeFilter<"UserRichMenu"> | Date | string
    updatedAt?: DateTimeFilter<"UserRichMenu"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    richMenu?: XOR<RichMenuScalarRelationFilter, RichMenuWhereInput>
  }

  export type UserRichMenuOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    richMenuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    richMenu?: RichMenuOrderByWithRelationInput
  }

  export type UserRichMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserRichMenuWhereInput | UserRichMenuWhereInput[]
    OR?: UserRichMenuWhereInput[]
    NOT?: UserRichMenuWhereInput | UserRichMenuWhereInput[]
    richMenuId?: StringFilter<"UserRichMenu"> | string
    createdAt?: DateTimeFilter<"UserRichMenu"> | Date | string
    updatedAt?: DateTimeFilter<"UserRichMenu"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    richMenu?: XOR<RichMenuScalarRelationFilter, RichMenuWhereInput>
  }, "id" | "userId">

  export type UserRichMenuOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    richMenuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRichMenuCountOrderByAggregateInput
    _max?: UserRichMenuMaxOrderByAggregateInput
    _min?: UserRichMenuMinOrderByAggregateInput
  }

  export type UserRichMenuScalarWhereWithAggregatesInput = {
    AND?: UserRichMenuScalarWhereWithAggregatesInput | UserRichMenuScalarWhereWithAggregatesInput[]
    OR?: UserRichMenuScalarWhereWithAggregatesInput[]
    NOT?: UserRichMenuScalarWhereWithAggregatesInput | UserRichMenuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRichMenu"> | string
    userId?: StringWithAggregatesFilter<"UserRichMenu"> | string
    richMenuId?: StringWithAggregatesFilter<"UserRichMenu"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRichMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRichMenu"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    lineUserId: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRichMenu?: UserRichMenuCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    lineUserId: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userRichMenu?: UserRichMenuUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRichMenu?: UserRichMenuUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRichMenu?: UserRichMenuUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    lineUserId: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichMenuCreateInput = {
    id?: string
    name: string
    richMenuId: string
    description?: string | null
    imageUrl?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRichMenus?: UserRichMenuCreateNestedManyWithoutRichMenuInput
  }

  export type RichMenuUncheckedCreateInput = {
    id?: string
    name: string
    richMenuId: string
    description?: string | null
    imageUrl?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRichMenus?: UserRichMenuUncheckedCreateNestedManyWithoutRichMenuInput
  }

  export type RichMenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRichMenus?: UserRichMenuUpdateManyWithoutRichMenuNestedInput
  }

  export type RichMenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRichMenus?: UserRichMenuUncheckedUpdateManyWithoutRichMenuNestedInput
  }

  export type RichMenuCreateManyInput = {
    id?: string
    name: string
    richMenuId: string
    description?: string | null
    imageUrl?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichMenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichMenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRichMenuInput
    richMenu: RichMenuCreateNestedOneWithoutUserRichMenusInput
  }

  export type UserRichMenuUncheckedCreateInput = {
    id?: string
    userId: string
    richMenuId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRichMenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRichMenuNestedInput
    richMenu?: RichMenuUpdateOneRequiredWithoutUserRichMenusNestedInput
  }

  export type UserRichMenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuCreateManyInput = {
    id?: string
    userId: string
    richMenuId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRichMenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRichMenuNullableScalarRelationFilter = {
    is?: UserRichMenuWhereInput | null
    isNot?: UserRichMenuWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lineUserId?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRichMenuListRelationFilter = {
    every?: UserRichMenuWhereInput
    some?: UserRichMenuWhereInput
    none?: UserRichMenuWhereInput
  }

  export type UserRichMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RichMenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    richMenuId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RichMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    richMenuId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RichMenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    richMenuId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RichMenuScalarRelationFilter = {
    is?: RichMenuWhereInput
    isNot?: RichMenuWhereInput
  }

  export type UserRichMenuCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    richMenuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRichMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    richMenuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRichMenuMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    richMenuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRichMenuCreateNestedOneWithoutUserInput = {
    create?: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutUserInput
    connect?: UserRichMenuWhereUniqueInput
  }

  export type UserRichMenuUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutUserInput
    connect?: UserRichMenuWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRichMenuUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutUserInput
    upsert?: UserRichMenuUpsertWithoutUserInput
    disconnect?: UserRichMenuWhereInput | boolean
    delete?: UserRichMenuWhereInput | boolean
    connect?: UserRichMenuWhereUniqueInput
    update?: XOR<XOR<UserRichMenuUpdateToOneWithWhereWithoutUserInput, UserRichMenuUpdateWithoutUserInput>, UserRichMenuUncheckedUpdateWithoutUserInput>
  }

  export type UserRichMenuUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutUserInput
    upsert?: UserRichMenuUpsertWithoutUserInput
    disconnect?: UserRichMenuWhereInput | boolean
    delete?: UserRichMenuWhereInput | boolean
    connect?: UserRichMenuWhereUniqueInput
    update?: XOR<XOR<UserRichMenuUpdateToOneWithWhereWithoutUserInput, UserRichMenuUpdateWithoutUserInput>, UserRichMenuUncheckedUpdateWithoutUserInput>
  }

  export type UserRichMenuCreateNestedManyWithoutRichMenuInput = {
    create?: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput> | UserRichMenuCreateWithoutRichMenuInput[] | UserRichMenuUncheckedCreateWithoutRichMenuInput[]
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutRichMenuInput | UserRichMenuCreateOrConnectWithoutRichMenuInput[]
    createMany?: UserRichMenuCreateManyRichMenuInputEnvelope
    connect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
  }

  export type UserRichMenuUncheckedCreateNestedManyWithoutRichMenuInput = {
    create?: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput> | UserRichMenuCreateWithoutRichMenuInput[] | UserRichMenuUncheckedCreateWithoutRichMenuInput[]
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutRichMenuInput | UserRichMenuCreateOrConnectWithoutRichMenuInput[]
    createMany?: UserRichMenuCreateManyRichMenuInputEnvelope
    connect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserRichMenuUpdateManyWithoutRichMenuNestedInput = {
    create?: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput> | UserRichMenuCreateWithoutRichMenuInput[] | UserRichMenuUncheckedCreateWithoutRichMenuInput[]
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutRichMenuInput | UserRichMenuCreateOrConnectWithoutRichMenuInput[]
    upsert?: UserRichMenuUpsertWithWhereUniqueWithoutRichMenuInput | UserRichMenuUpsertWithWhereUniqueWithoutRichMenuInput[]
    createMany?: UserRichMenuCreateManyRichMenuInputEnvelope
    set?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    disconnect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    delete?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    connect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    update?: UserRichMenuUpdateWithWhereUniqueWithoutRichMenuInput | UserRichMenuUpdateWithWhereUniqueWithoutRichMenuInput[]
    updateMany?: UserRichMenuUpdateManyWithWhereWithoutRichMenuInput | UserRichMenuUpdateManyWithWhereWithoutRichMenuInput[]
    deleteMany?: UserRichMenuScalarWhereInput | UserRichMenuScalarWhereInput[]
  }

  export type UserRichMenuUncheckedUpdateManyWithoutRichMenuNestedInput = {
    create?: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput> | UserRichMenuCreateWithoutRichMenuInput[] | UserRichMenuUncheckedCreateWithoutRichMenuInput[]
    connectOrCreate?: UserRichMenuCreateOrConnectWithoutRichMenuInput | UserRichMenuCreateOrConnectWithoutRichMenuInput[]
    upsert?: UserRichMenuUpsertWithWhereUniqueWithoutRichMenuInput | UserRichMenuUpsertWithWhereUniqueWithoutRichMenuInput[]
    createMany?: UserRichMenuCreateManyRichMenuInputEnvelope
    set?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    disconnect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    delete?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    connect?: UserRichMenuWhereUniqueInput | UserRichMenuWhereUniqueInput[]
    update?: UserRichMenuUpdateWithWhereUniqueWithoutRichMenuInput | UserRichMenuUpdateWithWhereUniqueWithoutRichMenuInput[]
    updateMany?: UserRichMenuUpdateManyWithWhereWithoutRichMenuInput | UserRichMenuUpdateManyWithWhereWithoutRichMenuInput[]
    deleteMany?: UserRichMenuScalarWhereInput | UserRichMenuScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserRichMenuInput = {
    create?: XOR<UserCreateWithoutUserRichMenuInput, UserUncheckedCreateWithoutUserRichMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRichMenuInput
    connect?: UserWhereUniqueInput
  }

  export type RichMenuCreateNestedOneWithoutUserRichMenusInput = {
    create?: XOR<RichMenuCreateWithoutUserRichMenusInput, RichMenuUncheckedCreateWithoutUserRichMenusInput>
    connectOrCreate?: RichMenuCreateOrConnectWithoutUserRichMenusInput
    connect?: RichMenuWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserRichMenuNestedInput = {
    create?: XOR<UserCreateWithoutUserRichMenuInput, UserUncheckedCreateWithoutUserRichMenuInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRichMenuInput
    upsert?: UserUpsertWithoutUserRichMenuInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRichMenuInput, UserUpdateWithoutUserRichMenuInput>, UserUncheckedUpdateWithoutUserRichMenuInput>
  }

  export type RichMenuUpdateOneRequiredWithoutUserRichMenusNestedInput = {
    create?: XOR<RichMenuCreateWithoutUserRichMenusInput, RichMenuUncheckedCreateWithoutUserRichMenusInput>
    connectOrCreate?: RichMenuCreateOrConnectWithoutUserRichMenusInput
    upsert?: RichMenuUpsertWithoutUserRichMenusInput
    connect?: RichMenuWhereUniqueInput
    update?: XOR<XOR<RichMenuUpdateToOneWithWhereWithoutUserRichMenusInput, RichMenuUpdateWithoutUserRichMenusInput>, RichMenuUncheckedUpdateWithoutUserRichMenusInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRichMenuCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    richMenu: RichMenuCreateNestedOneWithoutUserRichMenusInput
  }

  export type UserRichMenuUncheckedCreateWithoutUserInput = {
    id?: string
    richMenuId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRichMenuCreateOrConnectWithoutUserInput = {
    where: UserRichMenuWhereUniqueInput
    create: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
  }

  export type UserRichMenuUpsertWithoutUserInput = {
    update: XOR<UserRichMenuUpdateWithoutUserInput, UserRichMenuUncheckedUpdateWithoutUserInput>
    create: XOR<UserRichMenuCreateWithoutUserInput, UserRichMenuUncheckedCreateWithoutUserInput>
    where?: UserRichMenuWhereInput
  }

  export type UserRichMenuUpdateToOneWithWhereWithoutUserInput = {
    where?: UserRichMenuWhereInput
    data: XOR<UserRichMenuUpdateWithoutUserInput, UserRichMenuUncheckedUpdateWithoutUserInput>
  }

  export type UserRichMenuUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richMenu?: RichMenuUpdateOneRequiredWithoutUserRichMenusNestedInput
  }

  export type UserRichMenuUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuCreateWithoutRichMenuInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserRichMenuInput
  }

  export type UserRichMenuUncheckedCreateWithoutRichMenuInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRichMenuCreateOrConnectWithoutRichMenuInput = {
    where: UserRichMenuWhereUniqueInput
    create: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput>
  }

  export type UserRichMenuCreateManyRichMenuInputEnvelope = {
    data: UserRichMenuCreateManyRichMenuInput | UserRichMenuCreateManyRichMenuInput[]
    skipDuplicates?: boolean
  }

  export type UserRichMenuUpsertWithWhereUniqueWithoutRichMenuInput = {
    where: UserRichMenuWhereUniqueInput
    update: XOR<UserRichMenuUpdateWithoutRichMenuInput, UserRichMenuUncheckedUpdateWithoutRichMenuInput>
    create: XOR<UserRichMenuCreateWithoutRichMenuInput, UserRichMenuUncheckedCreateWithoutRichMenuInput>
  }

  export type UserRichMenuUpdateWithWhereUniqueWithoutRichMenuInput = {
    where: UserRichMenuWhereUniqueInput
    data: XOR<UserRichMenuUpdateWithoutRichMenuInput, UserRichMenuUncheckedUpdateWithoutRichMenuInput>
  }

  export type UserRichMenuUpdateManyWithWhereWithoutRichMenuInput = {
    where: UserRichMenuScalarWhereInput
    data: XOR<UserRichMenuUpdateManyMutationInput, UserRichMenuUncheckedUpdateManyWithoutRichMenuInput>
  }

  export type UserRichMenuScalarWhereInput = {
    AND?: UserRichMenuScalarWhereInput | UserRichMenuScalarWhereInput[]
    OR?: UserRichMenuScalarWhereInput[]
    NOT?: UserRichMenuScalarWhereInput | UserRichMenuScalarWhereInput[]
    id?: StringFilter<"UserRichMenu"> | string
    userId?: StringFilter<"UserRichMenu"> | string
    richMenuId?: StringFilter<"UserRichMenu"> | string
    createdAt?: DateTimeFilter<"UserRichMenu"> | Date | string
    updatedAt?: DateTimeFilter<"UserRichMenu"> | Date | string
  }

  export type UserCreateWithoutUserRichMenuInput = {
    id?: string
    lineUserId: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserRichMenuInput = {
    id?: string
    lineUserId: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserRichMenuInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRichMenuInput, UserUncheckedCreateWithoutUserRichMenuInput>
  }

  export type RichMenuCreateWithoutUserRichMenusInput = {
    id?: string
    name: string
    richMenuId: string
    description?: string | null
    imageUrl?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichMenuUncheckedCreateWithoutUserRichMenusInput = {
    id?: string
    name: string
    richMenuId: string
    description?: string | null
    imageUrl?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichMenuCreateOrConnectWithoutUserRichMenusInput = {
    where: RichMenuWhereUniqueInput
    create: XOR<RichMenuCreateWithoutUserRichMenusInput, RichMenuUncheckedCreateWithoutUserRichMenusInput>
  }

  export type UserUpsertWithoutUserRichMenuInput = {
    update: XOR<UserUpdateWithoutUserRichMenuInput, UserUncheckedUpdateWithoutUserRichMenuInput>
    create: XOR<UserCreateWithoutUserRichMenuInput, UserUncheckedCreateWithoutUserRichMenuInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRichMenuInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRichMenuInput, UserUncheckedUpdateWithoutUserRichMenuInput>
  }

  export type UserUpdateWithoutUserRichMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserRichMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUserId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichMenuUpsertWithoutUserRichMenusInput = {
    update: XOR<RichMenuUpdateWithoutUserRichMenusInput, RichMenuUncheckedUpdateWithoutUserRichMenusInput>
    create: XOR<RichMenuCreateWithoutUserRichMenusInput, RichMenuUncheckedCreateWithoutUserRichMenusInput>
    where?: RichMenuWhereInput
  }

  export type RichMenuUpdateToOneWithWhereWithoutUserRichMenusInput = {
    where?: RichMenuWhereInput
    data: XOR<RichMenuUpdateWithoutUserRichMenusInput, RichMenuUncheckedUpdateWithoutUserRichMenusInput>
  }

  export type RichMenuUpdateWithoutUserRichMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichMenuUncheckedUpdateWithoutUserRichMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    richMenuId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuCreateManyRichMenuInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRichMenuUpdateWithoutRichMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserRichMenuNestedInput
  }

  export type UserRichMenuUncheckedUpdateWithoutRichMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRichMenuUncheckedUpdateManyWithoutRichMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}