/** @flow */

import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

type Props = {
  name: string,
  email: string,
  phoneNumber: string,
  website: string,
  address: string,
  excludePersonalInformation?: boolean,
}

export default function Header(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={theme.fonts.header.bold}>{props.name}</Text>
      <Text style={theme.fonts.body.regular}>{props.email}</Text>
      {!props.excludePersonalInformation &&
        <Text style={theme.fonts.body.regular}>{props.phoneNumber}</Text>}
      <Text style={theme.fonts.body.regular}>{props.website}</Text>
      {!props.excludePersonalInformation &&
        <Text style={theme.fonts.body.regular}>{props.address}</Text>}
    </View>
  );
}
