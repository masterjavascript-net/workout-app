import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarGraphs = ({
  grpahData,
}: {
  grpahData: { labels: string[]; datasets: { data: number[] }[] };
}) => {
  return (
    <BarChart
      data={grpahData}
      width={Dimensions.get('window').width} // Add width property
      height={160}
      yAxisLabel=''
      yAxisSuffix=''
      fromZero={true}
      withInnerLines={false}
      withHorizontalLabels={false}
      xLabelsOffset={-5}
      style={{
        marginLeft: -60,
      }}
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
          ...utils.fontFamily('normal'),
        },
      }}
    />
  );
};

export default BarGraphs;

const styles = StyleSheet.create({});
