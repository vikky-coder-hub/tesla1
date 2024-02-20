import React from 'react'
import styled from 'styled-components';
import Section from './section'


const Container = styled.div`
height:100vh;
z-index:10;

`

function home() {
  return (
    <Container>
       <Section 
        title="Model S"
        description = 'Order Online for Touchless Delivery'
        backgroudImg = 'model-s.jpg'
        LeftBtn = "Custom Order"
        RightBtn= 'Existing Inventory'
       />

       
       
       <Section 
        title="Brand New Model Y"
        description = 'Order Online for Touchless Delivery*'
        backgroudImg = 'model-y.jpg'
        LeftBtn = "Custom Order"
        RightBtn= 'Existing Inventory'
       />

       <Section 
        title="Model 3"
        description = 'Order Online for Touchless Delivery'
        backgroudImg = 'model-3.jpg'
        LeftBtn = "Custom Order"
        RightBtn= 'Demo Drive'
       />
       
       <Section 
        title="Model X"
        description = 'Order Online for Touchless Delivery'
        backgroudImg = 'model-x.jpg'
        LeftBtn = "Custom Order"
        RightBtn= 'Existing Inventory'
       />
        
        <Section 
        title="Model S"
        description = 'Order Online for Touchless Delivery'
        backgroudImg = 'model-s.jpg'
        LeftBtn = "Custom Order"
        RightBtn= 'Existing Inventory'
       />

       <Section 
        title="Lowest Cost Solar Panels in America"
        description = 'Money-back guarantee'
        backgroudImg = 'solar-panel.jpg'
        LeftBtn = "Order now"
        RightBtn= 'Learn more'
       /> 

       <Section 
        title="Solar for New Roofs"
        description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        backgroudImg = 'solar-roof.jpg'
        LeftBtn = "Order now"
        RightBtn= 'Learn more'
       />

       <Section 
        title="Accessories"
        description = ''
        backgroudImg = 'accessories.jpg'
        LeftBtn = "Shop now"
        
       />
    </Container>
  )
}

export default home