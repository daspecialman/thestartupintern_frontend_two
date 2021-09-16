import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'
import BucketItemCard from './BucketItemCard'

class Bucket extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar />
                    <div className="container px-10 mt-10" style={{ height: '70vh', overflowY: "scroll" }}>
                        <div className="d-flex space-btw">
                            <div>
                                <p className="text-xl font-bold"> Welcome John Doe,</p>
                                <p className="text-xs mt-2 font-medium">
                                    Here are items in your eventful moment bucket.
                                </p>
                            </div>
                            <div>
                                <Link to="/new-item" className="btn btn-submit">Add Item</Link>
                            </div>
                        </div> 

                        <div class="grid grid-cols-2 gap-4 my-10">
                            <BucketItemCard />
                            <BucketItemCard />
                            <BucketItemCard />
                            <BucketItemCard />
                        </div>
                        <div>
                            <button className="btn btn-submit">Load More</button>
                        </div>
                    </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Bucket;