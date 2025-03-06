import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView } from "react-native";
import { Icon } from 'react-native-elements';
import EventCard from "../components/EventCard";
import { eventsData } from "../db/data";

const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState("Ongoing");
    return (
        <SafeAreaView style={styles.container}>
            <View>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Icon name="arrow-back" size={24} color="white" type="material" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Events</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity>
                            <Icon name="search" type="material" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="more-vert" type="material" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
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
                <EventCard item={item}></EventCard>
            )}
            contentContainerStyle={{ paddingBottom: 180 }}
            keyboardShouldPersistTaps="handled"
        />
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    iconContainer: {
        flexDirection: "row",
        gap: 15,
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
        paddingLeft: 40,
        paddingRight: 10,
        height: 40,
        position: "relative",
    },
    searchIcon: {
        position: "absolute",
        left: 10,
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
        borderWidth: 1,
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        borderColor: "#ffbe00",
        backgroundColor: "#2A2A2A",
        margin: 10,
        borderRadius: 10
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
});
