import axios from 'axios';

export const getAllTask = async () => {
    try {
        const response = await axios.get('http://localhost:8080/tasks');
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks data:", error);
        throw error;
    }
};

export const getAllTeam = async () => {
    try {
        const response = await axios.get('http://localhost:8080/teams');
        return response.data;
    } catch (error) {
        console.error("Error fetching teams data:", error);
        throw error;
    }
};

export const createNewTeam = async (newTeamData) => {
    const response = await axios.post('http://localhost:8080/teams', newTeamData);
    return response.data;
};

export const createNewTask = async (newTaskData) => {
    const response = await axios.post('http://localhost:8080/tasks', newTaskData);
    return response.data;
};

