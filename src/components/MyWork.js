import React from 'react';
import ReactDOM from 'react-dom';
import MyWorkContent from './MyWorKContent';
import Contributions from './Contributions';

const MyWork = () => (
    <div id="mywork">
        <h1 className="work_header" >My work</h1>
        <MyWorkContent />
        <Contributions />
    </div>
)
export default MyWork