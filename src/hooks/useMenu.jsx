import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
//     const [menu, setMenu] = useState([])
//  const [loading , setLoading] = useState(false)

//     useEffect(() => {
//         fetch('https://bristro-boss-restaurant-server-site-final-project.vercel.app/menu')
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data)
//                 setMenu(data)
//                 setLoading(false)
//             })
//     }, [])
const {data: menu = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
        const res = await fetch('https://bristro-boss-restaurant-server-site-final-project.vercel.app/menu');
        return res.json();
    }
})

return [menu, loading, refetch]
}


export default useMenu;