import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ToolbarComponent from 'components/ToolbarComponent.vue'

describe('<toolbar-component>', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(ToolbarComponent)
    expect(wrapper.exists()).to.be.true
  })
})
