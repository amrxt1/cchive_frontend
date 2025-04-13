import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ title, desc, to }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className=""
    >
      <Link to={to}>
        <h2 className="">{title}</h2>
        <p className="">{desc}</p>
      </Link>
    </motion.div>
  );
};

export default Card;
