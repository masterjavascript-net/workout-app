import AppLayouts from '@/components/AppLayouts.layout';
import CustomCardSlider from '@/components/CustomCardSlider.component';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Workout, workouts } from '.';
import Fuse from 'fuse.js';
import SearchBar from '@/components/SearchBar.component';

const allWorkouts = [...workouts];

const Explore = () => {
  const [searchResult, setSearchResult] = useState<Workout[]>(allWorkouts);
  const [searchText, setSearchText] = useState('');
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);

  const options = {
    includeScore: true,
    keys: ['category', 'name'],
    threshold: 0.3,
    distance: 100,
  };

  let fuse = new Fuse(allWorkouts, options);

  useEffect(() => {
    handleFilter();
  }, [searchText, selectedBadges]);

  function handleFilter() {
    let filteredWorkouts = allWorkouts;

    if (searchText) {
      const fuseResult = fuse.search(searchText);
      filteredWorkouts = fuseResult.map((res) => res.item);
    }

    if (selectedBadges.length > 0) {
      filteredWorkouts = filteredWorkouts.filter((workout) =>
        selectedBadges.some((badge) => workout.category.includes(badge))
      );
    }

    setSearchResult(filteredWorkouts);
  }

  function handleSearch(input: string) {
    setSearchText(input);
  }

  function handleBadgeSelect(badges: string[]) {
    setSelectedBadges(badges);
  }

  return (
    <AppLayouts>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} onBadgeSelect={handleBadgeSelect} />
        <CustomCardSlider workouts={searchResult} orientation='none' />
      </View>
    </AppLayouts>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
