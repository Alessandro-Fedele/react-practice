import React from 'react';

const ProductCard = (props) =>
{

    // Con lo spread operator è ottimo usare la decostruzione dell'oggetto per prendere le props
    const { nome, img, alt, price, colore } = props;

    return (
        // Adesso invece di usare props. posso passare direttamente le chiavi che mi occorrono che ho messo a riga 7

        <div>
            <h3>{nome}</h3>
            <img src={img} alt={alt} />
            <h4>Price: {price}</h4>
            <button>Acquista</button>
            <p>Extra: {props.children}</p>
        </div>

        // Destrutturare è esattamente uguale a sotto riga 20, posso fare in entrambi i modi, è solo un modo per leggerlo meglio
        // <div>
        //     <h3>{props.nome}</h3>
        //     <img src={props.img} alt={props.alt} />
        //     <h4>Price: {props.price}</h4>
        //     <button>Acquista</button>
        // </div>
    );
};

export default ProductCard;