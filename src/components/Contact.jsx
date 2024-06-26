import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from React Router

const Contact = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container" id="contacts">
        {/* <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-3">Get In Touch</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div> */}
        <div class="row g-4 mb-5">
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <FaMapMarkerAlt />
            </div>
            <h6>Chakrapath, Kathmandu, Nepal</h6>
          </div>
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <IoMail />
            </div>
            <h6>petpals@gmail.com</h6>
          </div>
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <FaPhoneSquareAlt />
            </div>
            <h6>+012 345 6789</h6>
          </div>
        </div>
        <div class="bg-light rounded">
          <div class=" g-0">
            <div class="wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <p class="mb-4">Please fill up the form to signup updates. </p>
                <form>
                  <div class="row g-3">
                    <div class="col">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Password</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <button class="btn btn-primary mx-2 px-5" type="submit">
                        Login
                      </button>
                      <br></br>
                      <div className="mt-4">
                        <p>Do not have an account?</p>
                        <Link to="/Signup" className=" btn btn-primary  px-5 ">
                          Signup
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
