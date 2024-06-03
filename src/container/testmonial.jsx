import React from 'react';
import "./testemonial.css";
import dataTestemonial from './dataTestemonial'

const listTestemonial = dataTestemonial.map(dataTestemonial =>

    <div className={'item' + dataTestemonial.box + ' box'} key={dataTestemonial.box}>
        <div className='avatar'>
            <div className='avatar_img'>
                <img src={dataTestemonial.img} alt="avatar" />
            </div>
            <div className='avatar_info'>
                <h3 className='avatar_info_name'>{dataTestemonial.name}</h3>
                <p className='avatar_info_status'>{dataTestemonial.status}</p>
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
        <div className="parent">
            <div class="grid_container">
                {listTestemonial}
            </div>
        </div>
    )
}

export default testmonial