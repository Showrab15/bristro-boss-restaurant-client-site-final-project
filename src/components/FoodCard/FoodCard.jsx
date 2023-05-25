import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price , recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-800 rounded-lg text-white absolute right-0 mr-4 px-4">${price}</p>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline  border-0 border-b-4 border-b-amber-400">Add to Card </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;