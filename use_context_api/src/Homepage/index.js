import React from "react";
import { InputProvider } from '../context/InputContext';
import Homepage from "./HomePage";

function Layout() {
    return (
        <InputProvider>
            <Homepage></Homepage>
        </InputProvider>
    )
}
export default Layout;