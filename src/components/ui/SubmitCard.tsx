import { Link } from "react-router-dom";

const SubmitCard = () => {
  return (
    <Link
      to="/"
      className="flex flex-col max-w-sm p-2 rounded-md border-2 border-gray-50/50 hover:border-polar-green-500"
    >
      <div>
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          asperiores ut nam autem architecto doloremque placeat numquam unde
          culpa ipsum?
        </p>
        <div className="flex items-center gap-1 justify-between">
          <div>
            <span className="font-bold text-sm">Date</span>:{" "}
            <span className="text-sm ml-1">country</span>
          </div>
          <div>
            <span className="font-bold text-sm">By</span>:{" "}
            <span className="text-sm ml-1">admin.email@email.com</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubmitCard;
