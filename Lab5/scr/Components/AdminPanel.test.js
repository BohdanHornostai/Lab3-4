import React from 'react'
import {render, cleanup} from '@testing-library/react'
import AdminPanel from './AdminPanel'

 afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<AdminPanel />)

    expect(asFragment(<AdminPanel />)).toMatchSnapshot()
   })