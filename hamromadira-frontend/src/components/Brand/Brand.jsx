
import "./brand.css";
import arnaLogo from "../../assets/brand_images/arna-ad.png";
import tuborgLogo from "../../assets/brand_images/tuborg-ad.png";
import ggLogo from "../../assets/brand_images/g&g-ad.png";
import khukriLogo from "../../assets/brand_images/khukri-ad.png";
// import cokeLogo from "../../assets/brand_images/cocacola-logo.jpg";



const Brand = () => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3002/brands/").then((response) => {
  //     setImages(response.data);
  //   });
  // }, []);
  const brands = [
    {
      image: arnaLogo,
      title: "arna beer ad",
    },
    {
      image: tuborgLogo,
      title: "tuborg beer"
    },
    {
      image: ggLogo,
      title: "g&g ad",
    },
    {
      image: khukriLogo,
      title: "khukri ad",
    },
   
  ];
  return (
    <div className="brand-container">
      <div className="stock-product">
        <img src="images/stockProduct-logo.png" className="brand-logo" alt="" />
        <p className="stockProduct">Brands</p>
      </div>
      <div className="brands">
        {brands.map((item) => {
          return (
            <>
              <img src={item.image} alt="" />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Brand;
