import { FC } from "react";
import Layout from "../components/Layout/Layout";

import MaintenanceAlert from "../components/Maintenance/MaintenanceAlert";

const Docs: FC = () => {
  return (
    <Layout title="Documentation">
      <h1>Documentation</h1>
      <MaintenanceAlert />
    </Layout>
  );
};

export default Docs;
