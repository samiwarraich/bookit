import React from "react";
import UpdateRoom from "../../../components/admin/UpdateRoom";
import Layout from "../../../components/layout/Layout";
import { getSession } from "next-auth/react";

const UpdateRoomPage = () => {
  return (
    <Layout title="Update Room">
      <UpdateRoom />
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

export default UpdateRoomPage;
