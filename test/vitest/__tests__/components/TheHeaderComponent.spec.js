import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import TheHeaderComponent from 'components/TheHeaderComponent.vue'

describe('toolbar-component', () => {
  installQuasarPlugin()
  it('renders default properly', () => {
    const wrapper = mount(TheHeaderComponent)
    expect(wrapper.exists()).to.be.true
  })
})
