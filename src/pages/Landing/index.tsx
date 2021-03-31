import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import landingImg from '../../assets/images/podcast.png';
import logoImg from '../../assets/images/logo7news.png';

function Landing() {

    const { navigate } = useNavigation();

    function hundleNavigationToNews() {
        navigate('NewsList');
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoBanner}>
                <Image source={logoImg} style={{ width: 200, resizeMode: 'contain' }} />
            </View>

            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Acompanhe as principais {'\n'}
                <Text style={styles.titleBold}>notícias de hoje</Text>
            </Text>

            <View style={styles.buttonContainer}>

                <RectButton onPress={hundleNavigationToNews} style={[styles.button, styles.buttonSecondary]}>
                    <FontAwesome name="newspaper-o" size={30} color="black" />
                    <Text style={styles.buttonText}>Ver notícias</Text>
                </RectButton>

            </View>
        </View>
    );
}

export default Landing;