import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import TheHeaderComponent from 'components/TheHeaderComponent.vue'

describe('<toolbar-component>', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(TheHeaderComponent)
    expect(wrapper.exists()).to.be.true
  })
})
