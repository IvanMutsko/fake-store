import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

const Footer = () => {
  return (
    <section>
      Footer
      <Link to={ROUTES.HOME}>Link at home</Link>
      <div>Socials</div>
    </section>
  );
};

export default Footer;
