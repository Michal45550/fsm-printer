import {createStore} from "redux";
import reducers from "../../../../store/reducers";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrintingJob from "./PrintingJob";

describe('<PrintingJob />', () => {
    it('renders printing job', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <PrintingJob/>
            </Provider>,
        );

        expect(wrapper.find(PrintingJob).exists()).toBe(true);

        wrapper.unmount();
    });
});
