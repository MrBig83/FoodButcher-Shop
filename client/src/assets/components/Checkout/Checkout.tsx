// import { useContext } from 'react';
// import { CartContext } from "../../../context/CartContext";

// const Checkout = () => {

// const { responseSnippet } = useContext(CartContext);
  
// const tempDiv = document.createElement('div');
// tempDiv.innerHTML = responseSnippet;

// const paysonContainer = tempDiv.querySelector<HTMLDivElement>('#paysonContainer');
// const url: string = paysonContainer?.getAttribute('url')  ?? 'default-url';
// const paysonCheckoutURL = url

// const redirectToPaysonCheckout = () => {
  
//     console.log(paysonCheckoutURL);
    
//     window.location.href = paysonCheckoutURL;
//   };




// return (
//     <>
//     {/* <button onClick={redirectToPaysonCheckout}>Proceed to Payson Checkout</button> */}
    
//     </>
// )

// }

// function Checkout({ htmlSnippet }: { htmlSnippet: string }) {
//   useEffect(() => {
//     const container = document.createElement('div');
//     container.innerHTML = htmlSnippet;
//     const script = container.querySelector('script');

//     if (script) {
//       const scriptElement = document.createElement('script');
//       scriptElement.src = script.src;
//       scriptElement.type = 'text/javascript';
//       container.appendChild(scriptElement);
//     }

//     const paysonContainer = container.querySelector('#paysonContainer');
//     if (paysonContainer) {
//       document.getElementById('checkoutDiv')?.appendChild(paysonContainer);
//     }
//   }, [htmlSnippet]);

//   return <div id="checkoutDiv" />;
// }

// export default Checkout;
