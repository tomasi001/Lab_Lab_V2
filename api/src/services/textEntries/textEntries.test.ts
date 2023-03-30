import type { TextEntry } from '@prisma/client'

import {
  textEntries,
  textEntry,
  createTextEntry,
  updateTextEntry,
  deleteTextEntry,
} from './textEntries'
import type { StandardScenario } from './textEntries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('textEntries', () => {
  scenario('returns all textEntries', async (scenario: StandardScenario) => {
    const result = await textEntries()

    expect(result.length).toEqual(Object.keys(scenario.textEntry).length)
  })

  scenario('returns a single textEntry', async (scenario: StandardScenario) => {
    const result = await textEntry({ id: scenario.textEntry.one.id })

    expect(result).toEqual(scenario.textEntry.one)
  })

  scenario('creates a textEntry', async (scenario: StandardScenario) => {
    const result = await createTextEntry({
      input: {
        entry: 'String',
        userId: scenario.textEntry.two.userId,
        updatedAt: '2023-03-26T20:08:59.110Z',
      },
    })

    expect(result.entry).toEqual('String')
    expect(result.userId).toEqual(scenario.textEntry.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:08:59.110Z'))
  })

  scenario('updates a textEntry', async (scenario: StandardScenario) => {
    const original = (await textEntry({
      id: scenario.textEntry.one.id,
    })) as TextEntry
    const result = await updateTextEntry({
      id: original.id,
      input: { entry: 'String2' },
    })

    expect(result.entry).toEqual('String2')
  })

  scenario('deletes a textEntry', async (scenario: StandardScenario) => {
    const original = (await deleteTextEntry({
      id: scenario.textEntry.one.id,
    })) as TextEntry
    const result = await textEntry({ id: original.id })

    expect(result).toEqual(null)
  })
})
