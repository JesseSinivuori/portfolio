import { SparklineComponent, Inject, SparklineTooltip, TrackLineSettings, Chart } from '@syncfusion/ej2-react-charts'
import { Tooltip } from '@syncfusion/ej2-react-popups';

type SparkLineProps = {
  id: string;
  height: string;
  width: string;
  color: string;
  data: Object[] | undefined;
  type: any;
  currentColor: any;
}


export default function SparkLine(props: SparkLineProps) {

  const { id, height, width, color, data, type, currentColor } = props;

  return (
    <div className=''>
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType={'Numeric'}
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName='x'
        yName='y'
        opacity={1}
        type={type}
        tooltipSettings={{
          visible: true,
          format: `${'x'} : data ${'y'}`,
          fill: 'blue',
          trackLineSettings: {
            visible: true,
          }
        }}
      >
        <Inject services={[SparklineTooltip, Tooltip, Chart]} />
      </SparklineComponent>
    </div>
  )
}
