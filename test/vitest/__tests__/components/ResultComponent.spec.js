import { describe, expect, it, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ResultComponent from 'components/ResultComponent.vue'

describe('result-component', () => {
  installQuasar()
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
