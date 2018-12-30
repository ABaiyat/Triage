import { connect } from "react-redux";
import RegisterComponent from "./RegisterComponent";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => {
  const { simpleReducer } = state;
  return { simpleReducer };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

export default RegisterContainer;
