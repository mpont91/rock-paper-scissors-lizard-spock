import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import RulesComponent from 'components/RulesComponent.vue'

describe('rules-component', () => {
  installQuasarPlugin()
  it('renders default properly', () => {
    const wrapper = mount(RulesComponent)
    expect(wrapper.exists()).to.be.true
  })
})
