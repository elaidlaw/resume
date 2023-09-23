/** @flow */

import * as React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

type Props = {
  title: string,
  children: React.Node,
};

export default function Experience(props: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={theme.fonts.detail.regular}>
        {props.title && <Text style={theme.fonts.body.bold}>{props.title}: </Text>}
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: theme.spacing.unit,
  },
});
