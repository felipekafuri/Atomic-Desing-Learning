import React from 'react'
import { ImageProps } from 'react-native'
import { View, Image, Text } from 'react-native'
import { styles } from '../../../pages/Feed/styles'
import { PostDescription } from '../../atoms/PostDescription'
import { PostAbout } from '../../molecules/PostAbout'
import { PostHeader } from '../../molecules/PostHeader/indext'
import { PostOptions } from '../../molecules/PostOptions'

type Profile = {
  id: string
  name: string
  avatar: ImageProps
}

export type PostProps = {
  id: string
  username: string
  location: string
  likes: string
  cover: ImageProps
  description: string
  lastLiked: Profile
}

interface Props {
  data: PostProps
}

export function Post({ data }: Props) {
  return (
    <View style={styles.post}>
      <PostHeader username={data.username} location={data.location} />
      <Image source={data.cover} style={styles.cover} />

      <View style={styles.postFooter}>
        <PostOptions />
        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
        <PostDescription description={data.description} />
      </View>
    </View>
  )
}