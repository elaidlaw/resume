/** @flow */

import React from 'react';
import { Link, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

import theme from './theme';

const nameSize = 1.3;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: theme.spacing.unit * 2,
    borderBottomColor: '#ddd',
    borderBottomWidth: theme.spacing.unit,
    borderBottomStyle: 'solid',
  },
  nameContainer: {
    flexDirection: 'row',
  },
  detailsContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginLeft: theme.spacing.unit * 10,
  },
  name: {
    ...theme.fonts.header.bold,
    fontSize: 24 * nameSize,
  },
  logo: {
    height: 18 * nameSize,
    marginTop: 4.8 * nameSize,
    marginRight: theme.spacing.unit * 2 * nameSize,
  },
  details: {
    ...theme.fonts.detail.regular,
    //color: theme.palette.accent1,
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
      <View style={styles.nameContainer}>
        <Image src={logoDark} style={styles.logo} />
        <Text style={styles.name}>{props.name.toUpperCase()}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.details}>{props.email}</Text>
        {!props.excludePersonalInformation &&
          <Text style={styles.details}>{props.phoneNumber}</Text>}
        <Text style={styles.details}>{props.website}</Text>
        {!props.excludePersonalInformation &&
          <Text style={styles.details}>{props.address}</Text>}
      </View>
    </View>
  );
}

const logoDark = 'data:image/png;base64,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';
