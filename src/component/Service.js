import images from '../component/images/offers.png'
import images1 from '../component/images/shopping-bag.png'
import images2 from '../component/images/truck.png'
import images3 from '../component/images/customer-service.png'




const Service = () => {
    return (
        <>
            <h1 class="text-center justyfy-content-center p-5 l-1 fs-1">Services <span class="text-danger"></span></h1>
            <h1 className="text-center">Shopping is an activity in which a goods or services</h1>
            <p className="text-center">Shopping Agent is a third party between you and store/seller to solve language,
                payment and logistics problems.<br></br> It's especially helpful when you are buying products</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div class="card align-items-center h-100">
                            <img src={images} class="img-fluid img-style2 " alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Exchange Offer</h5>
                                <p class="card-text">Shopping Agent is a third party between you and store/seller to solve language,.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-md-0">
                        <div class="card align-items-center h-100">
                            <img src={images1} class="img-fluid img-style2" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Online Service</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
                        <div class="card align-items-center h-100">
                            <img src={images2} class="img-fluid img-style2" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Fast Delivary</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-4 mt-lg-0">
                        <div class="card align-items-center h-100">
                            <img src={images3} class="img-fluid img-style2" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">Customer Care</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;   