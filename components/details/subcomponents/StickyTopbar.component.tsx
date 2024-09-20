import utils from '@/constants/Utils';
import { Platform } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StickyTopbar = ({ onBackPress, stickyTop, stickyOpacity }: any) => {
  return (
    <Animated.View
      style={[styles.animatedView, { top: stickyTop, opacity: stickyOpacity }]}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backNavButton} onPress={onBackPress}>
          <Icon name='chevron-back' size={30} color='#fff' />
          <Text style={styles.navText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='bookmark-outline' size={30} color='#fff' />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    height: 110,
    ...utils.backgroundColor('background', '100'),
    justifyContent: 'flex-end',
    position: 'absolute',
    top: -150, // -150 -> 0
    left: 0,
    right: 0,
    opacity: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 5,
        },
      },
    }),
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backNavButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default StickyTopbar;
