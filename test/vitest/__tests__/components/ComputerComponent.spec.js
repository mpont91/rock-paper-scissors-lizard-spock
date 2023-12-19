import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ComputerComponent from 'components/ComputerComponent.vue'

describe('computer-component', () => {
  installQuasarPlugin()
  it('renders default properly', () => {
    const wrapper = mount(ComputerComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    expect(wrapper.exists()).to.be.true
  })

  it('renders pick properly', () => {
    const picks = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    picks.forEach((pick) => {
      const wrapper = mount(ComputerComponent, {
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
            }),
          ],
        },
        props: {
          picked: pick,
        },
      })
      expect(wrapper.exists()).to.be.true
      expect(wrapper.find('img').attributes().src).to.equal(`${pick}.webp`)
    })
  })
})
