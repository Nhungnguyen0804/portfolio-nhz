import "./FlowerEffect.css";
import { useEffect } from "react";
function FlowerEffect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flower-wrapper not-loaded">
      <div class="night"></div>
      <div class="flowers">
        {/* những b hoa  */}
        {/* hoa 1 */}
        <div class="flower flower1">
          <div class="allCanhHoa allCanhHoa1">
            {" "}
            <div class="canhHoa canhHoa1"></div>
            <div class="canhHoa canhHoa3"></div>
            <div class="canhHoa canhHoa2"></div>
            {/* <div class="canhHoa canhHoa4"></div> */}
            <div class="nhiHoa"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FlowerEffect;
