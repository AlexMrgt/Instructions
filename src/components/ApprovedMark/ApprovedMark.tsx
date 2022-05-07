import React from 'react'
import { useState } from 'react';
import { ApprovedMarkPropsInterface } from './interfaces/approved-mark.props.interface';

import './ApprovedMark.css';

import ApprovedImage from '../../images/approved.png'


const ApprovedMark: React.FC<ApprovedMarkPropsInterface> = ({
    helperPosition,
    isHelperStatic = false,
    helperBgColor ='transparent'
}) => {

    const getHelperContainerStyleClass = () => `approved__helper-container approved__helper-container_${helperPosition} approved__helper-container_bg-color-${helperBgColor} `;


    const [isShow, setIsShow] = useState(isHelperStatic);

    function showHelper() {
        setIsShow(true)
    }

    function hideHelper() {
        setIsShow(false)
    }

    return (
        <div className='approved' >

            <div className='approved__image-container' >
                <img
                    className='approved__image'
                    src={ApprovedImage}
                    alt='approved'
                    onMouseOver={!isHelperStatic ? showHelper : undefined}
                    onMouseLeave={!isHelperStatic ? hideHelper : undefined}
                />
            </div>


            {(isShow)
                ?
                <div className={getHelperContainerStyleClass()} >
                    <p className='approved__helper-text'> Дизайн одобрен аналитиком, менеджером и тимлидом</p>
                </div>
                : null
            }

        </div>


    )
}

export default ApprovedMark;