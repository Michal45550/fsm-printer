import MockAdapter from 'axios-mock-adapter';
import {CREATED_JOB, JOBS, NEW_JOB} from "../__data__/mockData";
import {axiosInstance, cancelJob, createJob, deleteJob, getAllJobs, reorderJob} from "../api";

describe('ExternalApi', () => {

    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axiosInstance)
    });

    it('should return all jobs', async () => {

        mock.onGet('jobs').reply(200, JOBS);

        expect(await getAllJobs()).toEqual(JOBS);
    });

    it('should create job', async () => {

        mock.onPost('jobs').reply(200, CREATED_JOB);

        expect(await createJob(NEW_JOB)).toEqual(CREATED_JOB);
    });

    it('should delete job', async () => {

        mock.onDelete('jobs/?name=' + CREATED_JOB.name).reply(200);

        await deleteJob(CREATED_JOB.name);

        expect.assertions(0);
    });

    it('should reorder job', async () => {

        mock.onPost(`job/move/?name=${CREATED_JOB.name}&up=true`).reply(200, JOBS);

        expect(await reorderJob({name: CREATED_JOB.name, up: true})).toEqual(JOBS);
    });

    it('should cancel job', async () => {

        mock.onPost(`job/cancel/?name=${CREATED_JOB.name}`).reply(200);

        await cancelJob(CREATED_JOB.name);

        expect.assertions(0);
    });

});
