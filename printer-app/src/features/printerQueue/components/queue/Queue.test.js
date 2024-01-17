import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import Queue from "./Queue";
import reducers from "../../../../store/reducers";

describe('<JobItem />', () => {
    it('renders queue', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <Queue/>
            </Provider>,
        );

        expect(wrapper.find(Queue).exists()).toBe(true);

        wrapper.unmount();
    });
});
