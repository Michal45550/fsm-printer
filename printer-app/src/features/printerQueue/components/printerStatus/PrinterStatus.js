import './PrinterStatus.css';
import SubHeader from "../subHeader/SubHeader";
import {useEffect, useState} from "react";
import {createMachine} from "fsm-lib";
import {useSelector} from "react-redux";

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

    const [currentState, setCurrentState] = useState();

    const handleTransition = (action) => {
        setCurrentState(fsm.transition(action));
    };

    useEffect( () => {
        setCurrentState(fsm.currentState());
    }, [])

    useEffect( () => {
        printingJobStatus === undefined && setCurrentState(fsm.transition("JOB_EXIT"));
        printingJobStatus === "printing" && setCurrentState(fsm.transition("JOB_ENTERED"));
        printingJobStatus === "stopped" && setCurrentState(fsm.transition("JOB_STOPPED"));
        console.log(printingJobStatus)
    }, [printingJobStatus])

    return (
        <div className="printing-job">
            <SubHeader
                title={`PRINTER STATUS [${currentState}]`}
                bottomLine={true}
            />
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
