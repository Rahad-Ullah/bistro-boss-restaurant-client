

const PageHeader = ({bgImage, title, subTitle}) => {
    return (
        <div className="hero min-h-screen px-4 md:px-6 lg:px-8 pt-20" style={{backgroundImage: `url("${bgImage}")`}}>
            <div className="hero-overlay bg-stone-950 bg-opacity-50 md:w-4/5 max-w-screen-xl max-h-72"></div>
            <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-4xl lg:text-5xl font-bold uppercase font-cinzel">{title}</h1>
                    <p className="uppercase font-cinzel font-semibold">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;