import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    
    const { data: payments=[]} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })
    console.log(payments);

    return (
        <div className="bg-stone-100 pb-16">
            <SectionTitle
                heading={'History'}
                subHeading={'Have sure'}
            ></SectionTitle>
            <div className="w-11/12 mx-auto p-12 bg-white">
                <div className="pb-8">
                    <h2 className="text-2xl font-cinzel font-bold">Total Payments: {payments.length}</h2>
                </div>
                <div>
                    {/* heading */}
                    <div className="grid md:grid-cols-12 justify-between py-7 px-6 bg-secondary rounded-t-2xl font-medium text-white text-sm">
                        <h4 className="md:col-span-2">DATE</h4>
                        <h4 className="md:col-span-6">EMAIL</h4>
                        <h4 className="md:col-span-2">AMOUNT</h4>
                        <h4 className="md:col-span-2">STATUS</h4>
                    </div>
                    {/* body */}
                    <div className="text-sm">
                        {
                            payments.map((payment) => <div 
                                key={payment._id}
                                className="grid md:grid-cols-12 justify-between items-center py-6 px-6 font-medium border-t">
                                <h4 className="md:col-span-2">{payment.date.split('T')[0]}</h4>
                                <h4 className="md:col-span-6">{payment.email}</h4>
                                <h4 className="md:col-span-2">
                                    ${payment?.price}
                                </h4>
                                <h4 className="md:col-span-2">
                                    {payment?.status}
                                </h4>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;