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

                      <div class="form-floating my-3">
                        <input
                          type="address"
                          class="form-control border-0"
                          id="address"
                          placeholder="Address"
                        />
                        <label for="address">Your Address</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="pan"
                          class="form-control border-0"
                          id="pan"
                          placeholder="pan"
                        />
                        <label for="pan">Pan no.</label>
                      </div>
                    </div>
                    <div class="col-">
                      <div class="form-floating my-3">
                        <input
                          type="text"
                          class="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Password</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control border-0"
                          id="confirm"
                          placeholder="confirm"
                        />
                        <label for="confirm">Confirm Password</label>
                      </div>
                    </div>

                    <div class="col-12">
                      <Link
                        to="/Success"
                        className=" btn btn-primary  px-4 my-4"
                      >
                        Signup
                      </Link>
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
