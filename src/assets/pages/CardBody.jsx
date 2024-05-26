import Card from "../fragments/Card";

const Product = [
  {
    id: 1,
    Judul: "SepatuImport",
    Descrip:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, numquam. Ullam quisquam placeat nihil voluptates",
  },
  {
    id: 2,
    Judul: "SepatuImport",
    Descrip:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, numquam. Ullam quisquam placeat nihil voluptates",
  },
];
const CardBody = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-slate-600">
        <div className="flex flex-wrap items-center justify-center mt-6 gap-4">
          {Product.map((m) => (
            <Card>
              <Card.Header></Card.Header>
              <Card.Body description={m.Descrip}>{m.Judul}</Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardBody;
