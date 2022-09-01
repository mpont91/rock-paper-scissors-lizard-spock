import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest'
import PlayerComponent from 'components/PlayerComponent.vue'

describe('<player-component>', () => {
  installQuasar()
  it('renders default properly', () => {
    const wrapper = mount(PlayerComponent)
    expect(wrapper.exists()).to.be.true
  })
})
