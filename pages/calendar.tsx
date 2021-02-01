import { FC } from "react";
import { Calendar } from "antd";

import Layout from "../components/Layout/Layout";

import MaintenanceAlert from "../components/Maintenance/MaintenanceAlert";

const CalendarPage: FC = () => {
  return (
    <Layout title="Calendar" authRequired>
      <h1>Calendar</h1>
      <MaintenanceAlert />
      <Calendar />
    </Layout>
  );
};

export default CalendarPage;
