import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from '../../../pages/Feed/styles'
import { PostPhoto } from '../../atoms/PostPhoto'

interface Props {
  username: string
  location: string
}

export function PostHeader({ location, username }: Props) {
  return (
    <View style={styles.postHeader}>
      <PostPhoto />
      <View>
        <Text style={styles.postUsername}>{username}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  )
}