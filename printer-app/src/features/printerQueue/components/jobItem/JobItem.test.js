import {mount} from "enzyme";
import {Provider} from "react-redux";
import JobItem from "./JobItem";
import {CREATED_JOB} from "../../__data__/mockData";
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

    it('renders job item', () => {

        const wrapper = mount(
            <Provider store={store}>
                <JobItem job={CREATED_JOB}/>
            </Provider>,
        );

        expect(wrapper.find(JobItem).exists()).toBe(true);

        wrapper.unmount();
    });
});
