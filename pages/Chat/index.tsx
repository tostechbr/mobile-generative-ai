import { StyleSheet, View } from "react-native";

export default function Chat() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <h1>Chat</h1>
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