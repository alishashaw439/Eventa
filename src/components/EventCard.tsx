
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';

const EventCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image source={item.image} style={styles.eventImage} />
            <LinearGradient 
                        colors={["#00000000","#9f884c"]}
                        start={{ x: 0, y: 0 }} 
                        end={{ x: 0, y: 1 }}
                        style={styles.gradientOverlay}
                    />
            <View style={styles.cardContent}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDetails}>
                    <Icon name="calendar-today" type="material" size={14} color="#ffbe00" /> {item.date} |{" "}
                    <Icon name="location-on" type="material" size={14} color="#ffbe00" /> {item.location}
                </Text>
                <View style={styles.joinSection}>
                    <View style={styles.joinedPeople}>
                        <Image source={require("../../assets/avatarone.jpg")} style={styles.avatar} />
                        <Image source={require("../../assets/avatartwo.jpg")} style={[styles.avatar, { marginLeft: -13 }]} />
                        <View style={styles.joinCount}>
                            <Text style={styles.joinText}>+{item.joined}</Text>
                        </View>
                        <Text style={styles.peopleJoinedText}>People Joined</Text>
                    </View>
                    <TouchableOpacity style={styles.joinButton}>
                        <Text style={styles.joinButtonText}>Join Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EventCard
const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    gradientOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
    },
    eventImage: {
        width: "100%",
        height: 300,
        padding: 15
    },
    cardContent: {
        padding: 10,
    },
    eventTitle: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    },
    eventDetails: {
        fontSize: 12,
        color: "gray",
        marginVertical: 5,
    },
    joinSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    joinedPeople: {
        flexDirection: "row",
        alignItems: "center",
        color:"gray"
    },
    avatar: {
        width: 25,
        height: 25,
        borderRadius: 15,
    },
    joinCount: {
        backgroundColor: "#ffbe00",
        width: 25,
        height: 25,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -15,
    },
    peopleJoinedText:{
        color:"white",
        marginLeft:12
    },
    joinText: {
        fontWeight: "bold",
        color: "black",
        fontSize:12
    },
    joinButton: {
        backgroundColor: "#ffbe00",
        padding: 10,
        borderRadius: 5,
    },
    joinButtonText: {
        fontWeight: "bold",
        color: "black",
    },
})