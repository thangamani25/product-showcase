import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <header className="store-header">
        <p className="eyebrow">Small finds, big upgrades</p>
        <h1>Product Showcase</h1>
        <Greeting name="Shopper" />
        <p className="intro">Thoughtful everyday gear, ready for your setup.</p>
      </header>

      <section className="product-section" aria-labelledby="featured-heading">
        <div className="section-heading">
          <h2 id="featured-heading">Featured products</h2>
          <span>2 picks</span>
        </div>
        <div className="cards">
          <ProductCard title="Mechanical Keyboard" price={79} inStock={true} />
          <ProductCard title="Wireless Mouse" price={39} inStock={false} />
        </div>
      </section>
    </main>
  );
}
