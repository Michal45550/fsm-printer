import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import SubHeader from "./SubHeader";
import reducers from "../../../../store/reducers";

describe('<SubHeader />', () => {
    it('renders sub header', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <SubHeader/>
            </Provider>,
        );

        expect(wrapper.find(SubHeader).exists()).toBe(true);

        wrapper.unmount();
    });
});
