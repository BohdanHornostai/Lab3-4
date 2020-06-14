import React from 'react'
import {render, cleanup} from '@testing-library/react'
import ImageUploader from './ImageUploader'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<ImageUploader />)

    expect(asFragment(<ImageUploader />)).toMatchSnapshot()
   })