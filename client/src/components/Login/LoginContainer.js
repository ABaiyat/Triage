import { connect } from "react-redux";
import LoginComponent from "./LoginComponent";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => {
  const { simpleReducer } = state;
  return { simpleReducer };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
