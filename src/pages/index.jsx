import React from "react";
import Layout from "../components/Layout";
import { Card } from "../components/Card";
import { WithRouter } from "../utils/Navigation";

function Home() {
  return (
    <Layout>
      {/* <div className="grid grid-cols-3"> */}
      <Card />
      {/* </div> */}

      <p>as</p>
    </Layout>
  );
}

export default WithRouter(Home);
