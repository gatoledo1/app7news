import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import iconNews from '../../assets/images/icons/newspaper.png';

interface NewsProps {
    id: number;
    titulo: string;
    autor: string;
    texto: string;
    excluiNoticia: (id: number) => void;
    editaNoticia: (id: number, titulo: string, autor: string, texto: string) => void;
}

const NewsItem: React.FC<NewsProps> = ({ id, titulo, autor, texto, excluiNoticia, editaNoticia }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.titulo}>
                        {titulo}
                    </Text>
                    <Text style={styles.subject}>
                        Por: {autor}
                    </Text>
                </View>
            </View>

            <Text style={styles.NewsText}>
                {texto}
            </Text>

            <View style={styles.footer}>

                <View style={styles.buttonsContainer}>
                    <RectButton onPress={() => editaNoticia(id, titulo, autor, texto)} style={[styles.button, styles.buttonEdit]}>
                        <Text style={[styles.buttonText, styles.buttonGrey]}> Editar notícia</Text>
                    </RectButton>

                    <RectButton onPress={() => excluiNoticia(id)} style={[styles.button, styles.buttonDelete]}>
                        <Text style={[styles.buttonText, styles.buttonRed]}> Excluir notícia</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default NewsItem;