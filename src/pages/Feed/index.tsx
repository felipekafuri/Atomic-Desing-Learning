import React from 'react';

import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  CameraIcon,
  LogoIcon,
  IgtvIcon,
} from '../../global/styles/icons';


import { profiles } from '../../utils/profiles';
import { posts } from '../../utils/posts';

import { styles } from './styles';
import { Posts } from '../../components/templates/Posts';
import { Stories } from '../../components/templates/Stories';

export function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSide}>
          <CameraIcon />
        </View>

        <LogoIcon />

        <View style={styles.headerSide}>
          <IgtvIcon />
          <MessengerIcon style={styles.messengerIcon} />
        </View>
      </View>

      <View style={styles.stories}>
        <Stories />
      </View>

      <Posts/>
    </View>
  );
}