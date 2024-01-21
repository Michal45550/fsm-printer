import {GET_JOBS_REQUESTED} from "../actions";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterQueue from "../index";
import {PRINTER_QUEUE_STATE} from "../__data__/mockData";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../reducer";

it('should renders PrinterQueue', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    store.dispatch({type: GET_JOBS_REQUESTED});
    const wrapper = mount(
        <Provider store={store}>
            <PrinterQueue/>
        </Provider>,
    );

    expect(wrapper.find(PrinterQueue).exists()).toBe(true);

    expect(store.getState().PrinterQueue).toEqual(PRINTER_QUEUE_STATE);

    wrapper.unmount();
});
