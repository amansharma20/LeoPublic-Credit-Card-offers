/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import { SIZES } from '../../../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Responsive } from '../../../utils/layouts/Layout';
import BestOffersFlatlist from '../../../components/flatlistsItems/BestOffersFlatlist';
import { useQuery } from '@apollo/client';
import { GQLQuery } from '../../../persistence/query/Query';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function MoreOffers(props) {

    const offer = props.offer
    const { loading, data } = useQuery(GQLQuery.GET_BANK_CARD_OFFERS_BY_ID, {
        variables: {
            CardId: offer.Bank.Id,
        },
    });

    console.log('data')
    console.log(data)
    console.log('data')

    const LatestOffers = data && data.BankCardOfferQuery && data.BankCardOfferQuery.GetBankCardOfferByDate;

    const renderItem = ({ item }) => (
        <BestOffersFlatlist offer={item} />
    );

    if (loading)
        return (
            <View style={{ marginBottom: 12, alignItems: 'center' }}>
                <SkeletonPlaceholder>
                    <View style={styles.skeletonStyle} />
                    <View style={styles.skeletonStyle} />
                    <View style={styles.skeletonStyle} />
                </SkeletonPlaceholder>
            </View>
        );


    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View>
                    <FlatList
                        data={LatestOffers}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        contentContainerStyle={{ paddingBottom: Responsive.height(180) }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    contentContainer: {
        paddingBottom: Responsive.height(20),
    },
    body: {
        // paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding2,
    },
    skeletonStyle: {
        width: 300,
        height: 100,
        borderRadius: 8,
        marginTop: 30
    },
});
