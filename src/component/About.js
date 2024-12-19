import images from '../component/images/pexels-cottonbro-3738029.jpg'
import images1 from '../component/images/pexels-valeriiamiller-3948028.jpg'

const About = () => {
    return (
        <>
            <h1 class="text-center justyfy-content-center bg-0 p-5 l-1">About <span class="text-danger">Us</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Work & Office Attire</h4><br></br>
                        <h1>A few words<br></br>about us</h1><br></br>
                        <p>Elevate your workwear with our Professional Pinstripe Blazers Collection,
                            where tailored sophistication meets modern confidence for a powerfully polished office look.
                            Shopping is an activity in which a customer browses the available goods or services presented by one or more
                            retailers with the potential intent to purchase a suitable selection of them.
                        </p>
                        <button type="button" class="btn btn-primary">Shop Now</button>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <img src={images} class="img-fluid img-style1" alt=""></img>
                    </div>
                    <div className="col-md-4 mt-4 mt-md-0">
                        <img src={images1} class="img-fluid img-style1" alt=""></img>


                    </div>
                </div>
            </div>
        </>
    );
}
export default About;     