import React from "react";

import PropTypes from "prop-types";

import { FaPlus } from "react-icons/fa";
import "./Form.css";

export default function Form({ handleSubmit, novaTarefa, handleChange }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" value={novaTarefa} onChange={handleChange} />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    );
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    novaTarefa: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
};
