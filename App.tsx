import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font';
import AppStack from './src/routes/AppStack';
import AppLoading from 'expo-app-loading';
import dados from "./src/API_teste/dados"
import { Server, createServer, Model } from 'miragejs'


createServer({

  models: {
    noticias: Model,
  },

  seeds(server) {
    server.db.loadData({
      noticias: dados,
    })
  },

  routes() {
    this.namespace = 'api'

    //Listagem de noticia - Da mais recente para mais antiga
    this.get('/noticias', (schema) => {
      return schema.noticias.all().sort((a, b) => {
        return a.id < b.id;
      });
    })

    //Insersão de noticias
    this.post('/noticias', (schema, request) => {
      const attrs = JSON.parse(request.requestBody)

      return schema.noticias.create(attrs)
    })

    //Remoção de noticias
    this.del('/noticias/:id', (schema, request) => {
      const id = request.params.id

      return schema.noticias.find(id).destroy();
    })

    //Alteração de noticias - update
    this.patch('/noticias/:id', (schema, request) => {
      const id = request.params.id
      const attrs = JSON.parse(request.requestBody)

      /*Alert.alert(
        "Update API",
        attrs,
      )*/

      return schema.noticias.find(id).update('titulo', attrs.titulo).update('autor', attrs.autor).update('texto', attrs.texto);
    })

    //Retorno da pesquisa - retorna a chave com o titulo pesquisado - Where retorna os que contem - Não esta Keysensitive
    this.get("/noticias_query", (schema, request) => {
      let titulo = request.queryParams.titulo;

      return schema.noticias.where((noticia) => noticia.titulo.toLowerCase().search(titulo.toLowerCase()) !== -1);
    })
  },
});

const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins_400Regular': require('./fonts/Poppins-Regular.ttf'),
    'Poppins_400Regular_Italic': require('./fonts/Poppins-Italic.ttf'),
    'Poppins_600SemiBold': require('./fonts/Poppins-SemiBold.ttf')
  });
};

export default function App() {
  const [isReady, setIsReady] = useState(false);


  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  } else {

    return (
      <>
        <AppStack />
        <StatusBar style="dark" />
      </>
    );
  }
}
