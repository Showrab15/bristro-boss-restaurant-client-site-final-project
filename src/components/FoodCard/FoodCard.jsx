import React from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {name, image, price , recipe, _id} = item;
const navigate = useNavigate();
const location = useLocation();
const {user} = useContext(AuthContext);

const [, refetch] = useCart()
const handleAddToCart = item =>{
  // console.log(item);
  if(user && user?.email){
    const cartItem ={menuItemId: _id, name, image, price, email: user.email}
    fetch('http://localhost:5000/carts', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      if(data.insertedId){
        refetch();
        Swal.fire(
          'Good job!',
          'Added cart succesfull!',
          'success'
        )
      }
    })
  }
  else{
    Swal.fire({
      text: "Please Login To Order The Food !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login Now'
    }).then((result) => {
      if (result.isConfirmed) {
      navigate('/login', {state: {from: location}})
      }
    })
  }
}
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-800 rounded-lg text-white absolute right-0 mr-4 px-4">${price}</p>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <p>{recipe}</p>
          <div className="card-actions">
            <button onClick={()=> handleAddToCart(item)} className="btn btn-outline  border-0 border-b-4 border-b-amber-400">Add to Card </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;