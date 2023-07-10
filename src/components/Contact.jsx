import React from "react";
import { FaMap } from "react-icons/fa";

const Contact = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container" id="contacts">
        <div
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
        </div>
        <div class="row g-4 mb-5">
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
            </div>
            <h6>Location, City, Country</h6>
          </div>
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <i class="fa fa-envelope-open fa-2x text-primary"></i>
            </div>
            <h6>info@example.com</h6>
          </div>
          <div
            class="col-md-6 col-lg-4 text-center wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div
              class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: "75px", height: "75px" }}
            >
              <i class="fa fa-phone-alt fa-2x text-primary"></i>
            </div>
            <h6>+012 345 6789</h6>
          </div>
        </div>
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <p class="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                  <a href="https://freewebsitecreate.net/">Download Now</a>.
                </p>
                <form>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
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
                    <div class="col-12">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control border-0"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label for="subject">Subject</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div class="position-relative h-100">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1Ud5DRnqhKifdeHQ0wjENsGgLp_0&hl=en_US&ehbc=2E312F"
                  width="640"
                  height="480"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
