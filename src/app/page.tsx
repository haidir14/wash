import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/worker-washing-car-with-active-foam-car-wash_179755-10799.jpg?w=1380)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-4xl">Langsung Cuci Tanpa Ribet</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <div className="columns-3">
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10"></figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Monthly</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-warning">Subscrabe!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10"></figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Quarterly</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-warning">Subscrabe!</button>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="card shadow-xl">
              <figure className="px-10 pt-10"></figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Quarterly</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-warning">Subscrabe!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
