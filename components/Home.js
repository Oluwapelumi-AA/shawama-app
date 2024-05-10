import * as React from 'react';
import { Image, View, Text, TextInput, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoriesData from '../assets/data/CategoriesData'; 
import PopularData from '../assets/data/PopularData';
import colors from '../assets/colors/colors';



const Home = () => {
    const renderCategoryItem = ({ item }) => {
        return ( 
            <View style={[styles.categoryItemWrapper, 
                {backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0, 
                }, 
                ]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}>{item.title}</Text>
                <View style={[styles.categorySelectWrapper,
                {backgroundColor: item.selected ? colors.white : colors.secondary,},
                ]}>
                    <Feather name="chevron-right" size={8} style={styles.categorySelectIcon} 
                    colors={item.selected ? colors.black : colors.white}/>
                </View>
            </View>
        );
    };
    
    return (
        <ScrollView contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
                    {/* Icon */}
                    <Feather name='menu' size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>

            {/*Tiles*/}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titlesSubtitle}>Food </Text>
                <Text style={styles.titlesTitle}>Delivery </Text> 
            </View>

            {/*search*/}
            <View style={styles.searchWrapper}>
                 <Feather name='search' size={19} color={colors.textDark} />
            <View style={styles.search}>
            <TextInput
                    style={styles.search}
                    placeholder="Search"
                    placeholderTextColor={colors.textLight}/>
            </View>
            </View>

            {/*Categories section */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList  data={CategoriesData}
                                renderItem={renderCategoryItem}
                                keyExtractor={item => item.id}
                                horizontal={true} 
                                showsHorizontalScrollIndicator={false}/>
                </View>
            </View>

            {/* popular*/}
            <View style={ styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {PopularData.map((item) => (
                    <View style={[styles.popularCardWrapper,
                        {marginTop: item.id == 1 ? 10 : 20,},
                    ]}>
                        <View>
                            <View>
                                <View style={styles.popularTopWrapper}>
                                    <MaterialCommunityIcons name='crown' 
                                    size={12} color={colors.primary}/>
                                    <Text style={styles.popularTopText}>top of the week</Text>
                                </View>
                                <View style={styles.popularTitlesWrapper}>
                                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                                    <Text style={styles.popularTitlesWeight}>Weight{item.weight}</Text>
                                </View>
                            </View>
                                <View style={styles.popularCardBottom}>
                                    <View style={styles.addPizzaButton}>
                                        <Feather name='plus' size={10} color={colors.textDark}/>
                                    </View>
                                    <View style={styles.ratingWrapper}>
                                        <MaterialCommunityIcons name='star' size={10} color={colors.textDark}/>
                                        <Text style={styles.rating}>{item.rating}</Text>
                                    </View>
                                </View>
                        </View>
                            <View style={styles.popularCardRight}>
                                <Image source={item.image} style={styles.popularImage} />
                            </View>
                    </View>              
                ))}
            </View>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    profileImage:{
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: colors.textDark,
      },
 
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 40,
        color: colors.textDark,
        marginTop: 5,
},
    searchWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontFamily: 'Montserrat-Semibold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight,

    },
    categoriesWrapper: {
        marginTop: 30,
        

    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,

    },
    categoryListWrapper: {
        paddingTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: '#F5CA48',
        marginRight: 20,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 30,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 25,
        alignSelf: 'center',
        marginHorizontal: 20,
        },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20
    },
    categorySelectIcon:{
        alignSelf: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginBottom: 10,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper : {
        marginTop: 20,
    },
    popularTitlesTitle : {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
        color: colors.textDark,
    },
    popularTitlesWeight : {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom : {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton : {
        backgroundColor: colors.primary,
        padding: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating : {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCardRight :{
        marginLeft: 40,
    },
    popularImage :{
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
});

export default Home;
