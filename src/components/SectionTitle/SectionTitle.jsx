
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:max-w-sm mx-auto mb-12 mt-16">
            <p className="text-secondary text-center mb-4">---{subHeading}---</p>
            <h2 className="text-4xl uppercase text-[#151515] py-5 border-y-4 text-center">{heading}</h2>
        </div>
    );
};

export default SectionTitle;