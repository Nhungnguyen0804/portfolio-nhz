import { useEffect, useState } from "react";
import "./StarsEffect.css";

function StarsEffect() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const id = Date.now() + Math.random();
      const star = {
        id,
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "vh",
        size: Math.random() * 10 + 8 + "px",
      };
      setStars((prev) => [...prev, star]);

      // Xóa sau khi blink xong
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    };

    // Tạo dày hơn: mỗi 100ms một sao
    const interval = setInterval(createStar, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            fontSize: star.size,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

export default StarsEffect;
