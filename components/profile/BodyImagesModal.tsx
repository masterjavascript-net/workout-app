import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import utils from '@/constants/Utils';
import { colors } from '@/constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
const BodyImagesModal = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalTitleContainer}>
          <Text style={styles.modalTitle}>Add Your Body Images</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={{ position: 'absolute', right: 24 }}
          >
            <EvilIcons name='close' size={30} color={colors.primary['400']} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalBodyContainer}>
          <Text
            style={{
              textAlign: 'center',
              ...utils.fontFamily('heading', 'bold'),
              ...utils.textColor('background', '500'),
            }}
          >
            You can upload up to 3 photos of your body. And add today's date and
            your current kilogram to see your progress.
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 14,
              ...utils.backgroundColor('background', '400'),
              ...utils.borderRadius('lg'),
              ...utils.padding('md'),
            }}
          >
            <View
              style={{
                height: 280,
                width: '48%',
                ...utils.backgroundColor('background', '300'),
                ...utils.borderRadius('lg'),
              }}
            ></View>
            <View
              style={{
                height: 280,
                width: '48%',
                ...utils.backgroundColor('background', '300'),
                ...utils.borderRadius('lg'),
              }}
            ></View>
            <View
              style={{
                height: 280,
                width: '48%',
                ...utils.backgroundColor('background', '300'),
                ...utils.borderRadius('lg'),
              }}
            ></View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text>Date</Text>
              <Text>Kg</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BodyImagesModal;

const styles = StyleSheet.create({
  //
  modalContainer: {
    ...utils.backgroundColor('background', '300'),
    height: '90%',
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  modalTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...utils.padding('lg'),
    borderBottomColor: colors.primary['400'],
    borderWidth: 0.2,
  },
  modalTitle: {
    textTransform: 'uppercase',
    ...utils.fontSize('heading', 'h6'),
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('heading', 'bold'),
  },
  modalBodyContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    ...utils.padding('md'),
  },
});
