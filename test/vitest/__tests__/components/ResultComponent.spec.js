import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ResultComponent from 'components/ResultComponent.vue'

describe('result-component', () => {
  installQuasarPlugin()
  it('renders default properly', () => {
    const wrapper = mount(ResultComponent, {
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
})
