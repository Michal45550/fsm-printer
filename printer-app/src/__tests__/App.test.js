import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterQueue from "../features/printerQueue";

import App from '../App';
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../features/printerQueue/reducer";

describe('<App />', () => {
    it('renders printer queue', () => {

        const sagaMiddleware = createSagaMiddleware();

        const store = configureStore({
            reducer: {
                PrinterQueue: PrinterQueueReducer
            },
            middleware: [sagaMiddleware]
        })

        const wrapper = mount(
            <Provider store={store}>
                <App/>
            </Provider>,
        );

        expect(wrapper.find(PrinterQueue).exists()).toBe(true);

        wrapper.unmount();
    });
});
