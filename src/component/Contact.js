const Contact = () => {
  return (
    <>
      <h1 class="text-center justyfy-content-center pt-5 l-1 ">Contact<span class="text-danger">Us</span></h1>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258704.16718809522!2d72.31870707104699!3d22.814324623877052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f3d1abd771%3A0xea620d5fb4d0e188!2sK-Lounge!5e0!3m2!1sen!2sin!4v1732707091553!5m2!1sen!2sin" width="600" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-100"></iframe>
          </div>
          <div className="col-md-6">
            <h1 className="text-center">Customer Review</h1>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Customer Name</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Customer Email</label>
                <input type="password" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Contact No</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Pincode</label>
                <input type="text" class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-info">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact; 