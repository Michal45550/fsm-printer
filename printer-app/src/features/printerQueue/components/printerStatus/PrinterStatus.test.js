import {createStore} from "redux";
import reducers from "../../../../store/reducers";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterStatus from "./PrinterStatus";

describe('<PrinterStatus />', () => {
    it('renders printing job', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <PrinterStatus/>
            </Provider>,
        );

        expect(wrapper.find(PrinterStatus).exists()).toBe(true);

        wrapper.unmount();
    });
});
