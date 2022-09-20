import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { sparklineConfig } from "../custom";

const Sparkline = () => {
  return (
    <SparklineComponent
      id={sparklineConfig.id}
      type={sparklineConfig.type}
      valueType={sparklineConfig.valueType}
      width={sparklineConfig.width}
      height={sparklineConfig.height}
      lineWidth={sparklineConfig.lineWidth}
      fill={sparklineConfig.filLColor}
      border={sparklineConfig.border}
      xName={sparklineConfig.xName}
      yName={sparklineConfig.yName}
      dataSource={sparklineConfig.coordinates}
      tooltipSettings={sparklineConfig.tooltipSettings}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default Sparkline;
