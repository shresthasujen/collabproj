import class1 from "../assets/img/pet6.jpg";

import class2 from "../assets/img/pet1.jpg";
import class3 from "../assets/img/pet2.jpg";
import class4 from "../assets/img/pet3.jpg";
import class5 from "../assets/img/pet4.jpg";
import class6 from "../assets/img/pet5.jpg";
import user from "../assets/img/user.jpg";

const Classes = () => {
  return (
    <div class="container-xxl py-5" id="classes">
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 class="mb-3">Popular Pets now</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="classes-item">
              <div class="bg-light mx-auto p-3">
                <img class="img-fluid " src={class1} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  White Rabbits
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 class=" mb-1" id="goldtext">
                        Brown Cats
                      </h6>
                      <small>Teacher</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  >
                    Adopt
                  </span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class="mb-1">
                        Age:
                      </h6>
                      <small>2 months</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>rabbit</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity</h6>
                      <small>2</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="classes-item">
              <div class="bg-light  mx-auto p-3">
                <img class="img-fluid " src={class2} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  Brown Cats{" "}
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 id="goldtext" class=" mb-1">
                        Jhon Doe
                      </h6>
                      <small>New Shelter</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  >
                    Adopt
                  </span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class="mb-1">
                        Age:
                      </h6>
                      <small>3 months</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>Cat</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity:</h6>
                      <small>1</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="classes-item">
              <div class="bg-light mx-auto p-3">
                <img class="img-fluid " src={class3} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  Serbian Hamster
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 class="mb-1" id="goldtext">
                        Jhon Doe
                      </h6>
                      <small>Ktm shelter</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  >
                    Adopt
                  </span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class=" mb-1">
                        Age:
                      </h6>
                      <small>1 months</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>Hamster</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity</h6>
                      <small>2</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="classes-item">
              <div class="bg-light  mx-auto p-3">
                <img class="img-fluid " src={class4} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  Foreign Dogs
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 id="goldtext" class=" mb-1">
                        Jhon Doe
                      </h6>
                      <small>Pkr Shelter</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  >
                    Adopt
                  </span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class=" mb-1">
                        Age:
                      </h6>
                      <small>3-5 years</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>Dogs</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity</h6>
                      <small>4</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="classes-item">
              <div class="bg-light  mx-auto p-3">
                <img class="img-fluid" src={class5} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  Pomerian Dogs
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 id="goldtext" class=" mb-1">
                        Jhon Doe
                      </h6>
                      <small>New Shelter</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  ></span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class=" mb-1">
                        Age:
                      </h6>
                      <small>1-2 months</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>Dog</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity</h6>
                      <small>2</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="classes-item">
              <div class="bg-light  mx-auto p-3">
                <img class="img-fluid " src={class6} alt="" />
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">
                  All pet animals
                </a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img
                      class="rounded-circle flex-shrink-0"
                      src={user}
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                    />
                    <div class="ms-3">
                      <h6 id="goldtext" class=" mb-1">
                        Jhon Doe
                      </h6>
                      <small>Pet shelter</small>
                    </div>
                  </div>
                  <span
                    id="gold"
                    class=" text-white rounded-pill py-2 px-3"
                    href=""
                  >
                    Adopt
                  </span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 id="goldtext" class=" mb-1">
                        Age:
                      </h6>
                      <small>4-5 years</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Type</h6>
                      <small>All</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Quantity</h6>
                      <small>6</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
