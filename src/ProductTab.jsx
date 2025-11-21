import Products from "./Products.jsx";

function ProductTab(){
    let options = ["Ram","krushna","hari"];
    let options2 = {a: "hi-tech", b:"durable", c:"fast"};
    return(
    <>
    <Products title="phone" price={30000}/>
    <Products title="laptop" price={40000}/>
    <Products title="pen" price={10}/>
    </>
    );
}

export default ProductTab;