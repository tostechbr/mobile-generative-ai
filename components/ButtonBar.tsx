import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation


interface ButtonBarProps {
    activeScreen: string;
}

const ButtonBar: React.FC<ButtonBarProps> = ({ activeScreen }) => {
    const navigation = useNavigation();


    const getIconColor = (screenName: string) => {
        return activeScreen === screenName ? '#E55733' : 'white';
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => (navigation as any).navigate('Home')}>
                <AntDesign name="home" size={24} color={getIconColor('Home')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <FontAwesome5 name="plus-circle" size={24} color={getIconColor('Chat')} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <MaterialCommunityIcons name="account" size={24} color={getIconColor('Profile')} />
            </TouchableOpacity> */}
            {/* <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="home" size={24} color="white" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="create" size={24} color="white" />
          <Text style={styles.navText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="account-circle" size={24} color="white" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 24,
        borderWidth: 1,
        height: 74, 
    },
});

export default ButtonBar;
