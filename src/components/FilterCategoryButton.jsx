import React from "react";
import { Link } from "react-router-dom"

const FilterCategoryButton = ({categoria}) => {
    return (
        <div className='btn-primary' key={categoria}>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Todos`}>
                <button>Todos</button>
            </Link>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Aceites`}>
                <button>Aceites</button>
            </Link>
            <Link to={`/NavegaLasRutas-FariasGustavo/categoria/Filtros`}>
                <button>Filtros</button>
            </Link>
        </div>
    );
};

export default FilterCategoryButton;