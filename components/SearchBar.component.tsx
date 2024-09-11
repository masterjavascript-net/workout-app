import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import utils from "@/constants/Utils";

interface SearchBarProps {
  onSearch: (text: string) => void;
  placeholder?: string;
  debounceTime?: number;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search ...",
  debounceTime = 500,
}: SearchBarProps) => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText, debounceTime]);

  useEffect(() => {
    onSearch(debouncedSearchText);
  }, [debouncedSearchText, onSearch]);

  //
  const handleClear = () => {
    setSearchText("");
  };

  return (
    <View style={styles.container}>
      <Icon name="search1" size={20} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={setSearchText}
        value={searchText}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Icon name="close" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...utils.backgroundColor("background", "500"),
    ...utils.padding("md", "top"),
    ...utils.padding("md", "bottom"),
    ...utils.padding("lg"),
    ...utils.borderRadius("lg"),
  },
  input: {
    flex: 1,
    ...utils.fontSize("text", "large"),
    ...utils.margin("sm", "left"),
    ...utils.textColor("background", "300"),
  },

  icon: {
    ...utils.textColor("background", "300"),
  },
});
