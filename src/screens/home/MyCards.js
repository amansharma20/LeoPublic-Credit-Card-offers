import React from 'react';
import {
    View,
    StyleSheet,
    Button
} from 'react-native';
import { gql, useQuery } from '@apollo/client'

export default function MyCards(props) {
    //const { token } = props.route.params

    const GET_BANKS = gql`
    query{
        BankQuery{
            GetBanks{
                Name
            }
        }
    }
`
    const { data } = useQuery(GET_BANKS)

    const fetchQuery = () => {
        console.log(data.BankQuery.GetBanks.map(bank=>{
            console.log(bank.Name)
        }))
        
    }

    return (
        <View style={styles.container}>
            <View style={{marginTop:100}}>
            <Button onPress={fetchQuery} title='Submit'  />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    phoneInput: {
        marginTop: 100,
        borderColor: 'red',
        borderRadius: 10
    }
});
