#Prisma notes

https://www.prisma.io/docs/concepts/components/prisma-migrate

In a development environment, use the migrate dev command to generate and apply
migrations: `npx prisma migrate dev`

You can also reset the database yourself to undo manual changes or db push
experiments by running: `npx prisma migrate reset`

In production and testing environments, use the migrate deploy command to apply
migrations: `npx prisma migrate deploy`
