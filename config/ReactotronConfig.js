import Reactotron, { overlay } from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron
    .configure({ name: 'app_name', host: '192.168.15.8' })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative({
        networking: {
        ignoreUrls: /symbolicate|logs|generate_204/,
        },
    })
    .use(sagaPlugin())
    .use(overlay())
    .use(reactotronRedux()) //  <- here i am!
    .connect();
    
    Reactotron.clear()

//  patch console.log to send log to reactotron
const yeOldeConsoleLog = console.log;
console.log = (...args) => {
  yeOldeConsoleLog(...args);
  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default Reactotron;
