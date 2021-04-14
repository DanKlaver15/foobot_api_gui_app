import React, { useEffect } from "react";
import { connect } from "react-redux";
import Avatar from "../Avatar";

const Home = ({ user }) => {
  return (
    <>
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <Avatar size={10} source={user.avatar} />
        </div>
        <div className="min-w-0 flex-1" />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Home);
