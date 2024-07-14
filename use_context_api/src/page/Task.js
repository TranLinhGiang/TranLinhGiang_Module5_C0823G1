import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

function Task() {
    const { inputs, handleInputChange } = useContext(InputContext);

    return (
        <div>
            <label>Gì đó</label><br />
            <input
                name="taskSomething"
                value={inputs.taskSomething}
                onChange={handleInputChange}
            /><br />
            <label>Cũng được</label><br />
            <input
                name="taskAlso"
                value={inputs.taskAlso}
                onChange={handleInputChange}
            /><br />
        </div>
    );
}

export default Task;
