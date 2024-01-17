import {spawn} from 'redux-saga/effects'
import printerQueueSaga from '../features/printerQueue/sagas'

export default function* rootSaga() {
    yield spawn(printerQueueSaga);
};
