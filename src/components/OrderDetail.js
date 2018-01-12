import React from 'react'
import { withRouter } from 'react-router-dom';

const OrderDetail = ({ match }) => {
    const { no } = match.params

    return (
        <div>
            OrderDetail {no}
        </div>
    )

}


export default withRouter(OrderDetail)
