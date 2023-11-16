
const CoverOverlay = ({image, title, description}) => {
    return (
        <div className="hero h-[90vh] px-4 md:px-6 lg:px-8" style={{backgroundImage: `url("${image}")`}}>
            <div className="hero-overlay bg-stone-950 bg-opacity-50 md:w-4/5 max-w-screen-xl max-h-72"></div>
            <div className="hero-content text-center text-white">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-4xl lg:text-5xl font-bold uppercase font-cinzel">{title}</h1>
                    <p className="font-medium text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CoverOverlay;