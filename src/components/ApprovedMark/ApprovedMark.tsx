import React from 'react'
import { useState } from 'react';
import { ApprovedMarkPropsInterface } from './interfaces/approved-mark.props.interface';

import './ApprovedMark.css';

import ApprovedImage from '../../images/approved.png'
import ApprovedImage_2 from '../../images/appr_2.png'
import ApprovedImage_3 from '../../images/appr_3.png'

const ApprovedMark: React.FC<ApprovedMarkPropsInterface> = ({
    helperPosition,
    isHelperStatic = false,
    helperBgColor = 'transparent'
}) => {

    const getHelperContainerStyleClass = () => `approved__helper-container approved__helper-container_${helperPosition} approved__helper-container_bg-color-${helperBgColor} `;
    const approveImages: ApprovedImageInterface[] = [{ image: ApprovedImage, id: 0 }, { image: ApprovedImage_2, id: 1 }, { image: ApprovedImage_3, id: 2 }]


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

                {approveImages.map(imageData => {
                    return <img
                        key={imageData.id}
                        className='approved__image'
                        src={imageData.image}
                        alt='approved'
                        onMouseOver={!isHelperStatic ? showHelper : undefined}
                        onMouseLeave={!isHelperStatic ? hideHelper : undefined}
                    />
                })}



            </div>


            {(isShow)
                ?
                <div className={getHelperContainerStyleClass()} >
                    <p className='approved__helper-text'> Дизайн одобрен аналитиком, менеджером, тимлидом и отделом тестирования</p>
                </div>
                : null
            }

        </div>


    )
}

export default ApprovedMark;

interface ApprovedImageInterface {
    image: string,
    id: number
}