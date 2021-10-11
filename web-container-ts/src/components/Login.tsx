import React from 'react'
import { loginHost } from '../configs/hosts';
import MicroFrontend from '../MicroFrontend';

interface Props {
    history?: any;
}

const Login: React.FC<Props> = ({ history }) => {
    return <MicroFrontend history={history} host={loginHost} name="Login"/>
};

export default Login;
