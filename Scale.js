import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const drawerWidth = (width * 70) / 100;
export const responsiveHeight = (h) => {
    return height * (h / 100);
};

export const responsiveWidth = (w) => {
    return width * (w / 100);
};

