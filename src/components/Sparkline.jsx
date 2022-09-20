import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { sparklineData } from "../custom";

const Sparkline = () => {
  return (
    <SparklineComponent
      id={sparklineData.id}
      type={sparklineData.type}
      valueType={sparklineData.valueType}
      width={sparklineData.width}
      height={sparklineData.height}
      lineWidth={sparklineData.lineWidth}
      fill={sparklineData.filLColor}
      border={sparklineData.border}
      xName={sparklineData.xName}
      yName={sparklineData.yName}
      dataSource={sparklineData.coordinates}
      tooltipSettings={sparklineData.tooltipSettings}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default Sparkline;
