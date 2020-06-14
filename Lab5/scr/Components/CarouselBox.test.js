import React from 'react'
import {render, cleanup} from '@testing-library/react'
import CarouselBox from './CarouselBox'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<CarouselBox />)

    expect(asFragment(<CarouselBox />)).toMatchSnapshot()
   })