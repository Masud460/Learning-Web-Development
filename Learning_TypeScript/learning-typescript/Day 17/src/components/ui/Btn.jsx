import { Link } from "react-router-dom";

function Btn({
  btnText,
  textSize,
  paddingX,
  clickHandler,
  classes,
}) {
  return <Link
    className={
      `text-white
       bg-blue-500
       rounded-md
       text-${textSize} 
       py-3
       px-${paddingX} 
       font-semibold
       ${classes}`
    }
    onClick={() => clickHandler()}>{btnText}</Link>;
}

export default Btn;
