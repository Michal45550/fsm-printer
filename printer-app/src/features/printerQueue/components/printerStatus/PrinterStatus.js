import './PrinterStatus.css';
import SubHeader from "../subHeader/SubHeader";
import {useEffect, useState} from "react";
import {createMachine} from "fsm-lib";
import {useSelector} from "react-redux";
import ready from '../../assets/printer-ready.png';
import printing from '../../assets/printer-printing.png';
import stuck from '../../assets/printer-stuck.png';


const stateMap = {
    initial: "ready",
    states: {
        ready: {
            JOB_ENTERED: "printing"
        },
        printing: {
            JOB_EXIT: "ready",
            JOB_STOPPED: "stuck",
        },
        stuck: {
            JOB_EXIT: "ready",
        }
    }
}

const fsm = createMachine(stateMap);

const PrinterStatus = () => {

    const printingJobStatus = useSelector(({PrinterQueue}) => PrinterQueue.printingJob?.status);

    const [printerState, setPrinterState] = useState();
    const [img, setImg] = useState('');

    const printerStateImg = {
        "ready": ready,
        "printing": printing,
        "stuck": stuck
    }

    // const handleTransition = (action) => {
    //     setPrinterState(fsm.transition(action));
    // };

    useEffect(() => {
        setPrinterState(fsm.currentState());
    }, [])

    useEffect(() => {
        printingJobStatus === undefined && setPrinterState(fsm.transition("JOB_EXIT"));
        printingJobStatus === "printing" && setPrinterState(fsm.transition("JOB_ENTERED"));
        printingJobStatus === "stopped" && setPrinterState(fsm.transition("JOB_STOPPED"));
    }, [printingJobStatus])

    useEffect(() => {
        setImg(printerStateImg[printerState])
    }, [printerState])

    return (
        <div className="printing-job">
            <SubHeader
                title={`PRINTER STATUS [${printerState}]`}
                bottomLine={true}
            >
             <img src={img} alt="printer" width="50px" height="50px"/>
            </SubHeader>
            <div>

                {/*<p>Current State: {currentState}</p>

                    <button onClick={() => handleTransition('JOB_ENTERED')}>JOB_ENTERED
            </button>
            <button onClick={() => handleTransition('JOB_TIMEOUT')}>JOB_TIMEOUT</button>
            <button onClick={() => handleTransition('JOB_STOPPED')}>JOB_STOPPED</button>
            <button onClick={() => handleTransition('JOB_DELETED')}>JOB_DELETED</button>
            <button onClick={() => handleTransition('reset')}>Reset</button>
           */}

            </div>
        </div>
    );
};

export default PrinterStatus;
