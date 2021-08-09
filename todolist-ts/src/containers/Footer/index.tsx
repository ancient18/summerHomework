import { connect } from "react-redux";
import FooterUI from "../../component/Footer";
import { removeTodo, allAddTodo,allDeleTodo } from "../../redux/action";

function mapStateToProps(state:{[propName:string]:any}) {
  return { state: state };
}

function mapDispatchToProps(dispatch:any) {
  return {
    remove: () => {
      dispatch(removeTodo());
    },
    allAdd: () => {
      dispatch(allAddTodo());
    },
    allDele: () => {
        dispatch(allDeleTodo());
      },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterUI);
