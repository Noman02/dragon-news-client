import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import CarouselBrand from "../CarouselBrand/CarouselBrand";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const RightSideNav = () => {
  const { logInWithPopup } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    logInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogle}
          className="mb-3"
          variant="outline-primary"
        >
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item>Terms and conditions.</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <CarouselBrand></CarouselBrand>
      </div>
    </div>
  );
};

export default RightSideNav;
