import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/actionimp";
import Button from "react-bootstrap/esm/Button";

function Testpage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addCart, removeCart } = bindActionCreators(actionCreators, dispatch);
  console.log(state.cart);
  return (
    <div>
      <Button onClick={() => addCart(10)}>Add</Button>
      <div>
        <Button onClick={() => removeCart(10)}>Remove</Button>
      </div>
      {state.cart}
    </div>
  );
}

export default Testpage;
