import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterStatus from "./PrinterStatus";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../../reducer";

describe('<PrinterStatus />', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    it('renders printer status', () => {

        const wrapper = mount(
            <Provider store={store}>
                <PrinterStatus/>
            </Provider>,
        );

        expect(wrapper.find(PrinterStatus).exists()).toBe(true);

        wrapper.unmount();
    });
});
