import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import PickComponent from 'components/PickComponent.vue'

describe('pick-component', () => {
  installQuasarPlugin()
  it('renders default properly', () => {
    const wrapper = mount(PickComponent)
    expect(wrapper.exists()).to.be.true
  })

  it('renders pick images properly', () => {
    const options = [null, 'rock', 'paper', 'scissors', 'lizard', 'spock']

    options.forEach((option) => {
      const wrapper = mount(PickComponent, {
        props: {
          pick: option,
        },
      })
      expect(wrapper.exists()).to.be.true
      if (option) {
        expect(wrapper.find('img').attributes().src).to.equal(`${option}.webp`)
      } else {
        expect(wrapper.find('img').exists()).to.be.false
      }
    })
  })
})
