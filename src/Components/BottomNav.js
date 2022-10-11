import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BottomNav = () => {
    return (
        <View style={styles.navContainer}>
            <TouchableOpacity>
                <Icon name="help" size={50} style={styles.nav}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="home" size={40} style={styles.homeNav}></Icon>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="person" size={50} style={styles.nav}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    },
    nav: {
        color: '#DD3342'
    },
    homeNav: {
        color: '#FFFFFF',
        backgroundColor: '#DD3342',
        padding: 5,
        borderRadius: 80,
        borderbottomRightRadius: 40,
        borderBottomLeftRadius: 40
    }
})

export default BottomNav;