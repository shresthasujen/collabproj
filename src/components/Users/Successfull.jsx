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
                <h1 class="mb-4">Sign up Successfull !!!</h1>
                <Link to="/" className=" btn btn-primary  px-4 my-4">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
