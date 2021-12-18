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
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    borderBottomStyle: 'solid',
    marginTop: theme.spacing.unit * 1,
    paddingBottom: 3,
    marginBottom: theme.spacing.unit * 0,
  },
  text: {
    ...theme.fonts.h2.bold,
    lineHeight: 1,
  },
});
