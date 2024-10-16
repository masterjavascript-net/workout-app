import AppLayouts from '@/components/AppLayouts.layout';
import CustomCardSlider from '@/components/CustomCardSlider.component';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Fuse from 'fuse.js';
import SearchBar from '@/components/SearchBar.component';
import { WorkoutPlan, workoutPlans } from '@/constants/DataExamples';

const allWorkouts = [...workoutPlans];

const Explore = () => {
  const [searchResult, setSearchResult] = useState<WorkoutPlan[]>(allWorkouts);
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
        <CustomCardSlider workoutPlans={searchResult} orientation='vertical' />
      </View>
    </AppLayouts>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
