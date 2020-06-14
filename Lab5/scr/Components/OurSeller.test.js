import React from 'react'
import {render, cleanup} from '@testing-library/react'
import OurSeller from './OurSeller'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<OurSeller />)

    expect(asFragment(<OurSeller />)).toMatchSnapshot()
   })