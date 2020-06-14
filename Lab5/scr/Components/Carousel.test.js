import React from 'react'
import {render, cleanup} from '@testing-library/react'
import { Carousel } from 'react-bootstrap'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Carousel />)

    expect(asFragment(<Carousel />)).toMatchSnapshot()
   })