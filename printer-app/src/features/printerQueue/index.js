import './index.css';
import PrintingJob from "../../features/printerQueue/components/printingJob/PrintingJob";
import Queue from "../../features/printerQueue/components/queue/Queue";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {GET_JOBS_REQUESTED} from "./actions";
import PrinterStatus from "./components/printerStatus/PrinterStatus";


const PrinterQueue = () => {

    const dispatch = useDispatch();

    useEffect(() => {
       const intervalId =  setInterval(() => {
            dispatch({type: GET_JOBS_REQUESTED});
        }, 1000);
        return () => clearInterval(intervalId);
    }, [dispatch]);

    const Divider = () => <div className="divider"></div>;

    return (
        <div className="printer-queue-app">
            <PrinterStatus/>
            <Divider/>
            <PrintingJob/>
            <Divider/>
            <Queue/>
        </div>
    );
};

export default PrinterQueue;
