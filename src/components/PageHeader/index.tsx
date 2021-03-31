import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import backIcon from '../../assets/images/icons/arrow.png';
import LogoImg from '../../assets/images/logo7news-branco.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode; //não obrigatório
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
    const { navigate } = useNavigation();

    function hudleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={hudleGoBack}>
                    <Image source={backIcon} style={styles.imgHeader} resizeMode="contain" />
                </BorderlessButton>

                <Image source={LogoImg} style={{height: 30, width: 60}} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight }
            </View>

            { children }
        </View>
    );
}

export default PageHeader;