import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'


function BucketItem() {
    return (
        <div>
            <Navbar />
            <div className="container px-10 my-10">
                <h3 className="page-title">
                    Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De.
                </h3>
                <span className="page-date">20/05/2025</span>

                <div className="page-content">
                    <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
                    </p>
                    <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
                    </p>
                    <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
                    </p>
                </div>
                <div className="page-actions">
                    <Link to="/edit-item" className="btn bg-green-400 text-center mr-4">Edit</Link>
                    <Link to="/bucket" className="btn bg-red-400 text-center">Delete</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BucketItem
