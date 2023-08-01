import style from "./Banner.module.css";

function Banner({ image }) {
  return (
  <div 
    className={style.banner}
    style={{ backgroundImage: `url('/img/${image}.png')` }}
    >
      
  </div>
  );
}        

export default Banner;
