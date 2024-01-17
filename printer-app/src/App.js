import {Provider} from 'react-redux'
import store from './store';
import PrinterQueue from "./features/printerQueue";

const App = () => {

    return (
        <Provider store={store}>
            <PrinterQueue/>
        </Provider>
    );
}

export default App;
