import { Parallax } from 'react-parallax';

const CoverOverlay = ({image, title, description}) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={image}
            bgImageAlt="the menu"
            strength={-300}
        >
            <div className="hero h-[90vh] px-4 md:px-6 lg:px-8">
                <div className="hero-overlay bg-stone-950 bg-opacity-50 md:w-4/5 max-w-screen-xl max-h-72"></div>
                <div className="hero-content text-center text-white">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-4xl lg:text-5xl font-semibold uppercase font-cinzel">{title}</h1>
                        <p className="font-medium text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CoverOverlay;