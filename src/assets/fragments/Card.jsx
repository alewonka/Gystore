const Card = (props) => {
  const { children } = props;
  return <div className="card w-96 bg-base-100 shadow-xl">{children}</div>;
};

const Header = () => {
  return (
    <figure className="px-10 pt-10">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
  );
};

const Body = (props) => {
  const { children, description } = props;
  return (
    <div className="card-body items-center text-center">
      <h2 className="card-title">{children}</h2>
      <p>{description}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;
