import { useState } from "react";
import { Button } from "../UI/btn/Btn";
import "./Footer.scss";

interface DataFooter {
  title: string;
  description: string;
  btn_text: string;
  text: string;
  link: string;
}

const UIfooter = ({
  title,
  description,
  btn_text,
  text,
  link,
}: DataFooter) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container text-center">

        <h1 className="fw-bold mb-2">{title}</h1>
        <h3 className="text-secondary mb-4">{description}</h3>

        <Button
          btn_style="primary"
          onClick={() => setIsVisible(v => !v)}
          className="mb-4"
        >
          {btn_text}
        </Button>

        {isVisible && (
          <div className="content mt-3">
            <p className="mx-auto text-light" style={{ maxWidth: 600 }}>
              {text}
            </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mt-2"
            >
              GitHub Profile
            </a>
          </div>
        )}

      </div>
    </footer>
  );
};

export default UIfooter;
