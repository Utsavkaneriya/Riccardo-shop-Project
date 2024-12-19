
import images from '../component/images/gucci.jpeg'
import images1 from '../component/images/clevin kliin.jpeg'
import images2 from '../component/images/killer.jpeg'
import images3 from '../component/images/lifestyle.jpeg'
import images4 from '../component/images/us polo.jpeg'
import images5 from '../component/images/zara.png'




const Logo = () => {
    return (
        <>
        <h1 class="text-center justyfy-content-center pt-2 l-1 ">Our<span class="text-danger">Brands</span></h1>
          <div className="container py-5">
           <div className="row">
            <div className="col-md-2">
            <img src={images} class="img-fluid img-style5" alt=""></img>
            </div>
            <div className="col-md-2">
            <img src={images1} class="img-fluid img-style5" alt=""></img>
            </div>
            <div className="col-md-2">
            <img src={images2} class="img-fluid img-style5" alt=""></img>
            </div>
            <div className="col-md-2">
            <img src={images3} class="img-fluid img-style5" alt=""></img>
            </div>
            <div className="col-md-2">
            <img src={images4} class="img-fluid img-style5" alt=""></img>
            </div>
            <div className="col-md-2">
            <img src={images5} class="img-fluid img-style5" alt=""></img>
            </div>
           </div>
          </div>
        </>
    );
}
export default Logo;     