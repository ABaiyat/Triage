import { connect } from "react-redux";
import DashboardComponent from "./DashboardComponent";
import { simpleAction } from "../../actions/simpleAction";

const mapStateToProps = state => {
  const { simpleReducer } = state;
  return { simpleReducer };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);

export default DashboardContainer;
