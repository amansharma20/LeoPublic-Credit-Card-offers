/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform,
    Modal,
} from 'react-native';
import { SIZES } from '../../constants/theme';
import { Responsive } from '../../utils/layouts/Layout';
import { useMutation, useQuery } from '@apollo/client';
import { GQLQuery } from '../../persistence/query/Query';
import { launchImageLibrary } from 'react-native-image-picker';
import { applicationProperties } from '../../../application.properties';
import axios from 'axios';
import CommonHeader from '../../components/headers/CommonHeaderWithBackButton';
import { useNavigation } from '@react-navigation/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { GQLMutation } from '../../persistence/mutation/Mutation';
import { format } from 'date-fns';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';


export default function ProfileScreen() {

    const { dataa } = useQuery(GQLQuery.GET_USER_PROFILE);


    const [open, setOpen] = useState(false);
    const [openEmploymentType, setOpenEmploymentType] = useState(false);
    const [openSalaryRange, setOpenSalaryRange] = useState(false);
    const [salaryValue, setSalaryValue] = useState(null);
    const [employmentValue, setEmploymentValue] = useState(null);
    const [genderValue, setGenderValue] = useState(null);

    const [employmentType, setEmploymentType] = useState([
        { label: 'Employed', value: 'employed' },
        { label: 'Unemployed', value: 'unemployed' },
    ]);
    const [salaryType, setSalaryType] = useState([
        { label: 'Less than 2.5 Lacs', value: '250000' },
        { label: 'Between 2.5 Lacs to 5 Lacs', value: '500000' },
        { label: 'More than 5 Lacs', value: '1000000' },
    ]);
    const [gender, setGender] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ]);

    const [pinCode, setPinCode] = useState();

    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);

    const navigation = useNavigation();


    const schema = yup.object().shape({
        pincode: yup.number().required('Pincode' + ' ' + 'is required'),
    });

    const {
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [submitBasicDetails, { data, error }] = useMutation(GQLMutation.SAVE_USER_BASIC_DETAILS);

    const onDataSubmit = () => {
        CommonLoading.show();
        submitBasicDetails({
            variables: {
                AnnualSalary: salaryValue,
                EmploymentType: employmentValue,
                Gender: genderValue,
                PinCode: pinCode,
                DateOfBirth: date.toISOString(),
            },
        });
    };

    if (data && data.UserBasicDetailsMutation && data.UserBasicDetailsMutation.UpdateUserBasicDetails === 'Updated') {
        navigation.navigate('CardHolder');
        CommonLoading.hide();
    }
    if (error != undefined) {
        CommonLoading.hide();
    }

    const formatedDate = (date) => {
        var formattedDate = format(date, 'MMMM do, yyyy');
        return formattedDate;
    };




    const selectFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option',
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {

            const FileName = response.assets && response.assets[0] && response.assets[0].fileName;
            const type = response.assets && response.assets[0] && response.assets[0].type;
            const uri = response.assets && response.assets[0] && response.assets[0].uri;

            const datas = new FormData();
            datas.append('ImageFile', {
                fileName: FileName,
                type: type,
                name: type,
                uri: Platform.OS === 'android' ? uri : uri.replace('file://', ''),
            });
            uploadImage(datas);
        });
    };

    async function uploadImage(data) {

        const client = axios.create({
            baseURL: applicationProperties.baseUrl,
        });
        const header = {
            Authorization: Bearer,
            'Content-Type': 'multipart/form-data',
        };
        client.post('Profile/CustomerProfileUpdate', data, {
            headers: header,
        }).then((response) => {
            console.log(response);

        })
            .catch(() => {

            });
    }
    const profilePicture = dataa && dataa.UserProfileQuery && dataa.UserProfileQuery.GetUserProfile && dataa && dataa.UserProfileQuery && data.UserProfileQuery.GetUserProfile.ProfilePictureStoragePath;


    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                <View>
                    <CommonHeader children="Edit Profile" />
                </View>
                <View style={styles.backgroundColorView}>

                    <View style={styles.profilePictureHeaderContainer}>
                        <View style={styles.pfpAlignmentContainer}>
                            <Image
                                source={{
                                    uri: applicationProperties.imageUrl + profilePicture,
                                    headers: {
                                        Authorization: uploadImage,
                                    },
                                }}
                            style={styles.profileImage}
                            />
                            <TouchableOpacity onPress={() => {
                                selectFile();
                            }}>
                                <Text>Change Picture</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: '#fff', paddingBottom: 500, paddingTop: 50 }}>
                    <View style={{ paddingHorizontal: 28 }}>
                        <TouchableOpacity onPress={() => setShowModal(true)}>
                            <View style={styles.dobContainer}>
                                <Text style={styles.dobText}>{formatedDate(date)}</Text>
                            </View>
                        </TouchableOpacity>
                        {showModal && (
                            <Modal
                                animationType="fade"
                                transparent={true}
                                showModal={showModal}
                                backgroundColor="black"
                                onRequestClose={() => setShowModal(false)}>
                                <DatePicker
                                    date={date}
                                    onDateChange={setDate}
                                    mode="date"
                                    style={styles.datePicker}
                                />
                                <View style={styles.dateSubmitContainer}>
                                    <TouchableOpacity
                                        onPress={() => setShowModal(false)}>
                                        <Text style={styles.submitDateButtonText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                        )}
                        <DropDownPicker
                            open={openEmploymentType}
                            value={employmentValue}
                            items={employmentType}
                            setOpen={setOpenEmploymentType}
                            setValue={setEmploymentValue}
                            setItems={setEmploymentType}
                            zIndex={10000}
                            zIndexInverse={1000}
                            placeholder="Employment Type"
                            style={styles.pickerContainer}
                            placeholderStyle={styles.placeholderText}
                            listMode="FLATLIST"
                            dropDownContainerStyle={styles.dropDownContainerStyle}
                            closeAfterSelecting={true}
                            textStyle={{
                                fontFamily: Platform.select({
                                    ios: 'Exo2-Medium',
                                    android: 'Exo2Medium',
                                }),
                            }}
                        />
                        <DropDownPicker
                            open={openSalaryRange}
                            value={salaryValue}
                            items={salaryType}
                            setOpen={setOpenSalaryRange}
                            setValue={setSalaryValue}
                            setItems={setSalaryType}
                            zIndex={6000}
                            zIndexInverse={1000}
                            placeholder="Annual Salary Range (???)"
                            style={styles.pickerContainer}
                            placeholderStyle={styles.placeholderText}
                            listMode="FLATLIST"
                            dropDownContainerStyle={styles.dropDownContainerStyle}
                            closeAfterSelecting={true}
                            textStyle={{
                                fontFamily: Platform.select({
                                    ios: 'Exo2-Medium',
                                    android: 'Exo2Medium',
                                }),
                            }}
                        />
                        <View>
                            <Controller
                                control={control}
                                render={({ field: { onBlur } }) => (
                                    <TextInput
                                        label={'Pincode'}
                                        onBlur={onBlur}
                                        onChangeText={(value) => setPinCode(value)}
                                        error={errors.pincode}
                                        style={styles.pincodeInput}
                                        placeholderTextColor={'#B4B4B4'}
                                        placeholder={'122018'}
                                        keyboardType={'number-pad'}
                                        maxLength={6}
                                    />
                                )}
                                name="pincode"
                                defaultValue={''}
                            />
                        </View>
                        <View >
                            <TouchableOpacity
                                // onPress={handleSubmit(onSubmit)}
                                onPress={() => {
                                    onDataSubmit();
                                }}
                            >
                                <View style={styles.submitButtonContainer}>
                                    <Text style={styles.submitButtonText}>Update</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4d2d8f',
    },
    body: {
        //padding: SIZES.padding,
    },
    backgroundColorView: {
        backgroundColor: '#4d2d8f',
    },
    profilePictureHeaderContainer: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        padding: SIZES.padding,
        marginTop: Responsive.height(50),
    },
    pfpAlignmentContainer: {
        alignItems: 'center',
        marginTop: -65,
    },
    profileImage: {
        width: Responsive.width(88),
        height: Responsive.height(88),
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 1,
    },
    submitButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4d2d8f',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
    },
    notNowButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height: 48,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: '#4d2d8f',
    },
    submitButtonText: {
        fontSize: SIZES.h3,
        color: '#FFFFFF',
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    notNowButtonText: {
        fontSize: SIZES.h3,
        color: '#4d2d8f',
        fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
    pickerContainer: {
        backgroundColor: '#f4f5f7',
        borderWidth: 0,
        marginTop: 10,
    },
    genderPickerContainer: {
        backgroundColor: '#f4f5f7',
        borderWidth: 0,
        marginTop: 10,
        marginBottom: 60,
    },
    placeholderText: {
        fontSize: SIZES.h3,
        color: '#B4B4B4',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    dropDownContainerStyle: {
        backgroundColor: '#f4f5f7',
        borderWidth: 0,
    },
    datePicker: {
        backgroundColor: '#ffffff',
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 0,
        width: 360,
        height: 500,
    },
    dobContainer: {
        backgroundColor: '#f4f5f7',
        height: 50,
        borderRadius: 8,
        marginTop: 10,
        justifyContent: 'center',
    },
    dateSubmitContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    dobText: {
        marginLeft: 10,
        color: '#B4B4B4',
        fontSize: SIZES.h3,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    pincodeInput: {
        backgroundColor: '#f4f5f7',
        borderRadius: 8,
        marginTop: 10,
        paddingHorizontal: 12,
        fontSize: SIZES.h3,
        color: '#2A2525',
        height: 50,
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    annualSalaryContainer: {
        backgroundColor: '#f4f5f7',
        height: 50,
        marginTop: 10,
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    annualSalaryText: {
        fontSize: SIZES.h3,
        color: '#b4b4b4',
        fontFamily: Platform.select({
            ios: 'Exo2-Medium',
            android: 'Exo2Medium',
        }),
    },
    submitDateButtonText: {
        fontSize: 16, color: '#4D2D8F', fontFamily: Platform.select({
            ios: 'Exo2-Bold',
            android: 'Exo2Bold',
        }),
    },
});



























// /* eslint-disable prettier/prettier */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import {
//     View,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Modal,
//     TextInput,
//     Platform,
// } from 'react-native';
// import { SIZES } from '../../constants/theme';
// import DropDownPicker from 'react-native-dropdown-picker';
// import DatePicker from 'react-native-date-picker';
// import { Controller, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import BackButtonBlack from '../../assets/svgs/backButtonBlack.svg';
// import { format } from 'date-fns';
// import { useMutation } from '@apollo/client';
// import { GQLMutation } from '../../persistence/mutation/Mutation';
// import CommonLoading from '../../components/CommonLoading';
// import { useNavigation } from '@react-navigation/core';



// export default function EditProfile(props) {

//     const { firstName } = 'Shanu'

//     const [open, setOpen] = useState(false);
//     const [openEmploymentType, setOpenEmploymentType] = useState(false);
//     const [openSalaryRange, setOpenSalaryRange] = useState(false);
//     const [salaryValue, setSalaryValue] = useState(null);
//     const [employmentValue, setEmploymentValue] = useState(null);
//     const [genderValue, setGenderValue] = useState(null);

//     const [employmentType, setEmploymentType] = useState([
//         { label: 'Employed', value: 'employed' },
//         { label: 'Unemployed', value: 'unemployed' },
//     ]);
//     const [salaryType, setSalaryType] = useState([
//         { label: 'Less than 2.5 Lacs', value: '250000' },
//         { label: 'Between 2.5 Lacs to 5 Lacs', value: '500000' },
//         { label: 'More than 5 Lacs', value: '1000000' },
//     ]);
//     const [gender, setGender] = useState([
//         { label: 'Male', value: 'male' },
//         { label: 'Female', value: 'female' },
//     ]);

//     const [pin, setPin] = useState(0);


//     // const [date, setDate] = useState(new Date());
//     const [date, setDate] = useState(new Date());
//     const [showModal, setShowModal] = useState(false);

//     const schema = yup.object().shape({
//         pincode: yup.number().required('Pincode' + ' ' + 'is required'),
//     });


//     const {
//         control,
//         formState: { errors },
//     } = useForm({
//         resolver: yupResolver(schema),
//     });


//     const onDataSubmit = () => {
//         CommonLoading.show();

//         submitBasicDetails({
//             variables: {
//                 AnnualSalary: salaryValue,
//                 EmploymentType: employmentValue,
//                 Gender: genderValue,
//                 PinCode: pin,
//             },
//         });
//         if (data && data.UserBasicDetailsMutation && data.UserBasicDetailsMutation.UserBasicDetailsMutation == 'Updated') {
//             CommonLoading.hide();
//         }
//         if (error) {
//             CommonLoading.hide();
//         }
//         console.log(data);
//         console.log(error);
//     };

//     const [submitBasicDetails, { data, error }] = useMutation(GQLMutation.SAVE_USER_BASIC_DETAILS);


//     const formatedDate = (date) => {
//         var formattedDate = format(date, 'MMMM do, yyyy');
//         // DATE
//         // console.log(formattedDate);
//         return formattedDate;
//     };

//     const [pinCode, setPinCode] = useState('Pin Code');

//     console.log(pinCode);

//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>
//             <View style={styles.body}>
//                 <TouchableOpacity>
//                     <View style={styles.header}>
//                         <BackButtonBlack />
//                     </View>
//                 </TouchableOpacity>
//                 <View style={styles.headerTextContainer}>
//                     <Text style={styles.headerText}>Hello, {firstName}</Text>
//                     <Text style={styles.subTitleText}>
//                         To provide you the best experience,{'\n'}we need to know a few
//                         details about you.{'\n'}It would help us serve you better.
//                     </Text>
//                 </View>
//                 <View>
//                     <TouchableOpacity onPress={() => setShowModal(true)}>
//                         <View style={styles.dobContainer}>
//                             <Text style={styles.dobText}>{formatedDate(date)}</Text>
//                         </View>
//                     </TouchableOpacity>

//                     {showModal && (
//                         <Modal
//                             animationType="fade"
//                             transparent={true}
//                             showModal={showModal}
//                             backgroundColor="black"
//                             onRequestClose={() => setShowModal(false)}>
//                             <DatePicker
//                                 date={date}
//                                 onDateChange={setDate}
//                                 mode="date"
//                                 style={styles.datePicker}
//                             />
//                             <View style={styles.dateSubmitContainer}>
//                                 <TouchableOpacity
//                                     // onPress={() => setDate(new Date())}
//                                     onPress={() => setShowModal(false)}>
//                                     <Text style={styles.submitDateButtonText}>Submit</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </Modal>
//                     )}
//                     <DropDownPicker
//                         open={openEmploymentType}
//                         value={employmentValue}
//                         items={employmentType}
//                         setOpen={setOpenEmploymentType}
//                         setValue={setEmploymentValue}
//                         setItems={setEmploymentType}
//                         zIndex={10000}
//                         zIndexInverse={1000}
//                         placeholder="Employment Type"
//                         style={styles.pickerContainer}
//                         placeholderStyle={styles.placeholderText}
//                         listMode="FLATLIST"
//                         dropDownContainerStyle={styles.dropDownContainerStyle}
//                         closeAfterSelecting={true}
//                         textStyle={{
//                             fontFamily: Platform.select({
//                                 ios: 'Exo2-Medium',
//                                 android: 'Exo2Medium',
//                             }),
//                         }}
//                     />
//                     <DropDownPicker
//                         open={openSalaryRange}
//                         value={salaryValue}
//                         items={salaryType}
//                         setOpen={setOpenSalaryRange}
//                         setValue={setSalaryValue}
//                         setItems={setSalaryType}
//                         zIndex={6000}
//                         zIndexInverse={1000}
//                         placeholder="Annual Salary Range (???)"
//                         style={styles.pickerContainer}
//                         placeholderStyle={styles.placeholderText}
//                         listMode="FLATLIST"
//                         dropDownContainerStyle={styles.dropDownContainerStyle}
//                         closeAfterSelecting={true}
//                         textStyle={{
//                             fontFamily: Platform.select({
//                                 ios: 'Exo2-Medium',
//                                 android: 'Exo2Medium',
//                             }),
//                         }}
//                     />
//                     <View>
//                         <Controller
//                             control={control}
//                             render={({ field: { onBlur } }) => (
//                                 <TextInput
//                                     label={'Pincode'}
//                                     onBlur={onBlur}
//                                     // onChangeText={(value) => setPin(value)}
//                                     error={errors.pincode}
//                                     style={styles.pincodeInput}
//                                     placeholderTextColor={'#B4B4B4'}
//                                     placeholder={pinCode}
//                                     keyboardType={'number-pad'}
//                                     maxLength={6}
//                                 // onSubmitEditing={value => setPin(value)}
//                                 // onSubmitEditing={(text) => setPinCode(text)}

//                                 />
//                             )}
//                             name="pincode"
//                             defaultValue={''}
//                         />
//                     </View>
//                     <DropDownPicker
//                         open={open}
//                         value={genderValue}
//                         items={gender}
//                         setOpen={setOpen}
//                         setValue={setGenderValue}
//                         setItems={setGender}
//                         zIndex={3000}
//                         zIndexInverse={1000}
//                         placeholder="Gender"
//                         style={styles.genderPickerContainer}
//                         placeholderStyle={styles.placeholderText}
//                         dropDownContainerStyle={styles.dropDownContainerStyle}
//                         closeAfterSelecting={true}
//                         textStyle={{
//                             fontFamily: Platform.select({
//                                 ios: 'Exo2-Medium',
//                                 android: 'Exo2Medium',
//                             }),
//                         }}
//                     />
//                 </View>
//                 <View>
//                     <TouchableOpacity
//                         // onPress={handleSubmit(onSubmit)}
//                         onPress={() => {
//                             onDataSubmit();
//                         }}
//                     >
//                         <View style={styles.submitButtonContainer}>
//                             <Text style={styles.submitButtonText}>Update</Text>
//                         </View>
//                     </TouchableOpacity>

//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//     },
//     body: {
//         padding: SIZES.padding,
//         marginTop: Platform.select({
//             ios: 30,
//             android: 0,
//         }),
//     },
//     backButtonSize: { width: 24, height: 24 },
//     headerTextContainer: {
//         paddingVertical: 20,
//     },
//     headerText: {
//         fontSize: SIZES.h1,
//         fontFamily: Platform.select({
//             ios: 'Exo2-Bold',
//             android: 'Exo2Bold',
//         }),
//     },
//     subTitleText: {
//         fontSize: SIZES.h3,
//         marginTop: 12,
//         color: '#797E96',
//         fontFamily: Platform.select({
//             ios: 'Exo2-SemiBold',
//             android: 'Exo2SemiBold',
//         }),
//     },
//     submitButtonContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#4d2d8f',
//         borderRadius: 10,
//         height: 48,
//         marginVertical: 15,
//     },
//     notNowButtonContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 10,
//         height: 48,
//         marginVertical: 15,
//         borderWidth: 1,
//         borderColor: '#4d2d8f',
//     },
//     submitButtonText: {
//         fontSize: SIZES.h3,
//         color: '#FFFFFF',
//         fontFamily: Platform.select({
//             ios: 'Exo2-Bold',
//             android: 'Exo2Bold',
//         }),
//     },
//     notNowButtonText: {
//         fontSize: SIZES.h3,
//         color: '#4d2d8f',
//         fontFamily: Platform.select({
//             ios: 'Exo2-Bold',
//             android: 'Exo2Bold',
//         }),
//     },
//     pickerContainer: {
//         backgroundColor: '#f4f5f7',
//         borderWidth: 0,
//         marginTop: 10,
//     },
//     genderPickerContainer: {
//         backgroundColor: '#f4f5f7',
//         borderWidth: 0,
//         marginTop: 10,
//         marginBottom: 60,
//     },
//     placeholderText: {
//         fontSize: SIZES.h3,
//         color: '#B4B4B4',
//         fontFamily: Platform.select({
//             ios: 'Exo2-Medium',
//             android: 'Exo2Medium',
//         }),
//     },
//     dropDownContainerStyle: {
//         backgroundColor: '#f4f5f7',
//         borderWidth: 0,
//     },
//     datePicker: {
//         backgroundColor: '#ffffff',
//         marginTop: 200,
//         alignItems: 'center',
//         justifyContent: 'center',
//         alignContent: 'center',
//         marginLeft: 0,
//         width: 360,
//         height: 500,
//         fontFamily: Platform.select({
//             ios: 'Exo2-Medium',
//             android: 'Exo2Medium',
//         }),
//     },
//     dobContainer: {
//         backgroundColor: '#f4f5f7',
//         height: 50,
//         borderRadius: 8,
//         marginTop: 10,
//         justifyContent: 'center',
//     },
//     dateSubmitContainer: {
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     dobText: {
//         marginLeft: 10,
//         color: '#B4B4B4',
//         fontSize: SIZES.h3,
//         fontFamily: Platform.select({
//             ios: 'Exo2-Medium',
//             android: 'Exo2Medium',
//         }),
//     },
//     pincodeInput: {
//         backgroundColor: '#f4f5f7',
//         borderRadius: 8,
//         marginTop: 10,
//         paddingHorizontal: 12,
//         fontSize: SIZES.h3,
//         color: '#2A2525',
//         height: 50,
//         fontFamily: Platform.select({
//             ios: 'Exo2-Medium',
//             android: 'Exo2Medium',
//         }),
//     },
//     annualSalaryContainer: {
//         backgroundColor: '#f4f5f7',
//         height: 50,
//         marginTop: 10,
//         borderRadius: 8,
//         justifyContent: 'center',
//         paddingHorizontal: 12,
//     },
//     annualSalaryText: {
//         fontSize: SIZES.h3,
//         color: '#b4b4b4',
//         fontFamily: Platform.select({
//             ios: 'Exo2-Medium',
//             android: 'Exo2Medium',
//         }),
//     },
//     submitDateButtonText: {
//         fontSize: 16, color: '#4D2D8F', fontFamily: Platform.select({
//             ios: 'Exo2-Bold',
//             android: 'Exo2Bold',
//         }),
//     },
// });
