import * as React from 'react';
import {useEffect, useState} from 'react';
import './NewJobModal.css';
import Modal from '@mui/material/Modal';
import {useDispatch, useSelector} from "react-redux";
import {CREATE_JOB_REQUESTED} from "../../actions";

const NewJobModal = () => {
    const dispatch = useDispatch();

    const JOB_DATA = {
        name: "",
        duration: ""
    }

    const queueJobs = useSelector(({PrinterQueue}) => PrinterQueue.queueJobs);

    const [open, setOpen] = useState(false);
    const [jobData, setJobData] = useState(JOB_DATA);
    const [error, setError] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setJobData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: CREATE_JOB_REQUESTED,
            payload: jobData
        });
        handleClose();
        setJobData(JOB_DATA);
    }

    useEffect(() => {
        const existName = queueJobs.find(job => job.name === jobData.name);
        existName ? setError("name already exist") : setError('');
    }, [jobData.name, queueJobs]);

    return (
        <div>
            <button className="add-button" onClick={handleOpen}>ADD A JOB</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal">
                    <div className="modal-header">
                        New job
                    </div>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-field">
                                <label htmlFor="jobName">
                                    Job Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={jobData.name}
                                    onChange={handleInputChange}
                                    placeholder="Type a name for this job..."
                                    required
                                />
                                <span style={{color: "red"}}>{error}</span>
                            </div>
                            <div className="modal-field">
                                <label htmlFor="jobDuration">
                                    Job Duration
                                </label>
                                <input
                                    id="duration"
                                    name="duration"
                                    type="number"
                                    value={jobData.duration}
                                    onChange={handleInputChange}
                                    placeholder="Type a duration for this job..."
                                    required
                                />
                            </div>
                            <button id="submit" type="submit" disabled={error !== ''}>Submit</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default NewJobModal;
