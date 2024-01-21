import { useState } from "react";
import FetchProducts from "./FetchProducts";
import SmallCard from "./SmallCard";

export default function ProductCards() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const isValidHttpUrl = (string) => {
    try {
      const newUrl = new URL(string);
      return newUrl.protocol === "http:" || newUrl.protocol === "https:";
    } catch (err) {
      return false;
    }
  };
  const onDataFetched = (data) => {
    setProductList(data);
    const createdCards = data.map((element) => createCard(element));
    setCards(createdCards);
    featuredCard(createdCards);
    displayCards(createdCards);
  };

  // useEffect(() => {
  //   const myCarousel = document.querySelector("#carouselFeatured");
  //   const carousel = new Carousel(myCarousel);
  // }, []);

  const createCard = (item) => {
    return (
      <SmallCard
        key={item.id}
        name={item.title}
        image={isValidHttpUrl(item.image) ? item.image : ""}
        description={item.description}
        price={item.price.toFixed(2)}
        category={item.category.toLowerCase()}
      />
    );
  };

  const displayCards = (cardArray) => {
    setCards(cardArray);
  };

  const featuredCard = (createdCards) => {
    let numbers = [
      Math.floor(Math.random() * 7),
      Math.floor(Math.random() * (13 - 8) + 8),
      Math.floor(Math.random() * (19 - 14) + 14),
    ];

    const featuredCards = numbers.map((index) => createdCards[index]);

    // const myCarousel = document.querySelector("#carouselFeatured");

    // for (let i = 0; i < 3; i++) {
    //   myCarousel.querySelector("#carousel-item" + i).innerHTML = "";
    //   myCarousel
    //     .querySelector("#carousel-item" + i)
    //     .appendChild(featuredCards[i]);
    // }
  };
  const addToCart = (itemName) => {
    console.log("Item added.");
    const selectedItem = productList.find((item) => item.title === itemName);
    if (selectedItem) {
      setCart((prevCart) => [...prevCart, selectedItem]);
      console.log(cart);
    }
  };

  console.log("ProductCards rendered")

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
      <FetchProducts onDataFetched={onDataFetched} />
      {cards}
    </div>
  );
}
