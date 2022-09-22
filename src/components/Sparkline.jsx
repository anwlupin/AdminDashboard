import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { sparklineConfig } from "../config";

import dummy from "../config/dummy"; //! dummy

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
      dataSource={dummy.sparklineDataSrc}
      tooltipSettings={sparklineConfig.tooltipSettings}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default Sparkline;
