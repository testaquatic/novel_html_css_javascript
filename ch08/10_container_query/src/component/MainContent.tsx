export type Product = {
  title: string;
  price: number;
  description: string;
  image?: string;
};
export type MainContentProps = {
  productData: Product[];
};

function MainContent({ productData }: MainContentProps) {
  return (
    <div className="main-content">
      <div className="product-grid">
        {productData.map((item, index) => {
          return (
            <div className="product-card" key={index}>
              <div className="product-image">{item.image}</div>
              <div className="product-info">
                <div className="product-title">{item.title}</div>
                <div className="product-price">
                  {`${item.price.toLocaleString()}원`}
                </div>
                <div className="product-description">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainContent;
