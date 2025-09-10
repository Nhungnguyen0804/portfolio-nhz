import "./Detail.css";
import { useParams } from "react-router-dom";
import Project from "../../layout/DefaultLayout/Project/Project";
import images from "../../assets/images/images";
import StarsEffect from "../../components/StartsEffect/StarsEffect";
function Detail() {
  const { project } = useParams(); // weathery | rebox | caro
  let src = null;
  let detail = null;
  let deploy = null;
  let local = null;
  let nameProject = null;
  let description = null;
  let role = null;
  let tech = null;
  let feature = null;
  let git = null;
  if (project === "weathery") {
    src = images.weathery;
    deploy = true;
    detail = false;

    nameProject = "Website Dự báo thời tiết - Weathery";
    description =
      "Đây là một dự án cá nhân hiển thị thông tin thời tiết hiện tại, chi tiết vị trí và các chỉ số thời tiết bằng dữ liệu lấy từ Weather API. Trang web cũng cung cấp dự báo thời tiết theo giờ trong ngày và dự báo 7 ngày, bao gồm nhiệt độ, lượng mưa và hướng gió. Dự án tập trung chủ yếu vào phát triển giao diện người dùng (frontend) và thiết kế UI.";
    role = "Frontend Developer";
    tech = "ReactJS";
    feature = `---- Tìm kiếm quốc gia và hiển thị thời tiết của quốc gia đó.
        ---- Hiển thị thời tiết hiện tại cùng thông tin vị trí chi tiết và các chỉ số thời tiết (độ ẩm, chỉ số UV, …).
        ---- Dự báo thời tiết theo giờ trong ngày hiện tại.
        ---- Dự báo 7 ngày với nhiệt độ, lượng mưa và hướng gió.
    `;
    git = "https://github.com/Nhungnguyen0804/weathery";
  } else if (project === "rebox") {
    src = images.rebox;
    deploy = true;
    detail = false;
    nameProject = "Website Trao đổi, thanh lý, mua bán đồ cũ - ReBox";
    description =
      "Rebox là một website cho phép học sinh trung học đăng tin để bán, trao đổi hoặc quyên góp các vật dụng đã qua sử dụng. Hệ thống hỗ trợ đăng tin, tham gia sự kiện, hiển thị thống kê và kiểm soát việc hiển thị thông tin liên lạc của người đăng.";
    role = "Fullstack Developer";
    tech = "Flask (Python) + HTML,CSS,JS + SQLite";

    feature = `Nhiệm vụ của tôi bao gồm:
    ---- Xây dựng các chức năng đăng ký, đăng nhập, quên mật khẩu, gửi OTP qua email, tạo báo cáo thống kê (người dùng, bài đăng) và quản lý tài khoản cá nhân (xem, chỉnh sửa, xóa hồ sơ).
    ---- Tạo các tính năng xem trước bài đăng, hiển thị bài đăng theo danh mục, lọc theo loại và ngày tạo, cũng như ẩn/hiện thông tin liên hệ.
    ---- Phát triển giao diện trang chủ và xây dựng phần front-end cho các chức năng được triển khai ở back-end.
    ---- Phân tích và thiết kế hệ thống: xây dựng sơ đồ DFD cấp 0, cấp 1 và cấp 2.`;
    git = "https://github.com/Nhungnguyen0804/PTTKHT_Project";
  } else if (project === "caro") {
    src = images.caro;
    local = true;
    detail = false;
    nameProject = "Trò chơi Caro - CaroGame";
    description =
      "Ứng dụng game cờ Caro cho phép thi đấu giữa người chơi với người chơi hoặc người chơi với máy, sử dụng thuật toán minimax để tính toán nước đi tối ưu cho máy";
    role = "Fullstack Developer";
    tech = "Python+PyGame";
    feature = `---- Lớp CaroGame chịu trách nhiệm quản lý và điều khiển trò chơi(logic của nước đi, kiểm tra điều kiện thắng, undo)
                ---- Các hàm tính toán điểm cho các nước đi , hàm minimax tìm nước đi tối ưu cho máy , chế độ chơi cờ Caro giữa người với người hoặc người với máy`;
    git = "https://github.com/Nhungnguyen0804/CaroGame";
  } else return <div>Chưa có thông tin chi tiết!</div>;
  return (
    <div className="detail ">
      <StarsEffect />
      <div className="detail-left">
        <Project
          src={src}
          projectName="Weathery - ReactJs Project"
          detail={detail}
          deploy={deploy}
          local={local}
          target="_blank"
          external="https://nhungnguyen0804.github.io/weathery/"
          internal={"/detail/weathery"}
        />
      </div>
      <div className="detail-right">
        <div className="general-title">Detail Project</div>
        <div className="detailRight-content">
          <h2 className="general-h2">Tên dự án: {nameProject}</h2>
          <div className="detail-marginBottom">
            💎 Mô tả:
            <br /> {description}
          </div>
          <div className="detail-marginBottom">💎 Vai trò: {role}</div>
          <div className="detail-marginBottom">
            💎 Công nghệ sử dụng: {tech}
          </div>
          <div
            className="detail-marginBottom"
            style={{ whiteSpace: "pre-line" }}
          >
            💎 Chức năng:
            <br />
            {feature}
          </div>

          <div className="detail-marginBottom">💎 Source Code: {git}</div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
