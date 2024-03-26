import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');

    const sendMessage = () => {
        if (inputMessage.trim()) {
            const newMessage: Message = {
                id: Date.now(), 
                text: inputMessage, 
                sender: 'user' 
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');

            setTimeout(() => {
                const fakeReply: Message = {
                    id: Date.now(), 
                    text: 'This is a fake reply.', 
                    sender: 'bot' 
                };
                setMessages(prevMessages => [...prevMessages, fakeReply]);
            }, 1000);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
            <ScrollView style={styles.messagesContainer}>
                {messages.map((message: Message) => (
                    <View key={message.id} style={[
                        styles.messageBubble,
                        message.sender === 'user' ? styles.userMessage : styles.botMessage
                    ]}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type your message here..."
                    placeholderTextColor="#999"
                    value={inputMessage}
                    onChangeText={(text: string) => setInputMessage(text)}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 90
    },
    messagesContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFDDDD',
        borderRadius: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
        fontSize: 16,
    },
    sendButton: {
        backgroundColor: 'tomato',
        borderRadius: 20,
        padding: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
        maxWidth: '80%',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#fff',
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E55733',
        
    },
    messageText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
});
