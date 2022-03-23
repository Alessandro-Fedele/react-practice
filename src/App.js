import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import ProductCard from "./ProductCard";

function App()
{

  const primoProdotto = {
    nome: 'Macbook',
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wi :600&he :315&fm :jpeg&qlt=95&.v=1604347427000",
    alt: "Macbook Pro",
    price: "$1200",
  };

  const secondoProdotto = {
    nome: 'Iphone',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000',
    alt: "Iphone",
    price: "$800",
  };

  // Array
  const nomi = ['Marco', 'Silvia', 'Mario', 'Donatella', 'Mara', 'Sara'];
  // Loop di un array n.1
  // const nuoviNomi = nomi.map(nome =>
  // {
  //   return <h4>{nome}</h4>;
  // });

  // Array di oggetti
  const flowers = [
    {
      nome: 'Geranio',
      colore: 'giallo',
      price: '1.50',
    },
    {
      nome: 'Gardenia',
      colore: 'arancione',
      price: '1.80',
    },
    {
      nome: 'Tulipano',
      colore: 'bianco',
      price: '1.90',
    },
    {
      nome: 'Rosa',
      colore: 'rossa',
      price: '1.20',
    },
  ];

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Componente1></Componente1>
      <Componente2></Componente2>
      <ProductCard nome={primoProdotto.nome} img={primoProdotto.img} alt={primoProdotto.alt} price={primoProdotto.price}></ProductCard>

      {/* Lo spread operator consente di non passare i dati uno per uno ma tutti insieme, poi le props li scelgono in base al nome */}
      <ProductCard {...secondoProdotto}>
        <p>Questa è una nota extra, che sta solo in questo componente ed è fatta con props.children.</p>
      </ProductCard>

      {/* Loop di array  */}
      {/* n.1 */}
      {/* <section>{nuoviNomi}</section> */}


      {/* Loop di array di oggetti */}
      <section>
        <h1>Flowers</h1>
        {flowers.map((fiore, index) =>
        // Invece di usare l'index che protebbe cambiare sarebbe opposrtuno aggiungere manualmente un id ad ogni elemento, proprio come un database
        {
          // console.log(fiore);
          return <ProductCard key={index} {...fiore}></ProductCard>;
        })}
      </section>
    </div>
  );
}

export default App;
