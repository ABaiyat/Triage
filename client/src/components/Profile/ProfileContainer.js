import { connect } from "react-redux";
import ProfileComponent from "./ProfileComponent";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => {
  const { simpleReducer } = state;
  return { simpleReducer };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default ProfileContainer;
