import { useQuery } from "@tanstack/react-query";
import SectionTittle from "../../Components/SectionTittle";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { format } from "date-fns";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="text-center py-20">
        <span className="loading loading-spinner text-yellow-600 text-3xl"></span>
      </div>
    );
  }

  return (
    <div className="w-full px-4 md:px-10 py-10 overflow-hidden">
      <SectionTittle heading="PAYMENT HISTORY" subHeading="At a Glance!" />

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">
          Total Payments: {payments.length}
        </h2>

        {/* Prevent sidebar breaking */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[800px] w-full text-left text-sm md:text-base">
            <thead>
              <tr className="bg-yellow-600 text-white">
                <th className="py-4 px-6 whitespace-nowrap">EMAIL</th>
                <th className="py-4 px-6 whitespace-nowrap">TOTAL PRICE</th>
                <th className="py-4 px-6 whitespace-nowrap">TRANSACTION ID</th>
                <th className="py-4 px-6 whitespace-nowrap">PAYMENT DATE</th>
                <th className="py-4 px-6 whitespace-nowrap">PAYMENT STATUS</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-4 px-6">{payment.email}</td>
                  <td className="py-4 px-6">${payment.price.toFixed(2)}</td>
                  <td className="py-4 px-6">{payment.transactionId}</td>
                  <td className="py-4 px-6">
                    {format(new Date(payment.date), "MMMM dd, yyyy")}
                  </td>
                  <td className="py-4 px-6 capitalize">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
