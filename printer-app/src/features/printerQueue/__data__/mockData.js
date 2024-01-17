export const PRINTER_QUEUE_STATE = {
    loading: false,
    queueJobs: [],
    printingJob: null
};

export const JOBS = [
    {
        "name": "Geometric Heart Key ring A",
        "duration": 2796,
        "status": "printing"
    },
    {
        "name": "Geometric Heart Key ring B",
        "duration": 3600,
        "status": "queued"
    }
];

export const NEW_JOB = {
    "name": "Geometric Heart Key ring C",
    "duration": 3600
}

export const CREATED_JOB = {
    "name": "Geometric Heart Key ring C",
    "duration": 3600,
    "status": "queued"
}
