import React, { ComponentType, ReactElement } from 'react'
import { ApprovedMarkPropsInterface } from '../ApprovedMark/interfaces/approved-mark.props.interface';

import './AbsolutePositionWrapper.css';

interface props {
    innerComponent: ReactElement<ApprovedMarkPropsInterface>
}

const AbsolutePositionWrapper: React.FC<props> = ({ innerComponent }) => {
    return (
        <div className='absolute-wrapper'>
            {innerComponent}
        </div>
    )
}

export default AbsolutePositionWrapper;