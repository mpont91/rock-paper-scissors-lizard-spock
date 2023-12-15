import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import RulesComponent from 'components/RulesComponent.vue'

describe('rules-component', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(RulesComponent)
    expect(wrapper.exists()).to.be.true
  })
})
