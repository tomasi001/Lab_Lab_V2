import type { WordCloud } from '@prisma/client'

import {
  wordClouds,
  wordCloud,
  createWordCloud,
  updateWordCloud,
  deleteWordCloud,
} from './wordClouds'
import type { StandardScenario } from './wordClouds.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('wordClouds', () => {
  scenario('returns all wordClouds', async (scenario: StandardScenario) => {
    const result = await wordClouds()

    expect(result.length).toEqual(Object.keys(scenario.wordCloud).length)
  })

  scenario('returns a single wordCloud', async (scenario: StandardScenario) => {
    const result = await wordCloud({ id: scenario.wordCloud.one.id })

    expect(result).toEqual(scenario.wordCloud.one)
  })

  scenario('creates a wordCloud', async (scenario: StandardScenario) => {
    const result = await createWordCloud({
      input: {
        userId: scenario.wordCloud.two.userId,
        updatedAt: '2023-03-26T20:09:15.119Z',
      },
    })

    expect(result.userId).toEqual(scenario.wordCloud.two.userId)
    expect(result.updatedAt).toEqual(new Date('2023-03-26T20:09:15.119Z'))
  })

  scenario('updates a wordCloud', async (scenario: StandardScenario) => {
    const original = (await wordCloud({
      id: scenario.wordCloud.one.id,
    })) as WordCloud
    const result = await updateWordCloud({
      id: original.id,
      input: { updatedAt: '2023-03-27T20:09:15.119Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-03-27T20:09:15.119Z'))
  })

  scenario('deletes a wordCloud', async (scenario: StandardScenario) => {
    const original = (await deleteWordCloud({
      id: scenario.wordCloud.one.id,
    })) as WordCloud
    const result = await wordCloud({ id: original.id })

    expect(result).toEqual(null)
  })
})
