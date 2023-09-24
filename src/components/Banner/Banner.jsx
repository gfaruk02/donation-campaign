

const Banner = () => {
    return (
        <div>
             <div className="hero min-h-screen -mt-24" style={{backgroundImage: 'url(https://i.ibb.co/nzQ1w2C/Healthcare-14176.jpg)'}}>
                <div className="hero-overlay bg-white bg-opacity-95 "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Banner;