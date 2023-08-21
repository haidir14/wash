import React from "react";
import Image from "next/image";

export const Home = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Image
            src="/carousel/1.jpg"
            width={1600}
            height={900}
            alt="carousel picture"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image
            src="/carousel/1.2.jpg"
            width={1600}
            height={900}
            alt="carousel picture"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image
            src="/carousel/1.3.jpg"
            width={1600}
            height={900}
            alt="carousel picture"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image
            src="/carousel/1.4.jpg"
            width={1600}
            height={900}
            alt="carousel picture"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="columns-3">
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={
                    "https://img.freepik.com/free-vector/detailed-car-wash-service-concept-illustration_23-2149038677.jpg"
                  }
                  width={300}
                  height={300}
                  alt="Fiture"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-info">Fiture 1!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={
                    "https://img.freepik.com/free-vector/detailed-car-wash-service-concept-illustration_23-2149038677.jpg"
                  }
                  width={300}
                  height={300}
                  alt="Fiture"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-info">Fiture 1!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src={
                    "https://img.freepik.com/free-vector/detailed-car-wash-service-concept-illustration_23-2149038677.jpg"
                  }
                  width={300}
                  height={300}
                  alt="Fiture"
                />
              </figure>
              <div className="card-body items-center text-center">
                <div className="card-actions">
                  <button className="btn btn-info">Fiture 1!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
