import { useEffect, useState } from "react";
import WishListedItem from "../WishListedItem/WishListedItem";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const Wishlist = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wish-list")) || [];
        setItems(storedWishlist);
    }, []);

    return (
        <div className="w-[90%] xl:w-[80%] mx-auto py-8 sm:py-10 lg:py-12 space-y-6">
            <Helmet>
                <title>Wishlist | Gadget Heaven</title>
            </Helmet>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-left">Wishlist</h3>
            {
                items.length === 0 ? 
                <div className="w-full min-h-screen 2xl:min-h-[40rem] flex flex-col items-center justify-center">
                    <h1 className="text-3xl/normal sm:text-4xl/normal lg:text-5xl/normal font-bold text-center text-red-600">There is no item in the wishlist.</h1>
                </div> :
                items.map(item => <WishListedItem key={item.product_id} product={item} setItems={setItems}></WishListedItem>)
            }
        </div>
    );
};

Wishlist.propTypes = {
    setCartItems: PropTypes.func,
}

export default Wishlist;