import type { Prisma, VoiceEntry } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.VoiceEntryCreateArgs>({
  voiceEntry: {
    one: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T20:09:07.563Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:07.563Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:07.563Z',
            roles: 'String',
          },
        },
      },
    },
    two: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T20:09:07.563Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T20:09:07.563Z',
            hashedPassword: 'String',
            salt: 'String',
            resetToken: 'String',
            resetTokenExpiresAt: '2023-03-26T20:09:07.563Z',
            roles: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<VoiceEntry, 'voiceEntry'>
