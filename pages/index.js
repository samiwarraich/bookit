import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";
import Script from "next/script";

const Index = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ req, query, store }) => {
    await store.dispatch(
      getRooms(req, query.page, query.location, query.guests, query.category)
    );
  }
);

export default Index;
