import React from 'react'
import { Link } from 'react-router-dom';


function BucketItemCard() {
    return (
        <div className="bucket-item active">
            <h3 className="item-title">
            Lorem ipsum began as scrambled, nonsensical Latin derived
            </h3>
            <p className="item-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur quisquam natus sapiente minima quam, 
                ad perferendis voluptate laboriosam, eius doloremque quasi. Beatae, mollitia ipsam provident aliquid ipsa 
                quis modi?
            </p>
            <div className="item-footer">
                <Link to="/bucket-item">View Details</Link>
        
                <div>
                    <span className="text-gray-400 mx-1">20/05/2021</span>
                    <span className="mx-1">16/09/2021</span>
                </div>
            </div>
        </div>
    )
}

export default BucketItemCard
