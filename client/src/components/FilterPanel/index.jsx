import React from 'react'
import './FilterPanel.scss';

const FilterPanel = ({filterPanelValue, setFilterPanelValue}) => {
  return (
    <div className="filter-palel text-white">
      <div className="container d-flex justify-content-center">
        <div className="">Sort by: </div>
        <label className="cursor-pointer">
          <input type="radio" name="filter" value="author" onChange={(event) => setFilterPanelValue(event.target.value)} checked={filterPanelValue === 'author'}className="margin-right-5 hide"/>
          <span className={filterPanelValue === 'author'? 'border-botom ' : ''}>Author name</span>
        </label>
        <label className="cursor-pointer">
          <input type="radio" name="filter" value="date" onChange={(event) => setFilterPanelValue(event.target.value)} checked={filterPanelValue === 'date'} className="margin-right-5 hide"/>
          <span className={filterPanelValue === 'date'? 'border-botom' : ''}>Creation date</span>
        </label>
        <label className="cursor-pointer">
          <input type="radio" name="filter" value="title" onChange={(event) => setFilterPanelValue(event.target.value)} checked={filterPanelValue === 'title'} className="margin-right-5 hide"/>
          <span className={filterPanelValue === 'title'? 'border-botom ' : ''}>Recipe title</span>
        </label>
      </div>
    </div>
  );
}

export default FilterPanel;
