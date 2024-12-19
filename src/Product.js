import images from '../src/component/images/pexels-cottonbro-3738029.jpg'
import images1 from '../src/component/images/pexels-markus-winkler-1430818-3812433 (2).jpg'
import images2 from '../src/component/images/pexels-ron-lach-8306371.jpg'





const Product = () => {
    return (
        <>

            <h1 class="text-center justyfy-content-center pt-5 l-1 ">Trending <span class="text-danger">Now</span></h1>

            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4">


                        <div class="card h-100">
                            <img src={images} class="img-fluid img-style4" alt=""></img>
                            <div class="card-body">
                                <h2 class="card-title">Product Name alex</h2>
                                <p class="card-text">$135.000</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div class="card h-100">
                            <img src={images1} class="img-fluid img-style4" alt=""></img>
                            <div class="card-body">
                                <h2 class="card-title">Product Name Jorden</h2>
                                <p class="card-text">$235.000</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <div class="card h-100">
                            <img src={images2} class="img-fluid img-style4" alt=""></img>
                            <div class="card-body">
                                <h2 class="card-title">Product Name Huai</h2>
                                <p class="card-text">$300.000</p>

                            </div>
                        </div>



                    </div>
                </div>
            </div>




        </>
    );
}
export default Product;   