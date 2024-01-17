import './PrintingJob.css';
import SubHeader from "../subHeader/SubHeader";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toHoursAndMinutesDisplay} from "../../utils/utils";
import {CANCEL_JOB_REQUESTED, DELETE_JOB_REQUESTED} from "../../actions";
import img from '../../assets/3d-modeling.png';

const PrintingJob = () => {

    const dispatch = useDispatch();

    const job = useSelector(({PrinterQueue}) => PrinterQueue.printingJob);

    const [duration, setDuration] = useState('');

    useEffect(() => {
        job && setDuration(toHoursAndMinutesDisplay(job.duration));
    }, [job]);

    const handleCancel = () => {
        dispatch({type: CANCEL_JOB_REQUESTED, payload: job.name});
    }

    const handleDelete = () => {
        dispatch({type: DELETE_JOB_REQUESTED, payload: job.name});
    }


    return (
        <div className="printing-job">
            <SubHeader
                title={`CURRENT PRINTING JOB  ${job ? '|' : ''}  [${duration || ''} LEFT] ${job?.status === 'stopped' ? "SOPPED" : ''}`}
                bottomLine={true}
            >
                {job && <button className="cancel-button" onClick={handleDelete}>
                    <div className="pause-icon"/>
                    <div className="pause-icon"/>
                </button>}
                {job && <button className="cancel-button" onClick={handleCancel}>
                    <div className="pause-icon"/>
                    <div className="pause-icon"/>
                </button>}
            </SubHeader>


            {job ? (<div className="job-panel">
                    <img className="job-image" src={img} alt="JobItem img" width="45%" height="260px"/>
                    <div className="job-details">
                        <h2>{job.name}</h2>
                        <h4>Mor caldron</h4>
                    </div>
                </div>)
                : 'No job is printing ...'}
        </div>
    );
};

export default PrintingJob;
