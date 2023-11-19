import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 h-screen">
            <h1 className="text-5xl text-primary font-semibold">404 Error</h1>
            <h4 className="text-lg font-medium text-neutral">Page Not Found</h4>
            <Link to={'/'} className="btn-normal">Go Home</Link>
        </div>
    );
};

export default Error404;