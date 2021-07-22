import React from "react";
import RoomReviews from "../../../components/admin/RoomReviews";
import Layout from "../../../components/layout/Layout";
import { getSession } from "next-auth/client";

const RoomReviewsPage = () => {
  return (
    <Layout title="Room Reviews">
      <RoomReviews />
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

export default RoomReviewsPage;
