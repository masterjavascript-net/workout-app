import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import utils from '@/constants/Utils';
import { badges } from '@/constants/DataExamples';

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
      onPress={() => onToggleSelect(name)}
    >
      <Text style={styles.badgeText}>{name}</Text>
    </Pressable>
  );
};

const BadgeList = ({ onSelect }: { onSelect: (input: string[]) => void }) => {
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  function toggleSelection(name: string) {
    setSelectedBadges((prevSelected) => {
      if (prevSelected.includes(name)) {
        const updatedSelection = prevSelected.filter((badge) => badge !== name);
        onSelect(updatedSelection);
        return updatedSelection;
      } else {
        const updatedSelection = [...prevSelected, name];
        onSelect(updatedSelection);
        return updatedSelection;
      }
    });
  }

  return (
    <View style={styles.badgesContainer}>
      {badges.map((badge) => (
        <Badge
          key={badge.id}
          name={badge.name}
          onToggleSelect={toggleSelection}
          isSelected={selectedBadges.includes(badge.name)}
        />
      ))}
    </View>
  );
};

export default BadgeList;

const styles = StyleSheet.create({
  badgesContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 10,
  },
  badgeContainer: {
    borderWidth: 1,
    ...utils.borderColor('background', '300'),
    ...utils.borderRadius('lg'),
    ...utils.padding('md', 'left'),
    ...utils.padding('md', 'right'),
    ...utils.padding('sm', 'top'),
    ...utils.padding('sm', 'bottom'),
  },
  selectedBadge: {
    ...utils.backgroundColor('primary', '200'),
    ...utils.borderColor('primary', '200'),
  },
  badgeText: {
    ...utils.fontFamily('heading', 'bold'),
    ...utils.textColor('background', '500'),
  },
});
