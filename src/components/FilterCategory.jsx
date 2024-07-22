import React from "react";

function FIlterCategory({ filterCategoryState, setfilterCategoryState }) {

    function handleFilterCategory(e) {
        e.preventDefault();
        setfilterCategoryState(e.target.value);
    };

    return (
        <select onChange={handleFilterCategory} id="filter" value={filterCategoryState} >
            <option value="all">Todos</option>
            <option value="aceites">Aceites</option>
            <option value="filtros">Filtross</option>
        </select>
    );

};
export default FIlterCategory;