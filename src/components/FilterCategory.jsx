import React from "react";

function FIlterCategory({ filterCategoryState, setfilterCategoryState }) {

    function handleFilterCategory(e) {
        e.preventDefault();
        setfilterCategoryState(e.target.value);
    };

    return (
        <select onChange={handleFilterCategory} id="filter" value={filterCategoryState} >
            <option value="todos">Todos</option>
            <option value="aceites">Aceites</option>
            <option value="filtros">Filtros</option>
        </select>
    );

};
export default FIlterCategory;