import AppLayouts from '@/components/AppLayouts.layout';
import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

import BodyTransformationsCard from '@/components/profile/BodyTransformationsCard';
import ProfileHeader from '@/components/profile/ProfileHeader';
import BodyImagesModal from '@/components/profile/BodyImagesModal';
import WorkoutScheduleModal from '@/components/profile/WorkoutScheduleModal';
import WorkoutScheduleCard from '@/components/profile/WorkoutScheduleCard';

const Profile = () => {
  const [bodyImagesModalVisible, setBodyImagesModalVisible] = useState(false);
  const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

  return (
    <AppLayouts>
      <ProfileHeader />
      <View style={styles.bodyContainer}>
        <ScrollView style={{ ...utils.borderRadius('xl') }}>
          <WorkoutScheduleCard
            modalVisible={scheduleModalVisible}
            setModalVisible={setScheduleModalVisible}
          />
          <BodyTransformationsCard
            modalVisible={bodyImagesModalVisible}
            setModalVisible={setBodyImagesModalVisible}
          />
        </ScrollView>
      </View>
      <BodyImagesModal
        modalVisible={bodyImagesModalVisible}
        setModalVisible={setBodyImagesModalVisible}
      />
      <WorkoutScheduleModal
        modalVisible={scheduleModalVisible}
        setModalVisible={setScheduleModalVisible}
      />
    </AppLayouts>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 250,
    height: '80%',
    backgroundColor: colors.background[200],
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    ...utils.padding('xl'),
  },
});
