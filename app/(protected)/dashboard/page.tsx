import PrivateRoute from "@/components/authentication/privateRoute";
import OfferTable from "@/sections/dashboard/components/offerTable/OfferTable";
import dynamic from "next/dynamic";
const DashboardView = dynamic(
  () => import("@/sections/dashboard/views/dashboard-view")
  // {
  //   ssr: false,
  // }
);

const Dashboard = async () => {
  return (
    <DashboardView>
      <OfferTable />
    </DashboardView>
  );
};

export default PrivateRoute(Dashboard);
