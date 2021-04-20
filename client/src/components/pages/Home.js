import React from "react";
import { connect } from "react-redux";
import WelcomeCard from "../WelcomeCard";

const Home = () => {
  return (
    <>
      <div className="flex space-x-3">
        <WelcomeCard />
        <div className="min-w-0 flex-1" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
