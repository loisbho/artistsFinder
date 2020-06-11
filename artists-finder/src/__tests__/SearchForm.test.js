import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Buttons/index.jsx';
import ArtistList from '../components/ArtistList/index.jsx';
configure({ adapter: new Adapter() })

const mockHandleClick = jest.fn()

it('Button component fires callback function onClick and renders Artist List component', () => {
  const component = shallow(
    <Button name='button test' handleFormSubmit={mockHandleClick}>
      {' '}
      Search{' '}
    </Button>
  )
  component.simulate('click')
  expect(mockHandleClick).toHaveBeenCalled()
  expect(component.containsMatchingElement(<ArtistList />))
})
