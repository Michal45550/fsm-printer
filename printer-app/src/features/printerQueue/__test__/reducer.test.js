import Reducer from "../reducer";
import {CREATE_JOB, GET_JOBS, REORDER_JOB, SET_LOADING} from "../actions";
import {CREATED_JOB, JOBS, PRINTER_QUEUE_STATE} from "../__data__/mockData";

describe('printerQueueReducer', () => {

    it('should set loading', () => {
        expect(Reducer(undefined, {type: SET_LOADING})).toEqual({
            ...PRINTER_QUEUE_STATE,
            loading: true
        });
    });

    it('should get jobs', () => {
        expect(Reducer(undefined, {type: GET_JOBS, payload: JOBS})).toEqual({
            ...PRINTER_QUEUE_STATE,
            queueJobs: JOBS.filter(job => job.status === "queued"),
            printingJob: JOBS.find(job => job.status !== "queued"),
            loading: false
        });
    });

    it('should create job', () => {
        expect(Reducer(undefined, {type: CREATE_JOB, payload: CREATED_JOB})).toEqual({
            ...PRINTER_QUEUE_STATE,
            queueJobs: [...PRINTER_QUEUE_STATE.queueJobs, CREATED_JOB],
            loading: false
        });
    });

    it('should reorder job', () => {
        expect(Reducer(undefined, {type: REORDER_JOB, payload: JOBS})).toEqual({
            ...PRINTER_QUEUE_STATE,
            queueJobs: JOBS.filter(job => job.status === "queued"),
            loading: false
        });
    });

    it('should return default state ', () => {
        expect(Reducer(undefined, {type: ""})).toEqual({
            ...PRINTER_QUEUE_STATE
        });
    });
});
