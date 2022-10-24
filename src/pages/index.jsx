import React from "react";
import Layout from "../components/Layout";
import { CardBtn } from "../components/Card";
import { WithRouter } from "../utils/Navigation";

function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <CardBtn />
        <CardBtn />
        <CardBtn />
        <CardBtn />
        <CardBtn />
        <CardBtn />
        <CardBtn />
        <CardBtn />
      </div>
    </Layout>
  );
}

export default WithRouter(Home);
