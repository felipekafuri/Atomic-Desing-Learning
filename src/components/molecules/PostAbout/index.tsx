import React from 'react'

import { View, Image, Text, ImageProps } from 'react-native'
import { styles } from '../../../pages/Feed/styles'

interface Props {
  avatar: ImageProps
  likes: string
}

export function PostAbout({avatar, likes}:Props) {
  return (
    <View style={styles.postAbout}>
      <Image source={avatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{likes}</Text>
    </View>
  )
}