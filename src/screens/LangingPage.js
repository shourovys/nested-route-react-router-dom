import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../components/Main";

const rootStyle = {
  textAlign: "center",
};
const insuranceDiv = {
  display: "inline-grid",
  width: "20%",
  border: "1px solid lightgray",
  margin: "1rem 1%",
  padding: "0 1%",
  height: "200px",
};

const insurances = [
  {
    title: "Auto Insurance",
    description:
      "Auto insurance is designed to protect yourself and others agains many various risks",
  },
  {
    title: "Life Insurance",
    description:
      "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
  },
  {
    title: "Travel Insurance",
    description:
      "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
  },
  {
    title: "Health Isurance",
    description:
      "Health is the most important thing that we should protect. Health insurance will take care of medical expenses.",
  },
];

export default function LandingPage() {
  const { path, url } = useRouteMatch();
  const Card = () => (
    <div>
      <div>
        {insurances.map((insurance, i) => (
          <Link to={`${url}/main`}>
            <div style={insuranceDiv} key={i}>
              <h3>{insurance.title}</h3>
              <p>{insurance.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <Layout>
        <div style={rootStyle}>
          <h1>Smart way to buy insurance.</h1>
          <div className="tabs">
            <Switch>
              <Route path={`${path}`} exact component={Card} />
              <Route path={`${path}/main`} component={Main} />
            </Switch>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
