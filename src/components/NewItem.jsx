import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'

class NewItem extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container px-10 my-10">
                    <div class="grid grid-cols-3 gap-4">
                        <form>
                        <div className="form-group">
                    <label htmlFor="" className="text-sm font-bold text-gray-600">Date in the future</label>
                        <input type="email" className="border rounded-md w-80 p-2 border border-gray-300 block mx-auto  mt-1" required/> 
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="" className="text-sm font-bold text-gray-600">Title</label>
                        <input type="password" className="border rounded-md w-80 p-2 border border-gray-300 block mx-auto  mt-1" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-sm font-bold text-gray-600">Details</label>
                        <input type="password" className="border rounded-md w-80 p-24 border border-gray-300 block mx-auto mt-1" required/>
                    </div>
                    <div className="form-group">
                        {/* <button type="submit" className="btn btn-submit">save</button> */}
                        <Link to="/bucket" className="btn btn-submit">save</Link>
                    </div>
               

                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewItem;