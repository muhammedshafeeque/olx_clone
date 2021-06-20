import React from 'react'
import './loading.css'

import { Spinner } from 'react-bootstrap';
function Loading() {
    return (
        <div className="loading_page">
            <div className='load' >
                <Spinner animation="border" role="status">
                    <span className="visually-hidden"></span>
                </Spinner>

            </div>
        </div>
    )
}

export default Loading
