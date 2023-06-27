import style from "./Banner.module.css";

function Banner({ image }) {
  return (
  <div 
    className={style.banner}
    style={{ backgroundImage: "url('/img/banner-${image}.png')" }}
    >
      
  </div>
  );
}        

export default Banner;
