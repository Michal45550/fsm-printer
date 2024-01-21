import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrintingJob from "./PrintingJob";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../../reducer";

describe('<PrintingJob />', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    it('renders printing job', () => {

        const wrapper = mount(
            <Provider store={store}>
                <PrintingJob/>
            </Provider>,
        );

        expect(wrapper.find(PrintingJob).exists()).toBe(true);

        wrapper.unmount();
    });
});
