/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Image, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SIZES } from '../../../constants/theme';
import ShoppingIcon from '../../../assets/svgs/shoppingIcon.svg';
import TravelIcon from '../../../assets/svgs/travelIcon.svg';
import GroceriesIcon from '../../../assets/svgs/groceriesIcon.svg';
import EntertainmentIcon from '../../../assets/svgs/entertainmentIcon.svg';
import OthersIcon from '../../../assets/svgs/othersIcon.svg';
import { Responsive } from '../../../utils/layouts/Layout';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CommonHeader from '../../../components/headers/CommonHeaderWithBackButton';
import { icons } from '../../../constants';
import { useMutation, useQuery } from '@apollo/client';
import { GQLMutation } from '../../../persistence/mutation/Mutation';
import { GQLQuery } from '../../../persistence/query/Query';
import CommonLoading from '../../../components/CommonLoading';
import { useNavigation } from '@react-navigation/core';


export default function MonthlySpend(props) {

    const monthlySpends = props.route.params.expense;
    console.log(props)

    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(1);

    const [expense, setExpense] = useState(0);
    const [expenseShopping, setExpenseShopping] = useState(monthlySpends.Shopping);
    const [expenseTravelling, setExpenseTravelling] = useState(monthlySpends.Travel);
    const [expenseGroceries, setExpenseGroceries] = useState(monthlySpends.Groceries);
    const [expenseEntermainment, setExpenseEntermainment] = useState(monthlySpends.Entertainment);
    const [expenseOthers, setExpenseOthers] = useState(monthlySpends.Others);
    const [expenseTotalSpendCreditCard, setExpenseTotalSpendCreditCard] = useState(monthlySpends.TotalCreditCardSpend);


    const [addSpend, { data, error, loading }] = useMutation(GQLMutation.ADD_USER_EXPENSE);

    const onPressSubmitData = () => {
        addSpend({
            variables: {
                Entertainment: expenseEntermainment,
                Groceries: expenseGroceries,
                Others: expenseOthers,
                Shopping: expenseShopping,
                TotalCreditCardSpend: expenseTotalSpendCreditCard,
                Travel: expenseTravelling
            }
        });
    };

    if (data) {
        navigation.goBack();
        props.route.params.refetch();
    }

    const totalExpense = () => {
        return +expenseShopping + +expenseTravelling + +expenseGroceries + +expenseEntermainment + +expenseOthers
    }

    const spendTextFieldSelected = (id) => {
        setShowModal(false)
        switch (id) {
            case 1:
                setExpenseShopping(expense);
                setExpense(0)
                break;

            case 2:
                setExpenseTravelling(expense);
                setExpense(0)
                break;

            case 3:
                setExpenseGroceries(expense);
                setExpense(0)
                break;

            case 4:
                setExpenseEntermainment(expense);
                setExpense(0)
                break;

            case 5:
                setExpenseOthers(expense);
                setExpense(0)
                break;
            case 6:
                setExpenseTotalSpendCreditCard(expense);
                setExpense(0)
                break;

            default:

        }
    };


    const openExpenseModel = (id) => {
        setSelectedId(id)
        setShowModal(true)
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <CommonHeader children="Monthly Spend Pattern" />
            </View>
            <View style={styles.body}>
                <TouchableOpacity onPress={{}} style={styles.topContainer}>
                    <AnimatedCircularProgress
                        style={styles.animatedCircleSize}
                        size={200}
                        width={12}
                        fill={30}
                        tintColor="#CD4D78"
                        // onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#b9b9b9"
                    />
                    <Text style={styles.headerTextCircle}>
                        Monthly{'\n'}Expenses{'\n'}₹ {totalExpense()}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(1)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <ShoppingIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Shopping
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        ₹ {expenseShopping}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(2)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <TravelIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Travel
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        ₹ {expenseTravelling}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(3)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <GroceriesIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Groceries
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        ₹ {expenseGroceries}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(4)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <EntertainmentIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Entertainment
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        ₹ {expenseEntermainment}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(5)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <OthersIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Others
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        ₹ {expenseOthers}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openExpenseModel(6)} style={styles.itemContainer}>
                    <View style={styles.leftContainer}>
                        <OthersIcon style={{ marginRight: 8 }} />
                        <Text style={styles.leftText}>
                            Total Spend(Credit Card)
                        </Text>
                    </View>
                    <Text style={{ fontSize: 18 }}>
                        {expenseTotalSpendCreditCard} %
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSubmitData} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
            {showModal && (
                <Modal
                    showModal={showModal}
                    onRequestClose={() => setShowModal(false)}
                    transparent={true}
                    statusBarTranslucent={true}
                    animationType="slide">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.modalHeader}>Your Monthly Spend</Text>
                                <TouchableOpacity style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }} onPress={() => setShowModal(false)}>
                                    <Image source={icons.crossIcon} style={{ width: 14, height: 14 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.writeReviewContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    autoCapitalize
                                    keyboardType={'numeric'}
                                    onChangeText={(text) => setExpense(text)}
                                    onSubmitEditing={() => setShowModal(false)}
                                    autoFocus={true}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType={'go'}
                                    maxLength={6}
                                />
                                <TouchableOpacity onPress={() => spendTextFieldSelected(selectedId)} >
                                    <Image source={icons.forwardButton} style={{ width: 48, height: 48, marginLeft: 16 }} />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d2d8f',
    },
    topContainer: {
        alignItems: 'center',
        height: 220
    },
    body: {
        padding: SIZES.padding,
        paddingVertical: 20,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 100
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eff0f2'
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        fontSize: 14, color: '#455671',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    headerTextCircle: {
        fontSize: 20, textAlign: 'center', marginTop: -140,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    buttonContainer: {
        backgroundColor: '#4D2D8F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: Responsive.height(48),
        marginVertical: SIZES.padding,
        marginBottom: 50
    },
    buttonText: {
        color: '#ffffff', fontSize: 16,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    modalContainer: {
        backgroundColor: '#ffffff',
        height: '50%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        width: '100%',
        padding: SIZES.padding,
    },
    modalHeader: {
        fontSize: 22,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    writeReviewContainer: {
        paddingVertical: SIZES.padding,
        flexDirection: 'row',
    },
    inputText: {
        backgroundColor: '#f4f5f7',
        borderRadius: 8,
        height: 48,
        color: '#3E3E3E',
        textAlignVertical: 'top',
        padding: 12,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
        width: '80%',
    },
    buttonsContainer: {
        marginTop: 40,
    },
    saveButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d2d8f',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    closeButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: '#4d2d8f',
    },
    closeButtonText: {
        color: '#4d2d8f',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
});
