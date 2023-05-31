
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useCart = () => {
const {user, loading} = useAuth();
  const token = localStorage.getItem('access-token');  
const [axiosSecure] = useAxiosSecure()

const {  refetch, data: cart = [] } = useQuery({
  queryKey: ['carts', user?.email],
   enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    //   queryFn: async()=>{
    //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}` , {headers: {
    //       authorization: `bearer${token}`
    //     }})
    //               console.log(response.json())

    //     return response.json()

    // },
    queryFn: async () => {
    if(user?.email){
      const res = await axiosSecure.get(`/carts?email=${user?.email}`)
      // console.log('res from axios', res.data)
      return res.data;
    }
    return []
  },
  })

  return [cart,  refetch]
}

export default useCart;