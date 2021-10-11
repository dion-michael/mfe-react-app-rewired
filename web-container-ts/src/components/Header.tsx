import React from 'react'
import { headerHost } from '../configs/hosts';
import MicroFrontend from '../MicroFrontend';

interface Props {
    history?: any;
}

const Header: React.FC<Props> = ({ history }) => {
    return <MicroFrontend history={history} host={headerHost} name="Header"/>
};

export default Header;
