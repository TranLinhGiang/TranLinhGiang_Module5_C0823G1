import React, { useContext } from 'react';
import { InputContext } from '../context/InputContext';

function Team() {
    const { inputs, handleInputChange } = useContext(InputContext);

    return (
        <div>
            <label>Tên</label><br />
            <input
                name="teamName"
                value={inputs.teamName}
                onChange={handleInputChange}
            /><br />
            <label>Địa chỉ</label><br />
            <input
                name="teamAddress"
                value={inputs.teamAddress}
                onChange={handleInputChange}
            /><br />
        </div>
    );
}

export default Team;
