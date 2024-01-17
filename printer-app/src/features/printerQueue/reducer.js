import {CREATE_JOB, GET_JOBS, REORDER_JOB, SET_LOADING} from './actions'

const initialState = {
    loading: false,
    queueJobs: [],
    printingJob: null
}

const Reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_JOBS:
            return {
                ...state,
                queueJobs: payload.filter(job => job.status === "queued"),
                printingJob: payload.find(job => job.status !== "queued"),
                loading: false
            }
        case CREATE_JOB:
            return {
                ...state,
                queueJobs: [...state.queueJobs, payload],
                loading: false
            }
        case REORDER_JOB:
            return {
                ...state,
                queueJobs: payload.filter(job => job.status === "queued"),
                loading: false
            }
        default:
            return state;
    }
}

export default Reducer;
