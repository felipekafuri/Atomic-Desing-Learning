import React from 'react'

import { Text, TextProps } from 'react-native'
import {styles} from '../../../pages/Feed/styles'

interface Props extends TextProps{
  description: string
}

export function PostDescription({description, ...rest}:Props) {
  return (
    <Text style={styles.description} {...rest}>{description}</Text>
  )
}