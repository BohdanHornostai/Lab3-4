import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Infocards from './Infocards'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Infocards />)

    expect(asFragment(<Infocards />)).toMatchSnapshot()
   })