import { ScrollView, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Home = () => {
    return (
        <ScrollView>
            <ImageBackground source={require('../Images/bg.png')} resizeMode="cover" style={styles.backGround}>
                <Image
                    style={styles.headerImg}
                    source={require('../Images/headerImage.png')}
                />
                <View style={styles.contentBox}>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="description" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Make a Request</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="search" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Find Donor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentBox}>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="class" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Blood Banks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="accessibility" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Become a Donor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentBox}>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="commute" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Call Ambulance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="groups" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Organizations</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentBox}>
                    <TouchableOpacity style={styles.boxContainer}>
                        <Icon name="store" size={60} style={styles.menuIcon}></Icon>
                        <Text style={styles.menuText}>Buy Medicine</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
    },
    headerImg: {
        width: '100%',
        height: 310
    },
    contentBox: {
        paddingStart: 20,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    boxContainer: {
        width: '47%',
        padding: 17,
        marginEnd: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        borderBottomRightRadius: 70,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    menuIcon: {
        color: '#DD3342',
    },
    menuText: {
        marginTop: 10,
        color: '#DD3342',
        fontSize: 14,
        fontWeight: 'bold'
    },
})

export default Home;