import React from 'react';
import "./testemonial.css";
import dataTestemonial from './dataTestemonial'

const listTestemonial = dataTestemonial.map(dataTestemonial =>

    <div className='item box' key={dataTestemonial.name}>
        <div className='avatar'>
            <div className='avatar_img'>
                <img src={dataTestemonial.img} alt="avatar" />
            </div>
            <div className='avatar_info'>
                <p>{dataTestemonial.name}</p>
                <p>{dataTestemonial.status}</p>
            </div>
        </div>
        <div className='lead_text'>
            <p>{dataTestemonial.quote}</p>
        </div>
        <div className='testemonial_text'>
            <p>“ {dataTestemonial.testemonail} ”</p>
        </div>

    </div>

);

const testmonial = () => {
    return (
        <div className="box_customer">
            {listTestemonial}
        </div>
    )
}

export default testmonial