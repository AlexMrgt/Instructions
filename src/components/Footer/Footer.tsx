import React from 'react'
import { useEffect, useState } from 'react';

import useCurrentSize from '../../hooks/useCurrentWidth';
import ApprovedMark from '../ApprovedMark/ApprovedMark';

import './Footer.css';

export const Footer: React.FC = () => {

    const size = useCurrentSize();

    const [isShowApprovedBanner, setisShowApprovedBanner] = useState(size.width < 1230)

    useEffect(() => {

console.warn(size.width)
        if (size.width < 1230 ) {
            setisShowApprovedBanner(true)
        }
        else if (size.width > 1230 ) {
            setisShowApprovedBanner(false)
        }

    }, [size.width, isShowApprovedBanner]);

    return (
        <footer className='footer'>
            {isShowApprovedBanner ? <ApprovedMark isHelperStatic={true} helperPosition='top' helperBgColor='transparent' /> : null}
            <p className='footer__text'>Ekaterinburg, 2022</p>
        </footer>

    )
}

export default Footer;



