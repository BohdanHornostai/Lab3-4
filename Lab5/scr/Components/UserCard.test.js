import React from 'react'
import {render, cleanup} from '@testing-library/react'
import UserCard from './UserCard'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<UserCard />)

    expect(asFragment(<UserCard />)).toMatchSnapshot()
   })


   it("should render an icon", () => {
    const component = shallow(<UserCard />);
    expect(component.find(<i class="userCardReviews"></i>)).toMatchSnapshot();
  });
