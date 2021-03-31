declare module '*.png';
declare module 'miragejs' {
    export { Server, createServer } from 'miragejs/server';
    export { Registry, Instantiate, ModelInstance } from 'miragejs/-types';
    export {
      Serializer,
      ActiveModelSerializer,
      JSONAPISerializer,
      RestSerializer,
    } from 'miragejs/serializer'
}