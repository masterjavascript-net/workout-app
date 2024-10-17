import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import utils from '@/constants/Utils';
import { MultiSelect } from 'react-native-element-dropdown';
import { colors } from '@/constants/Colors';

interface SearchBarProps {
  onSearch: (input: string) => void; // onSearch fonksiyonunun tipi
  onBadgeSelect: (badges: string[]) => void; // onBadgeSelect fonksiyonunun tipi
  placeholder?: string;
  debounceTime?: number;
}

const BodyPartsDropdown = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const bodyParts = [
    { label: 'Chest', value: '1' },
    { label: 'Biceps', value: '2' },
    { label: 'Triceps', value: '3' },
    { label: 'Shoulders', value: '4' },
    { label: 'Back', value: '5' },
    { label: 'Leg', value: '6' },
    { label: 'ABS', value: '7' },
    { label: 'Wrists', value: '8' },
  ];

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        data={bodyParts}
        labelField='label'
        valueField='value'
        placeholder='Select Body Parts'
        value={selectedItems}
        onChange={(item) => {
          setSelectedItems(item);
        }}
        selectedStyle={styles.selectedStyle}
        containerStyle={styles.dropdownContainer}
        selectedTextStyle={styles.selectedTextStyle}
      />
      <View>
        {selectedItems.length > 0 && (
          <Text style={styles.selectedText}>
            Selected:
            {selectedItems
              .map((item) => bodyParts.find((bp) => bp.value === item)?.label)
              .join(', ')}
          </Text>
        )}
      </View>
    </View>
  );
};

const SearchBar = ({
  onSearch,
  placeholder = 'Search ...',
  debounceTime = 500,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState('');
  const [debouncedSearchText, setDebouncedSearchText] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText); // Debounce işlemi
    }, debounceTime);
    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  useEffect(() => {
    onSearch(debouncedSearchText); // Debounced metin girdisini handleFilter fonksiyonuna iletme
  }, [debouncedSearchText]);

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name='search1' size={20} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onChangeText={setSearchText} // Metin girdisi değiştiğinde state güncelleme
          value={searchText}
          autoCorrect={false}
          autoCapitalize='none'
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={handleClear}>
            <Icon style={styles.icon} name='close' size={20} />
          </TouchableOpacity>
        )}
      </View>
      <BodyPartsDropdown />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {},

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...utils.padding('md', 'top'),
    ...utils.padding('md', 'bottom'),
    ...utils.padding('lg'),
    ...utils.borderRadius('lg'),
    ...utils.borderColor('background', '300'),
    ...utils.borderWidth('thin'),
  },

  input: {
    flex: 1,
    ...utils.fontSize('text', 'large'),
    ...utils.margin('sm', 'left'),
    ...utils.textColor('background', '500'),
  },

  icon: {
    ...utils.textColor('background', '400'),
  },

  // dropdown
  dropdown: {
    height: 50,
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.primary[300],
    backgroundColor: colors.primary[300],
  },
  dropdownContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#888',
  },
  selectedTextStyle: {
    color: '#333',
    fontSize: 16,
  },
  iconStyle: {
    color: '#888',
    marginRight: 10,
  },
  selectedStyle: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 5,
  },
});
