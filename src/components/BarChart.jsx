import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { barChartConfig } from "../config";

import dummy from "../config/dummy"; //! dummy

const BarChart = () => {
  return (
    <ChartComponent
      id={barChartConfig.id}
      width={barChartConfig.width}
      height={barChartConfig.height}
      chartArea={barChartConfig.chartArea}
      primaryXAxis={barChartConfig.primaryXAxis}
      primaryYAxis={barChartConfig.primaryYAxis}
      tooltip={barChartConfig.tooltip}
      legendSettings={barChartConfig.legendSettings}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {dummy.barChartSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
