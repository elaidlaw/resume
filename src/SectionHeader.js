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
      <Text style={styles.text}>{props.text.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
    marginTop: theme.spacing.unit * 3,
    paddingBottom: 2,
    marginBottom: theme.spacing.unit * 0,
  },
  text: {
    ...theme.fonts.header.bold,
    lineHeight: 1,
  },
});
