import React from 'react'
import { blogHost } from '../configs/hosts';
import MicroFrontend from '../MicroFrontend';

interface Props {
    history?: any;
}

const Blogs: React.FC<Props> = ({ history }) => {
    return <MicroFrontend history={history} host={blogHost} name="Blogs"/>
};

export default Blogs;
