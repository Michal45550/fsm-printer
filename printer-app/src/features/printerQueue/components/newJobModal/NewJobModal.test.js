import {mount} from "enzyme";
import {Provider} from "react-redux";
import NewJobModal from "./NewJobModal";
import {configureStore} from "@reduxjs/toolkit";
import PrinterQueueReducer from "../../reducer";
import createSagaMiddleware from "redux-saga";

describe('<NewJobModal />', () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: {
            PrinterQueue: PrinterQueueReducer
        },
        middleware: [sagaMiddleware]
    })

    it('renders new job modal', () => {

        const wrapper = mount(
            <Provider store={store}>
                <NewJobModal/>
            </Provider>,
        );

        expect(wrapper.find(NewJobModal).exists()).toBe(true);

        wrapper.unmount();
    });

    it('open modal', () => {

        const wrapper = mount(
            <Provider store={store}>
                <NewJobModal/>
            </Provider>,
        );

        wrapper.find('.add-button').first().simulate('click');

        expect(wrapper.find('.modal').exists()).toBe(true);


        const submitButton = wrapper.find('#submit').first();

        submitButton.simulate('click');

        store.dispatch = jest.fn();
        // expect(store.dispatch).toHaveBeenCalledWith({type: CREATE_JOB_REQUESTED, payload: NEW_JOB});

        wrapper.unmount();
    });

});
