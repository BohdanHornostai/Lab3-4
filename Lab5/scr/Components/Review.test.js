import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Review from './Review'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Review />)

    expect(asFragment(<Review />)).toMatchSnapshot()
   })