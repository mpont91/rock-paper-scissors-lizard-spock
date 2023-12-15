import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import PlayerComponent from 'components/PlayerComponent.vue'

describe('player-component', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(PlayerComponent, {
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

  it('renders all picks property', () => {
    const wrapper = mount(PlayerComponent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    })
    wrapper.findAll('img').forEach((img) => {
      expect([
        'rock.webp',
        'paper.webp',
        'scissors.webp',
        'lizard.webp',
        'spock.webp',
      ]).to.contain(img.attributes().src)
    })
  })
})
