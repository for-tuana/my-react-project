function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>İsim</th>
          <th>Fiyat</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Ara..." />
      <label>
        <input type="checkbox" /> Sadece stokta olan ürünleri göster
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  { category: "Meyveler", price: "₺10", stocked: true, name: "Elma" },
  { category: "Meyveler", price: "₺10", stocked: true, name: "Mandalina" },
  { category: "Meyveler", price: "₺20", stocked: false, name: "Portakal" },
  { category: "Sebzeler", price: "₺20", stocked: true, name: "Ispanak" },
  { category: "Sebzeler", price: "₺40", stocked: false, name: "Kabak" },
  { category: "Sebzeler", price: "₺10", stocked: true, name: "Börülce" },
];

export function Table() {
  return <FilterableProductTable products={PRODUCTS} />;
}
