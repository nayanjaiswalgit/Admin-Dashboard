import React from 'react'
import { ChartComponent,SeriesCollectionDirective,
SeriesDirective, Inject, SolineAreaSeries, LineSeries, DateTime, Legend , SplineAreaSeries} from '@syncfusion/ej2-react-charts'


import { useStateContext } from '../../contexts/ContextProvider'
import {Header} from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
const Area = () => {
  const {currentMode} = useStateContext();
  return (
    <div>

<div className='m-4 md:mt-24 p-10 bg-white dark:bg-secondary-dark-bg 
rounded-3xl'>
  <Header category="Area" title="Inflation Rate in Percentage"/>



    <ChartComponent
    id="area-chart"
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis = {areaPrimaryYAxis}
    chartArea = {{border:{width:0}}}
   
    background = {currentMode === 'Dark' ? '#3337E' : '#fff'}
    >
      
      <Inject services={[SplineAreaSeries, DateTime, Legend ]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  )
}

export default Area