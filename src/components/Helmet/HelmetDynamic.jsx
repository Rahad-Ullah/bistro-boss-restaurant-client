import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const HelmetDynamic = () => {
    const location = useLocation()
    const currentPage = location.pathname.split(`/`)
    return (
        <Helmet>
            <title>Bistro Boss | {`${currentPage[1].toLocaleUpperCase()}`}</title>
        </Helmet>
    );
};

export default HelmetDynamic;