import React, { useState, useEffect } from "react"
import { Text, View, ActivityIndicator, Alert } from "react-native"
import { Server, createServer, Model } from 'miragejs'
import dados from "./dados"
import NewsItem from "../components/NewsItem"


/*let server = createServer({
  
  seeds(server) {
    server.db.loadData({
      noticias: dados,
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/noticias', () => {
      return {
        noticias: dados
      }
    });

    this.post("/noticias", (schema, request) => {
      let attrs = request.requestBody

      Alert.alert(
        "titulo2",
        JSON.stringify(attrs)
    );
    
      return schema.db.movies.insert(attrs)
    });
  },
})*/


interface noticiaItens {
    id: number;
    titulo: string;
    autor: string;
    texto: string;
}

export function AppNoticia() {


  createServer({

    models: {
      noticias: Model
    },
  
    seeds(server) {
      server.db.loadData({
        noticias: dados,
      })
    },
  
    routes() {
      this.namespace = 'api'
  
      this.get('/noticias', (schema) => {
        return schema.noticias.all();
      })
  
      this.post('/noticias', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
  
        //schema.create('noticias', attrs);
        return schema.db.noticias.insert(attrs)
      })
    },
  });

  const [noticias, setNoticias] = useState(new Array<noticiaItens>());
  const [load, setLoad] = useState(true);

  useEffect(() => {

    loadNoticias()
    
  }, [])

  useEffect(() => {
    if(!noticias.length) return;
    setLoad(false)
      
  }, [noticias])

  async function loadNoticias(){
    setLoad(true)

    fetch("/api/noticias")
      .then((res) => res.json())
      .then((json) => {
        setNoticias(json.noticias) 
      
      })
  }

  return (
    <View>
 
      {noticias.map((Item, index) => (
         <NewsItem key={index} titulo={Item.titulo} autor={Item.autor} texto={Item.texto}/>
      ))}

    </View>
  )
}