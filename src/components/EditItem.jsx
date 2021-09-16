import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'

class EditItem extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container px-10 my-10">
                    <div class="grid grid-cols-3 gap-4">
                        <form>
                        <div className="form-group">
                    <label htmlFor="" className="text-sm font-bold text-gray-600">Date in the future</label>
                        <input type="text" className="border rounded-md text-xs w-80 p-2 border border-gray-300 block mx-auto  mt-1" required
                             value="20/07/2050"
                        /> 
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="" className="text-sm font-bold text-gray-600">Title</label>
                        <input type="text" className="border rounded-md text-xs w-80 p-2 border border-gray-300 block mx-auto  mt-1" required
                            value="Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero’s 1scentury BC text De Finibus Bonorum et Malorum."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-sm font-bold text-gray-600">Details</label>
                        <textarea name="" id="" cols="30" rows="10" className="border rounded-md text-xs w-80 p-2 border border-gray-300 block mx-auto mt-1">
                        It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, 
                            “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. 
                            Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” 
                            Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                             Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, 
                             “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. 
                             “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, 
                             which is why at a glance it looks pretty real. Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, 
                             “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real. Until, the prevailing view assumed lorem ipsum was born as a nonsense text. “It’s not Latin, though it looks like it, and it actually says nothing,” 
                             Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.
                        </textarea>
                    </div>
                    <div className="form-group">
                        {/* <button type="submit" className="btn btn-submit">update</button> */}
                        <Link to="/bucket" className="btn btn-submit">update</Link>
                    </div>
               

                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default EditItem;