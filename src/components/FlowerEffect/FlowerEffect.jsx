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
            {/* blink  */}
            <div class="flowerBlink flowerBlink1"></div>
            <div class="flowerBlink flowerBlink2"></div>
            <div class="flowerBlink flowerBlink3"></div>
            <div class="flowerBlink flowerBlink4"></div>
            <div class="flowerBlink flowerBlink5"></div>
            <div class="flowerBlink flowerBlink6"></div>
            <div class="flowerBlink flowerBlink7"></div>
            <div class="flowerBlink flowerBlink8"></div>
            <div class="canhHoa canhHoa1"></div>
            <div class="canhHoa canhHoa3"></div>
            <div class="canhHoa canhHoa2"></div>
          </div>
          <div class="thanHoa">
            <div class="laThanHoa laThanHoa1"></div>
            <div class="laThanHoa laThanHoa2"></div>
            <div class="laThanHoa laThanHoa3"></div>
            <div class="laThanHoa laThanHoa4"></div>
            <div class="laThanHoa laThanHoa5"></div>
            <div class="laThanHoa laThanHoa6"></div>
          </div>
        </div>
        {/* hoa 2 */}
        <div class="flower flower2">
          <div class="allCanhHoa allCanhHoa2">
            {" "}
            {/* blink  */}
            <div class="flowerBlink flowerBlink1"></div>
            <div class="flowerBlink flowerBlink2"></div>
            <div class="flowerBlink flowerBlink3"></div>
            <div class="flowerBlink flowerBlink4"></div>
            <div class="flowerBlink flowerBlink5"></div>
            <div class="flowerBlink flowerBlink6"></div>
            <div class="flowerBlink flowerBlink7"></div>
            <div class="flowerBlink flowerBlink8"></div>
            <div class="canhHoa canhHoa1"></div>
            <div class="canhHoa canhHoa3"></div>
            <div class="canhHoa canhHoa2"></div>
          </div>
          <div class="thanHoa">
            <div class="laThanHoa laThanHoa1"></div>
            <div class="laThanHoa laThanHoa2"></div>
            <div class="laThanHoa laThanHoa3"></div>
            <div class="laThanHoa laThanHoa4"></div>
            <div class="laThanHoa laThanHoa5"></div>
            <div class="laThanHoa laThanHoa6"></div>
          </div>
        </div>
        {/* hoa 3  */}
        <div class="flower flower3">
          <div class="allCanhHoa allCanhHoa3">
            {" "}
            {/* blink  */}
            <div class="flowerBlink flowerBlink1"></div>
            <div class="flowerBlink flowerBlink2"></div>
            <div class="flowerBlink flowerBlink3"></div>
            <div class="flowerBlink flowerBlink4"></div>
            <div class="flowerBlink flowerBlink5"></div>
            <div class="flowerBlink flowerBlink6"></div>
            <div class="flowerBlink flowerBlink7"></div>
            <div class="flowerBlink flowerBlink8"></div>
            <div class="canhHoa canhHoa1"></div>
            <div class="canhHoa canhHoa3"></div>
            <div class="canhHoa canhHoa2"></div>
          </div>
          <div class="thanHoa">
            <div class="laThanHoa laThanHoa1"></div>
            <div class="laThanHoa laThanHoa2"></div>
            <div class="laThanHoa laThanHoa3"></div>
            <div class="laThanHoa laThanHoa4"></div>
            <div class="laThanHoa laThanHoa5"></div>
            <div class="laThanHoa laThanHoa6"></div>
          </div>
        </div>
        <div class="growPlant" style={{ "--d": "1.2s" }}>
          <div class="longPlant">
            <div class="longPlantTop"></div>
            <div class="longPlantBottom"></div>
          </div>
        </div>
        {/* CỎ  */}
        <div class="growingGrass">
          <div class="grass grass1">
            <div class="grassTop"></div>
            <div class="grassBottom"></div>
            <div class="grassLeaf grassLeaf1"></div>
            <div class="grassLeaf grassLeaf2"></div>
            <div class="grassLeaf grassLeaf3"></div>
            <div class="grassLeaf grassLeaf4"></div>
            <div class="grassLeaf grassLeaf5"></div>
            <div class="grassLeaf grassLeaf6"></div>
            <div class="grassLeaf grassLeaf7"></div>
            <div class="grassLeaf grassLeaf8"></div>
            {/* phủ  */}
            <div class="grassOverlay"></div>
          </div>
        </div>
        {/* bên phải  */}
        <div class="growingGrass">
          <div class="grass grass2">
            <div class="grassTop"></div>
            <div class="grassBottom"></div>
            <div class="grassLeaf grassLeaf1"></div>
            <div class="grassLeaf grassLeaf2"></div>
            <div class="grassLeaf grassLeaf3"></div>
            <div class="grassLeaf grassLeaf4"></div>
            <div class="grassLeaf grassLeaf5"></div>
            <div class="grassLeaf grassLeaf6"></div>
            <div class="grassLeaf grassLeaf7"></div>
            <div class="grassLeaf grassLeaf8"></div>
            {/* phủ  */}
            <div class="grassOverlay"></div>
          </div>
        </div>
        {/* =====  */}
        <div class="growPlant" style={{ "--d": "2.4s" }}>
          <div class="grassRight grassRight1">
            <div class="leaf"></div>
          </div>
        </div>
        <div class="growPlant" style={{ "--d": "2.8s" }}>
          <div class="grassRight grassRight2">
            <div class="leaf"></div>
          </div>
        </div>
        {/* ==========  */}
        <div class="growPlant" style={{ "--d": "2.8s" }}>
          <div class="grassFront">
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper1">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper2">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper3">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper4">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper5">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper6">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper7">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLeaf-wrapper grassFrontLeaf-wrapper8">
              <div class="grassFrontLeaf"></div>
            </div>
            <div class="grassFrontLine"></div>
          </div>
        </div>
        {/* =================  */}
        <div class="growPlant" style={{ "--d": "3.2s" }}>
          <div class="grassFront1">
            <div class="leaf"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-1"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-2"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-3"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-4"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-5"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-6"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-7"></div>
            <div class="grassFrontLeaf1 grassFrontLeaf1-8"></div>
          </div>
        </div>
        {/* ======================  */}
        <div class="longGrass longGrass0">
          <div class="growPlant" style={{ "--d": "3s" }}>
            <div class="leaf leaf0"></div>
          </div>
          <div class="growPlant" style={{ "--d": "2.2s" }}>
            <div class="leaf leaf1"></div>
          </div>
          <div class="growPlant" style={{ "--d": "3.4s" }}>
            <div class="leaf leaf2"></div>
          </div>
          <div class="growPlant" style={{ "--d": "3.6s" }}>
            <div class="leaf leaf3"></div>
          </div>
        </div>
        {/* ==================================  */}
        <div className="longGrass longGrass1">
          <div className="growPlant" style={{ "--d": "3.6s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.8s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* ======================================  */}
        <div className="longGrass longGrass2">
          <div className="growPlant" style={{ "--d": "4s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.4s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.6s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* =============================  */}
        <div className="longGrass longGrass3">
          <div className="growPlant" style={{ "--d": "4s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.6s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* =======  */}
        <div className="longGrass longGrass4">
          <div className="growPlant" style={{ "--d": "4s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.6s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* ====== */}
        <div className="longGrass longGrass5">
          <div className="growPlant" style={{ "--d": "4s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.6s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* ========  */}
        <div className="longGrass longGrass6">
          <div className="growPlant" style={{ "--d": "4.2s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.4s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.6s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "4.8s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* =======  */}
        <div className="longGrass longGrass7">
          <div className="growPlant" style={{ "--d": "3s" }}>
            <div className="leaf leaf0"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.2s" }}>
            <div className="leaf leaf1"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.5s" }}>
            <div className="leaf leaf2"></div>
          </div>
          <div className="growPlant" style={{ "--d": "3.6s" }}>
            <div className="leaf leaf3"></div>
          </div>
        </div>
        {/* ====  */}
      </div>
    </div>
  );
}
export default FlowerEffect;
