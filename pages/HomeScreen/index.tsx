import React from 'react';

import { StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';

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
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                numColumns={3}
                style={styles.listImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    header: {
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
        borderRadius: 8
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
    },
});
