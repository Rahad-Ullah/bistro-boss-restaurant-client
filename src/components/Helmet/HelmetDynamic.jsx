import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const HelmetDynamic = ({title}) => {
    const location = useLocation()
    const currentPage = location.pathname.split(`/`)

    return (
        <Helmet>
            <title>Bistro Boss | {title ? `${title}` : `${currentPage[1].toLocaleUpperCase()}`}</title>
        </Helmet>
    );
};

export default HelmetDynamic;