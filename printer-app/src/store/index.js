import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import PrinterQueueReducer from '../features/printerQueue/reducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        PrinterQueue: PrinterQueueReducer
    },
    middleware: [sagaMiddleware]
})


sagaMiddleware.run(rootSaga);

export default store;
