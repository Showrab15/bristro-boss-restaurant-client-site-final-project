import React from 'react';
import SectionTitle from '../../../components/SectionTtile/SectionTitle'
import { Helmet } from 'react-helmet-async';
const AddItem = () => {
    return (
        <div className="w-full">
            <Helmet><title>Bistro Boss || Dashboard || Add Item</title></Helmet>
            <SectionTitle
            subHeading={"What's New"}
            heading={"Ad An Item"}
            ></SectionTitle>

<div className="card-body mt-8 rounded-lg bg-[#F3F3F3]">
                <form >
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6  ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name='sellerEmail' placeholder="Seller Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='toyName' required placeholder="Toy Name" className="input input-bordered" />
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold">Toy Photo URL</span>
                            </label>
                            <input name="toyPhoto" type="text" placeholder="Toy Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <select className="text-input  input input-bordered" name="toyCategory"  >
                                <option value="Sports Car">Sports Car</option>
                                <option value="Police Cars">Police Car</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                            </select>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Price</span>
                            </label>
                            <input type="text" name='toyPrice' placeholder="$ Price" required className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='toyQuantity' placeholder="Available quantity" required className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='toyRating' placeholder="Rating" required className="input input-bordered" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <textarea className="p-4 caret-pink-500 input input-bordered" name="toyDetails" type="text" placeholder="Toy's Details" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811]">Add Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;