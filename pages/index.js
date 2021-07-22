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
      <Script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        // integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        // crossOrigin="anonymous"
        //strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        // integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        // crossOrigin="anonymous"
        //strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        // integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        // crossOrigin="anonymous"
        //strategy="beforeInteractive"
      />
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
