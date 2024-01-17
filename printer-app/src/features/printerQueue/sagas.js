import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

import * as actions from './actions'

import * as api from './api';

function* getAllJobs() {
    yield put({type: actions.SET_LOADING});

    const allJobs = yield call(api.getAllJobs);

    yield put({type: actions.GET_JOBS, payload: allJobs});
}

function* createJob({payload}) {
    yield put({type: actions.SET_LOADING});

    const newJob = yield call(api.createJob, payload);

    yield put({type: actions.CREATE_JOB, payload: newJob});
}

function* deleteJob({payload}) {
    yield put({type: actions.SET_LOADING});

    yield call(api.deleteJob, payload);

    yield call(getAllJobs);
}

function* reorderJob({payload}) {
    yield put({type: actions.SET_LOADING});

    const allJobs = yield call(api.reorderJob, payload);

    yield put({type: actions.REORDER_JOB, payload: allJobs});
}

function* cancelJob({payload}) {
    yield put({type: actions.SET_LOADING});

    yield call(api.cancelJob, payload);

    yield call(getAllJobs);
}

export default function* Sagas() {
    yield takeEvery(actions.GET_JOBS_REQUESTED, getAllJobs)
    yield takeEvery(actions.CREATE_JOB_REQUESTED, createJob)
    yield takeEvery(actions.DELETE_JOB_REQUESTED, deleteJob)
    yield takeLatest(actions.REORDER_JOB_REQUESTED, reorderJob)
    yield takeLatest(actions.CANCEL_JOB_REQUESTED, cancelJob)
}
