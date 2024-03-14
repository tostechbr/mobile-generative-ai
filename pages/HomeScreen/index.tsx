import React from 'react';

import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const generateRandomImages = (count: number) => {
    return Array.from({ length: count }, (_, index) => ({
        key: String(index),
        uri: `https://via.placeholder.com/100`,
    }));
};

const DATA = generateRandomImages(20);

export default function HomeScreen() {
    const renderItem = ({ item }: any) => {
        return (
            <TouchableOpacity style={styles.item}>
                <Image
                    source={{ uri: item.uri }}
                    style={styles.thumbnail}
                    onError={(e) => console.log('Image loading error:', e.nativeEvent.error)}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={3}
                style={styles.listImage}
            />
            <View style={styles.navBar}>
                <AntDesign name="home" size={24} color="white" />
                <FontAwesome5 name="plus-circle" size={24} color="white" />
                <MaterialCommunityIcons name="account" size={24} color="white" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    header: {
        backgroundColor: 'tomato',
        padding: 10,
        flex: .2,
    },
    headerText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '300',
        textAlign: 'center'
    },
    listImage: {
        flex: 1,
        padding: 20,
        backgroundColor: 'red',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    thumbnail: {
        width: 100,
        height: 100,
        margin: 5,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    },
    navBar: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
    },
});
