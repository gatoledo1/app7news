import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text, TextInput, Alert } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize';
import NewsItem from "../../components/NewsItem";

interface noticiaItens {
    id: number;
    titulo: string;
    autor: string;
    texto: string;
}

function NewsList() {

    const [noticias, setNoticias] = useState(new Array<noticiaItens>());
    const [load, setLoad] = useState(true);
    const [search, setSearch] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [texto, setTexto] = useState('');
    const [idEditar, setIdEditar] = useState<number | null>(null);
    const [searchItem, setSearchItem] = useState(new Array<noticiaItens>());
    const modalizeRef = useRef<Modalize>(null);
    const modalizeSearch = useRef<Modalize>(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    //Função para expandir/abrir a pesquisa
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    //função disparada ao clicar no botão Pesquisar
    //Captura o titulo do input, envia para a API MirageJS e retorna dados no modal
    async function handleFiltersSubmit() {
        await fetch(`api/noticias_query?titulo=${search}`)
            .then((res) => res.json())
            .then((json) => {

                setSearchItem(json.noticias);

                modalizeSearch.current?.open();

            });
    }

    //Construtor do componete dos itens da pesquisa no modal
    function CreateSearch() {

        if (searchItem.length > 0) {

            return (
                <View>
                    {
                        searchItem.map((item) =>
                            <NewsItem key={item.id} excluiNoticia={excluiNoticia} id={item.id} editaNoticia={editaNoticia} titulo={item.titulo} autor={item.autor} texto={item.texto} />
                        )
                    }

                </View>
            )

        } else {
            return (
                <View>
                    <Text>Nada encontrado</Text>
                </View>
            )
        }
    }

    //Ao acessar o botão Editar noticia, essa função capta as props do componete de noticia e repassa para os states
    //Os states serão responsaveis por listar o conteudo do componente, dentro dos inputs, prontos para serem editados
    function editaNoticia(id: number, titulo: string, autor: string, texto: string) {

        modalizeSearch.current?.close();

        setIdEditar(id)
        setTitulo(titulo);
        setAutor(autor);
        setTexto(texto);

        modalizeRef.current?.open();

    }

    //Ao disparar o botão Atualizar no modal de cadastro de noticia, essa função pega os states e repassa para a variavel BODY
    //O state idEditar, será usado na API para encontrar a chave do dado no servidor MirageJS e realizar o update
    async function modalEditaNoticia() {

        let body = { titulo, autor, texto }

        /*Alert.alert(
            "Update",
            JSON.stringify(body),
        )*/

        await fetch(`api/noticias/${idEditar}`, {
            method: 'PATCH',
            body: JSON.stringify(body)
        });

        loadNoticias() //Reload nas noticias

        modalizeRef.current?.close();

    }

    //Função que envia a inserção de noticia para a API do MirageJS
    async function handleModalSubmit() {

        let body = { titulo, autor, texto }

        await fetch(`api/noticias`, {
            method: 'POST',
            body: JSON.stringify(body)
        });

        loadNoticias() //Reload nas noticias

        modalizeRef.current?.close();

    }


    useEffect(() => {

        loadNoticias()

    }, [])

    //Envia o delete para a API
    //ID vem por prop no componente de noticias
    function excluiNoticia(id: number) {

        Alert.alert(
            "Confirmar ação",
            "tem certeza que deseja excluir o post?",
            [
                {
                    text: "Não"
                },
                {
                    text: "Sim", onPress: async () => {

                        await fetch(`/api/noticias/${id}`, {
                            method: 'DELETE',
                        })

                        loadNoticias() //reload noticias

                    }
                }
            ]
        );

    }

    //Primeira função executada a partir do useEffect
    //Executada tambem quando ocorrem novas renderizações, após inserção, delete e alteração de noticias
    async function loadNoticias() {
        setLoad(true)

        fetch("/api/noticias")
            .then((res) => res.json())
            .then((json) => {
                setNoticias(json.noticias)

            })
    }

    //"Icone botão" para abrir modal de inserção
    //Para evitar lixo nos states, aqui é feito um reset
    const onOpen = () => {
        setTitulo('');
        setAutor('');
        setTexto('');
        modalizeRef.current?.open();
    };

    return (
        <View style={styles.container}>
            <PageHeader title="Notícias recentes"
                headerRight={(
                    <View style={{ flexDirection: 'row' }}>
                        <BorderlessButton onPress={onOpen} style={{ marginRight: 8, padding: 6 }}>
                            <Ionicons name="add-circle" size={28} color="white" />
                        </BorderlessButton>

                        <BorderlessButton onPress={handleToggleFiltersVisible} style={{ marginRight: 8, padding: 6 }}>
                            <FontAwesome name="search" size={26} color="white" />
                        </BorderlessButton>
                    </View>
                )}
            >

                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Pesquise por titulos campletos</Text>
                        <TextInput style={styles.input}
                            value={search}
                            onChangeText={text => setSearch(text)}
                            placeholder="O que você quer encontrar?"
                            placeholderTextColor="#c1bccc"
                        />

                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                PESQUISAR
                            </Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >

                {noticias.map((Item) => (
                    <NewsItem key={Item.id} excluiNoticia={excluiNoticia} id={Item.id} editaNoticia={editaNoticia} titulo={Item.titulo} autor={Item.autor} texto={Item.texto} />
                ))}

            </ScrollView>

            <Modalize ref={modalizeRef} adjustToContentHeight={true}>

                <View style={{ paddingHorizontal: 40 }}>
                    <Text style={styles.title}>Inserir/Atualizar notícia</Text>
                    <TextInput style={styles.input}
                        value={titulo}
                        onChangeText={text => setTitulo(text)}
                        placeholder="Título"
                        placeholderTextColor="#c1bccc"
                    />
                    <TextInput style={styles.input}
                        value={autor}
                        onChangeText={text => setAutor(text)}
                        placeholder="Autor"
                        placeholderTextColor="#c1bccc"
                    />
                    <TextInput style={styles.input}
                        value={texto}
                        numberOfLines={7}
                        textAlignVertical="top"
                        multiline={true}
                        onChangeText={text => setTexto(text)}
                        placeholder="Texto da notícia"
                        placeholderTextColor="#c1bccc"
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 45, marginTop: 20 }}>
                        <RectButton onPress={modalEditaNoticia} style={[styles.modalButton, { backgroundColor: '#555' }]}>
                            <Text style={[styles.modalButtonText, { color: '#fff' }]}>
                                Atualizar
                                </Text>
                        </RectButton>
                        <RectButton onPress={handleModalSubmit} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>
                                Inserir
                                </Text>
                        </RectButton>
                    </View>

                </View>

            </Modalize>

            <Modalize ref={modalizeSearch}>

                <View style={{ padding: 20 }}>
                    <Text style={{ paddingBottom: 20 }}>Resultado de pesquisa</Text>

                    <CreateSearch />

                </View>

            </Modalize>

        </View>
    );
}

export default NewsList;


