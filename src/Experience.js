/** @flow */

import * as React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

import theme from './theme';

type Props = {
  title: string,
  subtitle?: string,
  startDate?: string,
  endDate?: string,
  children: React.Node,
};

export default function Experience(props: Props) {
  return (
    <View style={styles.container} wrap={false}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {props.title}{props.subtitle != null && ', '}
          {props.subtitle != null &&
            <Text style={theme.fonts.body.regular}>
              {props.subtitle}
            </Text>}
        </Text>
        {props.startDate != null &&
          <Text style={styles.dates}>
            {props.startDate} – {props.endDate || 'Present'}
          </Text>}
      </View>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    marginVertical: theme.spacing.unit,
  },
  title: {
    ...theme.fonts.body.bold,
    flex: 2,
  },
  dates: {
    ...theme.fonts.body.regular,
    textAlign: 'right',
    flex: 1,
  },
  body: {
    ...theme.fonts.body.regular,
  },
});
