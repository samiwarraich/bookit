import React from "react";
import AllRooms from "../../../components/admin/AllRooms";
import Layout from "../../../components/layout/Layout";
import { getSession } from "next-auth/client";

const AllRoomsPage = () => {
  return (
    <Layout title="All Rooms">
      <AllRooms />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default AllRoomsPage;
