import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ComputerComponent from 'components/ComputerComponent.vue'

describe('<computer-component>', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(ComputerComponent)
    expect(wrapper.exists()).to.be.true
  })
})
