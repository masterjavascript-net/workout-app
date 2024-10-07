import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import utils from '@/constants/Utils';
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
} from '@expo/vector-icons';
import { Image } from 'expo-image';
import { colors } from '@/constants/Colors';
import { router } from 'expo-router';
const BodyTransformationsCard = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.profileInfoCard}>
      <Text style={styles.cardTitle}>Body Transformations</Text>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyLeftSide}>
          <Image
            source={{
              uri: 'https://c.pxhere.com/photos/ca/51/sport_fitness_exercise_pilates_face_man_body_man_body_man-487950.jpg!s2',
            }}
            style={styles.image}
          />
          <View style={styles.details}>
            <View style={styles.detailsItem}>
              <MaterialCommunityIcons
                name='weight-kilogram'
                size={18}
                color='white'
              />
              <Text style={styles.text}>65 kg</Text>
            </View>
            <View style={styles.detailsItem}>
              <Fontisto name='date' size={16} color='white' />
              <Text style={styles.text}>04/06/2024</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardBodyRightSide}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <AntDesign
              name='pluscircle'
              size={35}
              color={colors.primary['400']}
            />
            {/* <EvilIcons
                    name='plus'
                    size={45}
                    color={colors.primary['400']}
                  /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push({ pathname: '/bodyTransformations' })}
          >
            <Text style={styles.moreButton}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BodyTransformationsCard;

const styles = StyleSheet.create({
  profileInfoCard: {
    height: 320,
    ...utils.borderRadius('xl'),
    ...utils.margin('lg', 'bottom'),
    ...utils.padding('md'),
    ...utils.backgroundColor('background', '300'),
  },
  cardTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    ...utils.fontSize('heading', 'h6'),
    ...utils.textColor('background', '600'),
    ...utils.fontFamily('heading', 'bold'),
    ...utils.margin('lg', 'bottom'),
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  cardBodyLeftSide: {
    width: '65%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '85%',
    ...utils.borderRadius('lg'),
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  detailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  text: {
    color: '#fff',
    ...utils.fontFamily('heading', 'normal'),
  },
  cardBodyRightSide: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  moreButton: {
    fontSize: 16,
    ...utils.textColor('primary', '400'),
    ...utils.fontFamily('heading', 'normal'),
  },
});
