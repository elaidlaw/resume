/** @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

type Props = {
  children: React.Node,
};

export default function ListItem(props: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.itemContent}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: theme.spacing.unit * 2,
  },
  bulletPoint: {
    width: 10,
    ...theme.fonts.detail.regular,
  },
  itemContent: {
    flex: 1,
    ...theme.fonts.detail.regular,
  },
});
