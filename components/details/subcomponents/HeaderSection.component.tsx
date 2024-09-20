import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import utils from '@/constants/Utils';
import { colors } from '@/constants/Colors';
import CustomButton from '@/components/CustomButton.component';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderSection = ({
  title,
  exerciseCount,
  onBackPress,
}: {
  title: string;
  exerciseCount: number;
  onBackPress: any;
}) => {
  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:1400/0*1z3rvZBw4YGD1d91',
        }}
        resizeMode='cover'
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'rgba(0,0,0,0.0)', 'rgba(0,0,0,0.99)']}
          style={styles.gradientOverlay}
        />
        <View style={styles.topBar}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}
            onPress={onBackPress}
          >
            <Icon name='chevron-back' size={30} color='#fff' />
            <Text style={styles.navText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='bookmark-outline' size={30} color='#fff' />
          </TouchableOpacity>
        </View>

        <View style={styles.workoutInfo}>
          <Text style={styles.title}>
            Chest Workout Chest Workout Chest Workout
          </Text>
          <View style={styles.badgeList}>
            <View style={styles.badgeItem}>
              <Icon
                name='barbell-outline'
                size={18}
                color={colors.primary['400']}
              />
              <Text style={styles.badgeText}>10 Exercise</Text>
            </View>
          </View>

          <CustomButton
            label='Start Workout'
            widthType='full'
            onPress={() => {}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  // ----------------- HEADER
  headerContainer: {
    height: 670,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
    zIndex: 2,
    paddingHorizontal: 16,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    ...utils.textColor('background', '600'),
  },
  workoutInfo: {
    zIndex: 2,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  badgeList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  badgeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    ...utils.backgroundColor('background', '300'),
    ...utils.borderRadius('md'),
  },
  badgeText: {
    marginLeft: 5,
    ...utils.textColor('background', '600'),
  },
});
