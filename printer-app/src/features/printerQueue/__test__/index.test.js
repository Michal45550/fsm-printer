import {createStore} from "redux";
import reducers from "../../../store/reducers";
import {GET_JOBS_REQUESTED} from "../actions";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterQueue from "../index";
import {PRINTER_QUEUE_STATE} from "../__data__/mockData";

it('should renders PrinterQueue', () => {
    const store = createStore(reducers);
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
