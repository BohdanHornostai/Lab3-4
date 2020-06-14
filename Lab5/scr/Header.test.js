import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import Header from './Components/Header';
import { shallow } from 'enzyme';


describe('HeaderComponent', () => {
  

    
      describe('Header container initial', () => {

          const component = shallow(<Header/>)

        it('renders logo properly', () => {
            expect(component.find('div')).toHaveLength(1)
         })
         

         it('firstly no token', () => {
            expect(component.find('.figure')).toHaveLength(0)
         })
     })

     

})