// 注意：有用default的話匯入的時候就不用加大括號，沒有用default的話就要加大括號
import Profiles1 from "./Profile1.js";
import Profiles2 from "./Profile2.js";
import Profiles3 from "./Profile3.js";

export default function Gallery() {
  return (
    <section className="gallery">
        <div className="gallery-container">
            <Profiles1 />
            <Profiles2 />
            <Profiles3 />
        </div>
    </section>

  );
}