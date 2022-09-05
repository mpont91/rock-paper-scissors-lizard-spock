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

  it('renders pick properly', () => {
    const picks = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    const selectedClass = 'bg-red'
    const unselectedClass = 'bg-grey'

    picks.forEach((pick) => {
      const wrapper = mount(ComputerComponent, {
        props: {
          picked: pick,
        },
      })
      expect(wrapper.exists()).to.be.true
      wrapper.findAll('button').forEach((button) => {
        if (button.text() === pick) {
          expect(button.classes()).to.include(selectedClass)
        } else {
          expect(button.classes()).to.include(unselectedClass)
        }
      })
    })
  })
})
