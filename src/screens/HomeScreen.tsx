import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView } from "react-native";
import { Icon } from 'react-native-elements';// Importing from react-native-elements

const eventsData = [
    {
        id: "1",
        title: "Designers Meetup 2025",
        date: "10-12 April",
        location: "Dhanmondi, Dhaka",
        image: require('../../assets/CardImg.png'),
        joined: 8,
    },
    {
        id: "2",
        title: "Outdoor Activities",
        date: "15-17 May",
        location: "New York City",
        image: require('../../assets/CardImg.png'),
        joined: 12,
    },
];

const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState("Ongoing");
    console.log("hghxsavcs",eventsData[0].image)
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name="arrow-back" size={24} color="white" type="material" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Events</Text>
                    <TouchableOpacity>
                        <Icon name="search" type="material" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Icon
                        name="search"
                        type="material"
                        size={20}
                        color="#aaa"
                        containerStyle={styles.searchIcon}
                    />
                    <TextInput
                        placeholder="Find events"
                        style={styles.searchInput}
                        placeholderTextColor="#aaa"
                    />
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="location-on" type="material" size={20} color="#ffbe00" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Icon name="filter-list" type="material" size={20} color="#ffbe00" />
                    </TouchableOpacity>
                </View>



                {/* Tabs */}
                <View style={styles.tabs}>
                    {["Ongoing", "Upcoming", "Past Events"].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
                            onPress={() => setSelectedTab(tab)}
                        >
                            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Event List */}
                <EventList />

                {/* Bottom Navigation */}
                <View style={styles.bottomNav}>
                    {["home", "explore", "confirmation-number", "shopping-cart", "person"].map((icon, index) => (
                        <TouchableOpacity key={index} style={styles.navItem}>
                            <Icon name={icon} type="material" size={24} color="white" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

const EventList = () => {
    return (
        <FlatList
            data={eventsData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.card}>
                 
                    <Image source={item.image} style={styles.eventImage} />
               
                    <View style={styles.cardContent}>
                        <Text style={styles.eventTitle}>{item.title}</Text>
                        <Text style={styles.eventDetails}>
                            <Icon name="calendar-today" type="material" size={14} color="#ffbe00" /> {item.date} |{" "}
                            <Icon name="location-on" type="material" size={14} color="#ffbe00" /> {item.location}
                        </Text>
                        <View style={styles.joinSection}>
                            <View style={styles.joinedPeople}>
                                <Image source={{ uri: "https://via.placeholder.com/30" }} style={styles.avatar} />
                                <Image source={{ uri: "https://via.placeholder.com/30" }} style={[styles.avatar, { marginLeft: -10 }]} />
                                <View style={styles.joinCount}>
                                    <Text style={styles.joinText}>+{item.joined}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.joinButton}>
                                <Text style={styles.joinButtonText}>Join Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        />
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
    },
    headerTitle: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#2A2A2A",
        borderRadius: 10,
        margin: 10,
        paddingLeft: 40, // Space for the icon inside TextInput
        paddingRight: 10,
        height: 40,
        position: "relative",
      },
      searchIcon: {
        position: "absolute",
        left: 10, // Moves the search icon inside the input field
      },
      searchInput: {
        flex: 1,
        color: "white",
        fontSize: 16,
      },
      iconButton: {
        backgroundColor: "black",
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
      },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    activeTab: {
        backgroundColor: "#ffbe00",
    },
    tabText: {
        color: "white",
    },
    activeTabText: {
        color: "black",
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#1E1E1E",
        margin: 10,
        borderRadius: 10,
        overflow: "hidden",
    },
    eventImage: {
        width: "100%",
        height: 300,
        padding:15
    },
    cardContent: {
        padding: 10,
    },
    eventTitle: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    eventDetails: {
        fontSize: 16,
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
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    joinCount: {
        backgroundColor: "#ffbe00",
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -10,
    },
    joinText: {
        fontWeight: "bold",
        color: "black",
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
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#1E1E1E",
        padding: 10,
    },
    navItem: {
        padding: 10,
    },
});
