export const mapDispatchToProps = (dispatch) => {
    return {
        addProdToCart: (item) => {
            dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload: item
            })
        },
        removeProdFromCart: (item) => {
            dispatch({
                type: 'REMOVE_PRODUCT_FROM_CART',
                payload: item
            })
        },
        addProdToWishList: (item) => {
            dispatch({
                type: 'ADD_PRODUCT_TO_WISHLIST',
                payload: item
            })
        },
        removeProdFromWishList: (item) => {
            dispatch({
                type: 'REMOVE_PRODUCT_FROM_WISHLIST',
                payload: item
            })
        }
    }
}

// const addItemToCart = (item) => {
//     console.log(item);
//     return {
//         type: 'ADD_PRODUCT_TO_CART',
//         payload: item
//     }
// }
//
// const removeProdFromCart = (item) => {
//     console.log('rem');
//     return {
//         type: 'REMOVE_PRODUCT_FROM_CART',
//         payload: item
//     }
// }