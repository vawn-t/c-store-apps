import {
  ImageBackground,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';

// Models
import { Slide as SlideModel } from '@repo/models';

// Components
import { Typography } from '@repo/ui';

// Types
import { FontWeight, SizeType, TypoVariant } from '@repo/ui';

// Images
import { Images } from '@assets/images';

// Styles
import styles from './styles';

interface IProps {
  item: SlideModel;
  index: number;
}

const Slide = ({ item, index }: IProps) => {
  const { height, width } = useWindowDimensions();

  return (
    <ImageBackground
      resizeMode="cover"
      source={item.image}
      style={[styles.container, { width: width }]}
    >
      <View style={[styles.content, { height: height * 0.7 }]}>
        <Typography
          text={item.title}
          fontWeight={FontWeight.Bold}
          size={SizeType.Xxl}
          style={styles.title}
          variant={TypoVariant.Paragraph2}
        />
        {index === 0 && (
          <View style={styles.imageWrapper}>
            <Image source={Images.logo} />
          </View>
        )}
        <Typography text={item.description || ''} style={styles.description} />
      </View>
    </ImageBackground>
  );
};

export default Slide;
