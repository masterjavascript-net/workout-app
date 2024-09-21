import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import { Exercise } from '@/constants/Others';
import Icon from 'react-native-vector-icons/Ionicons';
import utils from '@/constants/Utils';

const AccordionItem = (item: Exercise) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelect = () => {
    setSelectedItem(selectedItem === item.id ? null : item.id);
  };

  // const renderExerciseSet = () => {
  //   for (let index = 0; index < item.setCount; index++) {
  //     return;
  //     <View></View>;
  //   }
  // };

  return (
    <View
      style={[
        styles.accordionItem,
        selectedItem === item.id && styles.selectedExercise,
      ]}
      key={item.id}
    >
      <Pressable onPress={() => handleSelect()}>
        <View style={styles.exerciseItem} key={item.id}>
          <Image source={{ uri: item.image }} style={styles.exerciseImage} />
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseExtraInfo}>
              💪🏽 {item.setCount} sets
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name='play-outline' size={25} color='#fff' />
          </TouchableOpacity>
        </View>
      </Pressable>

      {selectedItem === item.id && (
        <View style={styles.dropdownContainer}>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text>1</Text>
            <Text>{item.repCount} Reps</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text>X</Text>
            <Text>00:{item.restTime} REST</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text>2</Text>
            <Text>{item.repCount} Reps</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text>X</Text>
            <Text>00:{item.restTime} REST</Text>
          </View>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <Text>3</Text>
            <Text>{item.repCount} Reps</Text>
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  accordionItem: {
    overflow: 'hidden',
    marginBottom: 5,
    padding: 10,
  },
  selectedExercise: {
    borderRadius: 10,
    // backgroundColor: 'grey',
    ...utils.backgroundColor('primary', '100'),
  },

  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },

  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  exerciseExtraInfo: {
    marginTop: 5,
    ...utils.textColor('background', '500'),
  },
  dropdownContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
});

export default AccordionItem;
