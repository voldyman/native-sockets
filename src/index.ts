import bindings from 'bindings';
import clientChat from './client/chat';

const n = bindings('native-sockets');
clientChat(n);


