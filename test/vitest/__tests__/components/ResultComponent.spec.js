import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import ResultComponent from 'components/ResultComponent.vue'

describe('<result-component>', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(ResultComponent)
    expect(wrapper.exists()).to.be.true
  })
})
