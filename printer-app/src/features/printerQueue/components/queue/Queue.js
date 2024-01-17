import './Queue.css';
import SubHeader from "../subHeader/SubHeader";
import JobItem from "../jobItem/JobItem";
import NewJobModal from "../newJobModal/NewJobModal";
import {useSelector} from "react-redux";
import loadingIcon from '../../assets/Spinner-1s-200px.gif';

const Queue = () => {

    const queueJobs = useSelector(({PrinterQueue}) => PrinterQueue.queueJobs);
    const loading = useSelector(({PrinterQueue}) => PrinterQueue.loading);

    return (
        <div className="queue">

            <SubHeader title="QUEUE" topLine={true}>
                {/*{loading && <img src={loadingIcon} alt="Loading" width="50px" height="50px"/>}*/}
                <NewJobModal/>
            </SubHeader>

            {queueJobs.length ? queueJobs.map((job, index) =>
                <JobItem job={{...job, index, last: index === queueJobs.length - 1}}
                         key={index}/>
            ) : "-no jobs-"}

        </div>
    );
};

export default Queue;
