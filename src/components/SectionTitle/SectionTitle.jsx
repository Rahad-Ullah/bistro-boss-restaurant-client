
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:max-w-sm mx-auto pb-12 pt-16">
            <p className="text-secondary text-center mb-4">---{subHeading}---</p>
            <h2 className="text-4xl uppercase py-5 border-y-4 text-center">{heading}</h2>
        </div>
    );
};

export default SectionTitle;