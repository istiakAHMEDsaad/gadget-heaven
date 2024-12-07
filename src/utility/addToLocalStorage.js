import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getAddToCartList = () => {
    const addToCartListStr = localStorage.getItem('add-cart');

    if (addToCartListStr) {
        const storedList = JSON.parse(addToCartListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToCartList = (product_id) => {
    const storedList = getAddToCartList();
    if (storedList.includes(product_id)) {
        toast.warn('Already Added', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log(product_id, 'Already added');
    } else {
        storedList.push(product_id);
        const addToCartListStr = JSON.stringify(storedList);
        localStorage.setItem('add-cart', addToCartListStr);
        toast.success('Added Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
};

const getAddToWishList = () => {
    const addToWishListStr = localStorage.getItem('add-wish');

    if (addToWishListStr) {
        const storedList = JSON.parse(addToWishListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToWishList = (product_id) => {
    const storedList = getAddToWishList();
    if (storedList.includes(product_id)) {
        toast.warn('Already Added', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        console.log(product_id, 'Already added');
    } else {
        storedList.push(product_id);
        const addToWishListStr = JSON.stringify(storedList);
        localStorage.setItem('add-wish', addToWishListStr);
        toast.success('Added Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
};

/* const getCartLength = localStorage.getItem('add-cart');
  const myCartLength = JSON.parse(getCartLength.length); */

export { addToCartList, addToWishList, getAddToCartList, getAddToWishList };