import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
type Props = { text: string; href?: string; arrow?: boolean; type?: string };

const Button = (props: Props) => {
  const { text, href, arrow, type } = props;

  return (
    <Link href={href || "/"}>
      <button
        className={`cta ${arrow ? "px-12 gap-4" : "px-14"} group py-3 ${
          type === "block"
            ? "text-gray-100 bg-blue-700"
            : "bg-gray-100 text-blue-600"
        } 0 transition-all duration-300 font-medium text-sm hover:opacity-95 hover:scale-105 flex 
      items-center`}
      >
        {text}{" "}
        <span className="group-hover:translate-x-3 transition-all duration-300">
          {arrow ? <AiOutlineArrowRight /> : ""}
        </span>
      </button>
    </Link>
  );
};

export default Button;
