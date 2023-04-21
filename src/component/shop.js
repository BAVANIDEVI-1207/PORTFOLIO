import React, { useState } from 'react';

const DRESS_ITEMS = [
  { name: 'shirts', price: 2.5 },
  { name: 'pants', price: 3.5 },
  { name: 'Tshirt', price: 3.4 },
  { name: 'Kurits', price: 3.1 },
]

const PASTRY_ITEMS = [
  { name: 'Cakes', price: 2.5 },
  { name: 'Cookie', price: 4.5 },
  { name: 'Chocolates', price: 1.55 },
  { name: 'Rolls', price: 2.3 },
];

function MenuItem({ name, price, onAddToCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

function MenuSection({ title, items, onAddToCart }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          onAddToCart={() => onAddToCart(item)}
        />
      ))}
    </div>
  );
}

function CartItem({ name, price }) {
  return (
    <div>
      <span>{name}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}

function Cart({ items }) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Cart</h3>
      {items.map(item => (
        <CartItem key={item.name} name={item.name} price={item.price} />
      ))}
      <h4>Total: ${totalPrice.toFixed(2)}</h4>
    </div>
  );
}

function Day3() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  return (
    <div>
      <header>
    
        <img id='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtpoNpahiDO4N9k89QM-WOJIbDaBSi71LWA&usqp=CAU' width={250} height={200}></img>
        <p>PURCHASE MOOD</p>
      </header>
      <nav>
        <ul>
          <ui><a href="#dress">DRESS</a></ui>
          <br></br>
          <br></br>
          <ui><a href="#pastries">Pastries</a></ui>
        </ul>
      </nav>
      <main>
        <MenuSection title="Dress" items={DRESS_ITEMS} onAddToCart={addToCart} />
        <MenuSection title="Pastries" items={PASTRY_ITEMS} onAddToCart={addToCart} />
        <Cart items={cartItems} />
      </main>
    </div>
  );
}

export default Day3;
