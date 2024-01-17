import {createStore} from "redux";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import JobItem from "./JobItem";
import reducers from "../../../../store/reducers";
import {CREATED_JOB} from "../../__data__/mockData";

describe('<JobItem />', () => {
    it('renders job item', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <JobItem job={CREATED_JOB}/>
            </Provider>,
        );

        expect(wrapper.find(JobItem).exists()).toBe(true);

        wrapper.unmount();
    });
});
