import React from 'react'
import { blogHost } from '../configs/hosts';
import MicroFrontend from '../MicroFrontend';

interface Props {
    history?: any;
}

const Blogs: React.FC<Props> = ({ history }) => {
    return (
        <div>
            <MicroFrontend history={history} host={blogHost} name="BlogDetail"/>
        </div>
    )
};

export default Blogs;
