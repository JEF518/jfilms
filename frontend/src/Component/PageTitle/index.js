import React from 'react';

const PageTitle = ({ titleText }) => (
  <div className="page-title blur-card">
    <h1>{CapitalizeWords(removeDashes(titleText))}</h1>
  </div>);

function CapitalizeWords(str){
const newTitleArray = str.split(' ');
const newTitle = newTitleArray.map(word => word.charAt(0).toUpperCase() + word.slice(1) + ' ');
return newTitle;
}

function removeDashes(str){
    return str.replace('-',' ');
}
export default PageTitle;