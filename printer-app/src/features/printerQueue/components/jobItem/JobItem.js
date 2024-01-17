import './JobItem.css';
import img from '../../assets/3d-modeling.png';
import clockIcon from '../../assets/clock.png';
import authorIcon from '../../assets/user.png';
import deleteIcon from '../../assets/delete.png';
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {toHoursAndMinutesDisplay} from "../../utils/utils";
import {DELETE_JOB_REQUESTED, REORDER_JOB_REQUESTED} from "../../actions";

const JobItem = ({job}) => {

    const dispatch = useDispatch();

    const [duration, setDuration] = useState('');

    useEffect(() => {
        setDuration(toHoursAndMinutesDisplay(job.duration));
    }, [job]);

    const handleReorder = (up) => {
        if ((job.index === 0 && up) || (job.last && !up))
            return;
        dispatch({type: REORDER_JOB_REQUESTED, payload: {name: job.name, up}});
    }

    const handleDelete = () => {
        dispatch({type: DELETE_JOB_REQUESTED, payload: job.name});
    }

    return (
        <div className="job">
            <div className="reorder">
                <div className={`reorder-button ${job.index === 0 ? 'disable-button' : ''}`}
                     onClick={() => handleReorder(true)}>
                    <div className="arrow-up"></div>
                    <div className="underline"></div>
                </div>
                <div className={`reorder-button ${job.last ? 'disable-button' : ''}`}
                     onClick={() => handleReorder(false)}>
                    <div className="underline"></div>
                    <div className="arrow-down"></div>
                </div>
            </div>

            <img className="job-image" src={img} alt="JobItem img" width="60px" height="60px"/>

            <div className="details">
                <h3>{job.index + 1}. &nbsp; {job.name}</h3>
                <label className="duration">
                    <img className="clock-icon" src={clockIcon} alt="Delete" width="17px" height="17px"/>
                    {duration}
                </label>
                <img src={authorIcon} alt="Delete" width="15px" height="15px"/>
                <label> Stanislav Polotolsky</label>
                <label> {job.status}</label>
            </div>

            <div className="delete" onClick={handleDelete}>
                <img src={deleteIcon} alt="Delete" width="30px" height="30px"/>
            </div>
        </div>
    );
};

export default JobItem;
