import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

interface ProfileData {
    name: string;
    imageUrl: string;
    cards: Card[];
}

interface Card {
    id: number;
    imageUrl: string;
    text: string;
}

interface CardProps {
    card: Card;
}

const ProfileHeader: React.FC<{ name: string; imageUrl: string }> = ({ name, imageUrl }) => {
    return (
        <View style={styles.profileHeader}>
            <Image source={{ uri: imageUrl }} style={styles.profileImage} />
            <Text style={styles.profileName}>{name}</Text>
        </View>
    );
};




const ProfileScreen: React.FC = () => {
    const navigation = useNavigation();
    const profileData: ProfileData = {
        name: 'Nome do usuario',
        imageUrl: 'https://via.placeholder.com/100',
        cards: [
            {
                id: 1,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
            },
            {
                id: 2,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum'
            },
        ]
    };

    const CardComponent = (card: Card) => {
        return (
            <View style={styles.cardContainer}>
                <Image source={{ uri: card.imageUrl }} style={[styles.cardImage]} resizeMode="cover" />
                <View style={styles.textContainer}>
                    <Text>{card.text}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <ProfileHeader name={profileData.name} imageUrl={profileData.imageUrl} />
            <FlatList
                data={profileData.cards}
                style={styles.containerChildren}
                renderItem={CardComponent}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E55733',
    },
    containerChildren: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    backButton: {
        margin: 10,
        alignSelf: 'flex-start',
    },
    profileHeader: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E55733'
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileName: {
        fontSize: 24,
        marginVertical: 10
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        margin: 10,
        backgroundColor: '#E5573339',
        opacity: 27,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    cardImage: {
        borderRadius: 10,
        width: 100,
        height: 100
    },
    textContainer: {
        flex: 1,
    },
});

export default ProfileScreen;
