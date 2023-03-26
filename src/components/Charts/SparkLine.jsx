import React from 'react'
import {SparklineComponent,Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, colour, data, type, currentColour}) => {
  return (
    <SparklineComponent 
    id = {id}
    height = {height}
    width = {width}
    lineWidth={1}
    valueType = "Numeric"
    fill= {colour}
    border={{color:currentColour, width:2}}
    dataSource = {data}
    xName = "x"
    yName = "y"
    type = {type}
    tooltipSettings = {{visible:true,
    format: '${x} : data ${y}',
    trackLineSettings : {
      visible:true
    }
  
  }}
    >
<Inject services={[SparklineTooltip]}/>

    </SparklineComponent>
  )
}

export default SparkLine