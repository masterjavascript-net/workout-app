import AppLayouts from '@/components/AppLayouts.layout';
import { colors } from '@/constants/Colors';
import utils from '@/constants/Utils';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import BodyTransformationsCard from '@/components/profile/BodyTransformationsCard';
import ProfileHeader from '@/components/profile/ProfileHeader';
import BodyImagesModal from '@/components/profile/BodyImagesModal';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppLayouts>
      <ProfileHeader />
      <View style={styles.bodyContainer}>
        <ScrollView style={{ ...utils.borderRadius('xl') }}>
          <BodyTransformationsCard
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </ScrollView>
      </View>
      <BodyImagesModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
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
