import { Button, Delilas, FlexStyleVer } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import { useSelector } from "react-redux";
import { ButtonLink } from "../styles";
import CurrentlyBorrowedBooks from "./CurrentlyBorrowedBooks";
import Sellector from "./Sellector";

const DetailedIteam = () => {
  const products = useSelector((state) => state.products);

  let productSlug = useParams().productSlug;
  const product = products.find((product) => product.slug === productSlug);
  if (typeof product === "undefined") return <Redirect to="/members" />;

  const booksNum = (membership) => {
    if (membership === "platinum") return 5;
    if (membership === "gold") return 3;
    if (membership === "silver") return 3;
  };

  const isEigible = () => {
    if (product.currentlyBorrowedBooks.length >= booksNum(product.membership))
      return <p>Not Allowed To Borrow Pleas Upgrade your Membership</p>;
    else return <Sellector product={product} />;
  };

  return (
    <>
      <FlexStyleVer>
        <Delilas src={product.image} />

        <p>
          {" "}
          name : {product.firstName} {product.lastName}{" "}
        </p>
        <p> Membership : {product.membership}</p>
        <p> Currently Borrowed Books: </p>
        {product.currentlyBorrowedBooks.length === 0 ? (
          "No Borrowed Books"
        ) : (
          <CurrentlyBorrowedBooks product={product} />
        )}

        {isEigible()}

        <DeleteButton variant="outline-primary" productID={product.id} />
      </FlexStyleVer>
      <ButtonLink to={`/members/${product.slug}/edit`}>
        {" "}
        <Button>Edit Member</Button>
      </ButtonLink>
    </>
  );
};
export default DetailedIteam;
