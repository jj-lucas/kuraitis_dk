# Dev notes

## Type generation / safety

Prisma generates types via `prisma generate`, eg when running migrations. These
are stored in `./node_modules/@prisma/client`. The context of the Apollo Server
is typed in each resolver call, like this:

```
import { ExpressContext } from 'apollo-server-express'
import { PrismaClient } from '@prisma/client'

interface Context extends ExpressContext {
	prisma: PrismaClient
}

..
users: async (parent, args, ctx: Context) => {
    // ctx is typed
    const users = await ctx.prisma.user.findMany()
    return users
},
```

Additionally, types are generated using `yarn codegen`, which invokes
`graphql-codegen` via the configuration in `../codegen.yml`, and creates types
for the resolvers. These are generated based on the type definitions defined in
`./src/type-defs.ts`, and end up in `./src/generated/graphql`. They ensure
typing of resolvers arguments and returns thanks to the declaration when the
resolvers object is put together.

```
import { Resolvers } from './generated/graphql'
const resolvers: Resolvers = {
	Query: {
		hello: async (parent, args) => {
			// args is typed
		},
        ...

```
