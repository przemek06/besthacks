import React from 'react';

import { getChart } from '../connection/chart.js'

export default class Index extends React.Component {

  sampleChart="{type:'bar',data:{labels:[2012,2013,2014,2015,2016],datasets:[{label:'Users',data:[120,60,50,180,120]}]}}"

  async componentDidMount() {
    const data = await getChart(this.sampleChart)
    this.refs.chart.src = data
  }

  render() {
    return (
      <React.Fragment>
        <img src="" alt="Chart" ref="chart"/>
      </React.Fragment>
    );
  }
}
