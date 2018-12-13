/** @flow */

import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

type Props = {
  text: string,
};

export default function SectionHeader(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={theme.fonts.header.bold}>{props.text.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,//.5,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * -1,
  },
});
