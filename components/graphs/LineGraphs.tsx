import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineGraphs = ({
  grpahData,
}: {
  grpahData: { labels: string[]; datasets: { data: number[] }[] };
}) => {
  return (
    <LineChart
      data={grpahData}
      width={Dimensions.get('window').width + 15} // Add width property
      height={160}
      yAxisLabel=''
      yAxisSuffix=''
      fromZero={true}
      withInnerLines={false}
      withOuterLines={false}
      withHorizontalLabels={false}
      withShadow={false}
      xLabelsOffset={-10}
      bezier
      withDots
      chartConfig={{
        backgroundColor: colors.background['200'],
        backgroundGradientFrom: colors.background['200'],
        backgroundGradientTo: colors.background['200'],
        decimalPlaces: 0,
        color: () => colors.primary['400'],
        labelColor: () => colors.background['600'],
        propsForDots: {
          r: '5',
          strokeWidth: '1',
          stroke: colors.background['100'],
        },
        propsForVerticalLabels: {
          fontSize: 12,
          ...utils.fontFamily('text', 'normal'),
        },
      }}
    />
  );
};

export default LineGraphs;

const styles = StyleSheet.create({});
