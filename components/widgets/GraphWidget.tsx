import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import React from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BarGraphs from '../graphs/BarGraphs';
import LineGraphs from '../graphs/LineGraphs';

const GraphWidget = () => {
  const [selectedItem, setSelectedItem] = React.useState('Line');
  const [grpahData] = React.useState({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [
          // hours spent on each day
          3, 4, 2, 3, 2, 4, 5,
        ],
      },
    ],
  });

  const renderGraphByType = (selectedItem: string) => {
    switch (selectedItem) {
      case 'Bar':
        return <BarGraphs grpahData={grpahData} />;
      case 'Line':
        return <LineGraphs grpahData={grpahData} />;
      default:
        return <LineGraphs grpahData={grpahData} />;
    }
  };
  return (
    <View
      style={{
        width: '100%',
        height: 'auto',
        ...utils.borderRadius('lg'),
        ...utils.backgroundColor('background', '200'),
        ...utils.margin('lg', 'top'),
        ...utils.padding('md'),
        flexDirection: 'column',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            ...utils.fontSize('text', 'medium'),
            ...utils.textColor('background', '600'),
            ...utils.fontFamily('normal'),
            width: 'auto',
          }}
        >
          Weekly Spent Time
        </Text>
        <View>
          <SelectDropdown
            data={['Bar', 'Line']}
            defaultValue={'Line'}
            onSelect={(selectedItem) => {
              setSelectedItem(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      ...utils.fontSize('text', 'small'),
                      ...utils.textColor('background', '600'),
                      ...utils.fontFamily('normal'),
                    }}
                  >
                    {selectedItem || 'Select Time Period'}
                  </Text>
                  <Icon
                    name={
                      isOpened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'
                    }
                    size={20}
                    color={colors.background['600']}
                  />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...utils.padding('sm'),
                  }}
                >
                  <Text
                    style={{
                      ...utils.fontSize('text', 'medium'),
                      ...utils.textColor('background', '100'),
                      fontWeight: isSelected ? 'bold' : 'normal',
                    }}
                  >
                    {item}
                  </Text>
                </View>
              );
            }}
            dropdownOverlayColor='transparent'
            showsVerticalScrollIndicator={false}
            dropdownStyle={{
              width: 'auto',
              height: 'auto',
              ...utils.backgroundColor('background', '600'),
              ...utils.borderRadius('md'),
              ...utils.padding('sm'),
              ...utils.margin('sm', 'top'),
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          ...utils.margin('sm', 'top'),
          ...utils.padding('lg', 'right'),
          overflow: 'hidden',
        }}
      >
        {renderGraphByType(selectedItem)}
      </View>
    </View>
  );
};

export default GraphWidget;
