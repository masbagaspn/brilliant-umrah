import PropTypes from "prop-types";
import clsx from "clsx";

const Link = ({ className }) => {
  return (
    <div>
      <a
        href="https://gass.co.id/cta"
        target="_blank"
        style={{
          zIndex: 9999,
        }}
        className={clsx(
          "fixed bottom-6 w-fit h-fit text-sm uppercase px-4 py-2 bg-blue-primary text-blue-secondary rounded-full transition",
          className
        )}
        rel="noreferrer"
      >
        Hubungi Kami
      </a>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
};

export default Link;
