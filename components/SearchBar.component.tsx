import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import utils from '@/constants/Utils';
import BadgeCoursel from './explore/BadgeCoursel';

interface SearchBarProps {
  onSearch: (input: string) => void; // onSearch fonksiyonunun tipi
  onBadgeSelect: (badges: string[]) => void; // onBadgeSelect fonksiyonunun tipi
  placeholder?: string;
  debounceTime?: number;
}

const SearchBar = ({
  onSearch,
  onBadgeSelect,
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
      <BadgeCoursel onSelect={onBadgeSelect} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 120,
  },
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
});
