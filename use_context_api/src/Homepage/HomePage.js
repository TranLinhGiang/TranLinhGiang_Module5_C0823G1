import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { getAllTask, getAllTeam, createNewTeam, createNewTask } from "../service/index";
import Table from 'react-bootstrap/Table';
import { InputContext } from '../context/InputContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Homepage() {
    const [teams, setTeams] = useState([]);
    const [tasks, setTasks] = useState([]);
    const { inputs, resetInputs } = useContext(InputContext);

    const validationSchema = Yup.object({
        // teamName: Yup.string().required('Required'),
        // teamAddress: Yup.string().required('Required'),
        // taskSomething: Yup.string().required('Required'),
        // taskAlso: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues: inputs,
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const teamData = {
                    teamName: values.teamName,
                    teamAddress: values.teamAddress,
                };
                const newTeam = await createNewTeam(teamData);
        
                const taskData = {
                    taskSomething: values.taskSomething,
                    taskAlso: values.taskAlso,
                };
                const newTask = await createNewTask(taskData);
        
                setTeams([...teams, newTeam]);
                setTasks([...tasks, newTask]);
    
                resetForm();
                resetInputs();
    
                console.log('Tạo mới thành công:', newTeam, newTask);
            } catch (error) {
                console.error('Lỗi khi tạo mới:', error);
            }
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamsData = await getAllTeam();
                const tasksData = await getAllTask();
                setTeams(teamsData);
                setTasks(tasksData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Update formik values when inputs change
        formik.setValues(inputs);
    }, [inputs]);
    useEffect (() => {
        
    }, [inputs])

    return (
        <div>
            <div style={{ border: 'solid', width: '250px' }} className="container">
                <Link to={'/team'}>Team</Link>{' '}
                <Link to={'/task'}>Task</Link>
                <Outlet />
                <form onSubmit={formik.handleSubmit}>
                    <button type="submit">
                        Thêm mới
                    </button>
                </form>
                <br />
                <br />
            </div>

            <br />
            <br />
            <div style={{ border: 'solid' }} className="container">
                <div>
                    <h4 style={{ 'textAlign': 'center' }}>Danh sách đây nè bạn yêu</h4>
                    <h5>Teams</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên nhóm</th>
                                <th>Địa chỉ nhóm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((team) => (
                                <tr key={team.id}>
                                    <td>{team.id}</td>
                                    <td>{team.teamName}</td>
                                    <td>{team.teamAddress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <h5>Tasks</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Công việc</th>
                                <th>Mô tả công việc</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.taskSomething}</td>
                                    <td>{task.taskAlso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
