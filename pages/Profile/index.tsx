import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Modal,
    Button,
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

interface CardComponentProps {
    card: Card;
    onPress: () => void;
}

function truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
}

const ProfileHeader: React.FC<{ name: string; imageUrl: string }> = ({ name, imageUrl }) => {
    return (
        <View style={styles.profileHeader}>
            <Image source={{ uri: imageUrl }} style={styles.profileImage} />
            <Text style={styles.profileName}>{name}</Text>
        </View>
    );
};

const CardComponent: React.FC<CardComponentProps> = ({ card, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.cardContainer}>
                <Image source={{ uri: card.imageUrl }} style={styles.cardImage} resizeMode="cover" />
                <View style={styles.textContainer}>
                    <Text>{truncateText(card.text, 100)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function ProfileScreen() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const handleCardPress = (card: Card) => {
        setSelectedCard(card);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCard(null);
    };

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
                text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry '
            },
            {
                id: 3,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum'
            },
            {
                id: 4,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum'
            },
            {
                id: 5,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum'
            },
            {
                id: 6,
                imageUrl: 'https://via.placeholder.com/100',
                text: 'Lorem Ipsum'
            },
        ]
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <ProfileHeader name={profileData.name} imageUrl={profileData.imageUrl} />
            <View style={styles.containerDaddy}>
                <FlatList
                    data={profileData.cards}
                    style={styles.containerChildren}
                    renderItem={({ item }) => (
                        <CardComponent card={item} onPress={() => handleCardPress(item)} />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        <Image source={{ uri: selectedCard?.imageUrl }} style={styles.modalImage} />
                        <Text style={styles.modalText}>{selectedCard?.text}</Text>
                        <Button title="Close" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E55733',
    },
    containerDaddy: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    containerChildren: {
        padding: 20,
        marginBottom: 90,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escurecido com opacidade
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        position: 'absolute',
        width: '80%',
    },
    modalImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
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

