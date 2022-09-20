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
import { barChartData } from "../custom";

const BarChart = () => {
  return (
    <ChartComponent
      id={barChartData.id}
      width={barChartData.width}
      height={barChartData.height}
      chartArea={barChartData.chartArea}
      primaryXAxis={barChartData.primaryXAxis}
      primaryYAxis={barChartData.primaryYAxis}
      tooltip={barChartData.tooltip}
      legendSettings={barChartData.legendSettings}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {barChartData.series.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
