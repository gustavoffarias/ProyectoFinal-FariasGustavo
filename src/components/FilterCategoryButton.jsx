import React from "react";
import { Link } from "react-router-dom"

const FilterCategoryButton = ({categoria}) => {
    return (
        <div className="filterButton" key={categoria}>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Todos`}>
                <button className="socialbutton sb-fi">Todos</button>
            </Link>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Aceites`}>
                <button className="socialbutton sb-fi">Aceites</button>
            </Link>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Filtros`}>
                <button className="socialbutton sb-fi">Filtros</button>
            </Link>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Cubiertas`}>
                <button className="socialbutton sb-fi">Cubiertas</button>
            </Link>
        </div>
    );
};

export default FilterCategoryButton;