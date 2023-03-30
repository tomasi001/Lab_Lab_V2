import type { Prisma, Word } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String',
        rating: 3079838,
        wordClouds: {
          create: {
            updatedAt: '2023-03-26T20:09:48.290Z',
            User: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
                accountStatus: 'String',
                updatedAt: '2023-03-26T20:09:48.290Z',
                hashedPassword: 'String',
                salt: 'String',
                resetToken: 'String',
                resetTokenExpiresAt: '2023-03-26T20:09:48.290Z',
                roles: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        word: 'String',
        rating: 3755935,
        wordClouds: {
          create: {
            updatedAt: '2023-03-26T20:09:48.290Z',
            User: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
                accountStatus: 'String',
                updatedAt: '2023-03-26T20:09:48.290Z',
                hashedPassword: 'String',
                salt: 'String',
                resetToken: 'String',
                resetTokenExpiresAt: '2023-03-26T20:09:48.290Z',
                roles: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Word, 'word'>
