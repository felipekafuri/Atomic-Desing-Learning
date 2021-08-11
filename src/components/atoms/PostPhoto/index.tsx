import React from 'react'
import {Image} from 'react-native'
import { ProfileIcon } from '../../../global/styles/icons'

import { styles } from '../../../pages/Feed/styles'

export function PostPhoto() {
  return (
    <Image source={ProfileIcon} style={styles.postAvatar} />
  )
}