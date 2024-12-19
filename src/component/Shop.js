import images from '../component/images/pexels-solliefoto-298864.jpg'
import images1 from '../component/images/pexels-borevina-1778412 (1).jpg'
import images2 from '../component/images/pexels-cottonbro-3738029.jpg'
import images3 from '../component/images/pexels-valeriiamiller-3948028.jpg'


const Shop = () => {

    return (
        <>

            <h1 class="text-center justyfy-content-center p-5 l-1">Shop <span class="text-danger">Fow</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div class="card" >
                            <img src={images} class="img-fluid img-style1" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Product NO 1</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-md-0">
                        <div class="card">
                            <img src={images1} class="img-fluid img-style1" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Product No 9</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
                        <div class="card">
                            <img src={images2} class="img-fluid img-style1" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Product No 10</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
                        <div class="card">
                            <img src={images3} class="img-fluid img-style1" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Product No 5</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Shop;     