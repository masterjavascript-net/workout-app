import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import utils from '@/constants/Utils';

const badges = [
  { id: 1, name: 'Chest' },
  { id: 2, name: 'Biceps' },
  { id: 3, name: 'Triceps' },
  { id: 4, name: 'Shoulders' },
  { id: 5, name: 'Back' },
  { id: 6, name: 'Leg' },
  { id: 7, name: 'ABS' },
  { id: 8, name: 'Wrists' },
];

const Badge = ({
  name,
  isSelected,
  onToggleSelect,
}: {
  name: string;
  onToggleSelect: (name: string) => void;
  isSelected: boolean;
}) => {
  return (
    <Pressable
      style={{
        ...styles.badgeContainer,
        ...(isSelected ? styles.selectedBadge : {}),
      }}
      onPress={() => onToggleSelect(name)} // Rozet seçimini toggle etme
    >
      <Text style={styles.badgeText}>{name}</Text>
    </Pressable>
  );
};

const BadgeCoursel = ({
  onSelect,
}: {
  onSelect: (input: string[]) => void; // onSelect fonksiyonunun tipi
}) => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  function toggleSelection(name: string) {
    setSelectedBadges((prevSelected) => {
      if (prevSelected.includes(name)) {
        const updatedSelection = prevSelected.filter((badge) => badge !== name);
        onSelect(updatedSelection); // Seçili rozetleri handleFilter fonksiyonuna iletme
        return updatedSelection;
      } else {
        const updatedSelection = [...prevSelected, name];
        onSelect(updatedSelection); // Seçili rozetleri handleFilter fonksiyonuna iletme
        return updatedSelection;
      }
    });
  }

  return (
    <FlatList
      data={badges}
      renderItem={({ item }) => (
        <Badge
          key={item.id}
          name={item.name}
          onToggleSelect={toggleSelection} // Rozet seçimini toggle etme fonksiyonunu iletme
          isSelected={selectedBadges.includes(item.name)}
        />
      )}
      style={styles.badgesContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BadgeCoursel;

const styles = StyleSheet.create({
  badgesContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  badgeContainer: {
    borderWidth: 1,
    ...utils.borderColor('background', '300'),
    ...utils.borderRadius('lg'),
    ...utils.padding('md', 'left'),
    ...utils.padding('md', 'right'),
    ...utils.padding('sm', 'top'),
    ...utils.padding('sm', 'bottom'),
    ...utils.margin('smd', 'right'),
  },
  selectedBadge: {
    ...utils.backgroundColor('primary', '200'),
    ...utils.borderColor('primary', '200'),
  },
  badgeText: {
    ...utils.textColor('background', '500'),
  },
});
