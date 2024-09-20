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
            <Text style={styles.exerciseDuration}>{item.duration}</Text>
          </View>
          <TouchableOpacity>
            <Icon name='play-outline' size={25} color='#fff' />
          </TouchableOpacity>
        </View>
      </Pressable>

      {selectedItem === item.id && (
        <View style={styles.dropdownContainer}>
          <Text>3x12</Text>
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
    ...utils.backgroundColor('background', '500'),
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
  exerciseDuration: {
    color: '#999',
  },
  dropdownContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
});

export default AccordionItem;
