import {mount} from "enzyme";
import {Provider} from "react-redux";
import SubHeader from "./SubHeader";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../../reducer";

describe('<SubHeader />', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    it('renders sub header', () => {

        const wrapper = mount(
            <Provider store={store}>
                <SubHeader/>
            </Provider>,
        );

        expect(wrapper.find(SubHeader).exists()).toBe(true);

        wrapper.unmount();
    });
});
