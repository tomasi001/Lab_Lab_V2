import type { VoiceEntry } from '@prisma/client'

import {
  voiceEntries,
  voiceEntry,
  createVoiceEntry,
  updateVoiceEntry,
  deleteVoiceEntry,
} from './voiceEntries'
import type { StandardScenario } from './voiceEntries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('voiceEntries', () => {
  scenario('returns all voiceEntries', async (scenario: StandardScenario) => {
    const result = await voiceEntries()

    expect(result.length).toEqual(Object.keys(scenario.voiceEntry).length)
  })

  scenario(
    'returns a single voiceEntry',
    async (scenario: StandardScenario) => {
      const result = await voiceEntry({ id: scenario.voiceEntry.one.id })

      expect(result).toEqual(scenario.voiceEntry.one)
    }
  )

  scenario('creates a voiceEntry', async (scenario: StandardScenario) => {
    const result = await createVoiceEntry({
      input: {
        entry: 'String',
        userId: scenario.voiceEntry.two.userId,
        updatedAt: '2023-03-26T20:09:07.556Z',
      },
    })

    expect(result.entry).toEqual('String')
    expect(result.userId).toEqual(scenario.voiceEntry.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:09:07.556Z'))
  })

  scenario('updates a voiceEntry', async (scenario: StandardScenario) => {
    const original = (await voiceEntry({
      id: scenario.voiceEntry.one.id,
    })) as VoiceEntry
    const result = await updateVoiceEntry({
      id: original.id,
      input: { entry: 'String2' },
    })

    expect(result.entry).toEqual('String2')
  })

  scenario('deletes a voiceEntry', async (scenario: StandardScenario) => {
    const original = (await deleteVoiceEntry({
      id: scenario.voiceEntry.one.id,
    })) as VoiceEntry
    const result = await voiceEntry({ id: original.id })

    expect(result).toEqual(null)
  })
})
