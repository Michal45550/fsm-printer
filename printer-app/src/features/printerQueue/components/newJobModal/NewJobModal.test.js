import {createStore} from "redux";
import reducers from "../../../../store/reducers";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import NewJobModal from "./NewJobModal";

describe('<NewJobModal />', () => {
    it('renders new job modal', () => {
        const store = createStore(reducers);

        const wrapper = mount(
            <Provider store={store}>
                <NewJobModal/>
            </Provider>,
        );

        expect(wrapper.find(NewJobModal).exists()).toBe(true);

        wrapper.unmount();
    });

    it('open modal', () => {
        const store = createStore(reducers);

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
