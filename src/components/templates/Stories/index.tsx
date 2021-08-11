import React from 'react'

import { FlatList, View, Image, Text } from 'react-native'
import { styles } from '../../../pages/Feed/styles'
import { profiles } from '../../../utils/profiles'

export function Stories() {
  return (
    <FlatList
    data={profiles}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.profiles}
    keyExtractor={profile => profile.id}
    renderItem={({ item }) => (
      <View style={styles.profile}>
        <Image source={item.avatar} />
        <Text style={styles.username}>{item.name}</Text>
      </View>
    )}
  />
  )
}