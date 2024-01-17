import defaultAxios from 'axios'

export const axiosInstance = defaultAxios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    headers: {'Content-Type': 'application/json'}
});

export const getAllJobs = async () => {
    try {
        const allJobs = await axiosInstance.get('jobs');
        return allJobs.data;
    } catch (err) {
        return console.error(err);
    }
}

export const createJob = async ({name, duration}) => {
    try {
        const newJob = await axiosInstance.post('jobs', JSON.stringify({name, duration: Number(duration)}));
        return newJob.data;
    } catch (err) {
        return console.error(err);
    }
}

export const deleteJob = async (name) => {
    try {
        await axiosInstance.delete(`jobs/?name=${name}`);
    } catch (err) {
        return console.error(err);
    }
}

export const reorderJob = async ({name, up}) => {
    try {
        const reorderedJobs = await axiosInstance.post(`job/move/?name=${name}&up=${up}`, {}, {headers: {'Content-Type': 'application/json'}});
        return reorderedJobs.data;
    } catch (err) {
        return console.error(err);
    }
}

export const cancelJob = async (name) => {
    try {
        await axiosInstance.post(`job/cancel/?name=${name}`, {}, {headers: {'Content-Type': 'application/json'}});
    } catch (err) {
        return console.error(err);
    }
}
