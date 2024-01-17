import {createStore} from "redux";
import reducers from "../store/reducers";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import PrinterQueue from "../features/printerQueue";

import App from '../App';

describe('<App />', () => {
    it('renders printer queue', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <App/>
            </Provider>,
        );

        expect(wrapper.find(PrinterQueue).exists()).toBe(true);

        wrapper.unmount();
    });
});
