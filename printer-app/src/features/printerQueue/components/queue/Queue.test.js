import {mount} from "enzyme";
import {Provider} from "react-redux";
import Queue from "./Queue";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../../reducer";

describe('<JobItem />', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    it('renders queue', () => {

        const wrapper = mount(
            <Provider store={store}>
                <Queue/>
            </Provider>,
        );

        expect(wrapper.find(Queue).exists()).toBe(true);

        wrapper.unmount();
    });
});
