import Link from "next/link";
import { useEffect } from "react";

const Campaign = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="campaigns">
      <div className="container">
        <h3
          className="fn__maintitle big mb-[50px]"
          data-text="Successful Campaigns"
          data-align="center"
        >
          Successful Campaigns
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation1.jpg"
                  />
                  <img src="/img/campaign/donation1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation1.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation2.jpg"
                  />
                  <img src="/img/campaign/donation2.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation2.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation3.jpg"
                  />
                  <img src="/img/campaign/donation3.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation3.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation4.jpg"
                  />
                  <img src="/img/campaign/donation4.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation4.jpg" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation5.jpg"
                  />
                  <img src="/img/campaign/donation5.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation5.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation6.jpg"
                  />
                  <img src="/img/campaign/donation6.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation6.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation1.jpg"
                  />
                  <img src="/img/campaign/donation1.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation1.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/campaign/donation2.jpg"
                  />
                  <img src="/img/campaign/donation2.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/campaign/donation2.jpg" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
           Akbay has proudly facilitated over 1,000+ campaigns, each with its unique story of hope, struggle, and triumph. These campaigns have brought together communities from across the nation, showcasing the strength of our collective support and the spirit of 'Bayanihan'.
          </p>
          <Link href="/collection">
            <a className="metaportal_fn_button">
              <span>See All Campaigns</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Campaign;
