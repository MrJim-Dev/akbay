import Link from "next/link";
const About = () => {
  return (
    <section id="about">
      {/* About Shortcode */}
      <div className="fn_cs_about">
        <div className="left_part">
          <div className="img">
            <div className="img_in" data-bg-img="/img/about/about2.jpeg">
              <img src="/img/about/about2.jpeg" alt="" />
            </div>
          </div>
          <div className="bg_overlay">
            <div className="bg_color" />
            <div className="bg_image" data-bg-img="/img/about/about.jpeg" />
          </div>
        </div>
        <div className="right_part">
          <div className="right_in">
            <h3 className="fn__maintitle" data-text="Akbay: Your partner in change">
              Akbay: Your partner in change
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                At Akbay, we believe that real change begins with collaboration. We are a platform united by the spirit of Bayanihan, creating bridges between those in need and those who wish to give.
              </p>
              <p>
                With every peso you share, you bring hope closer to communities that need it most. From individuals facing personal battles to organizations promoting education, health, and livelihood, Akbay facilitates stories of compassion and unity.
              </p>
              <p>
                Founded in 2023, Akbay has grown with the support of thousands of Filipinos at home and abroad. Our mission is to provide not just financial support but also to strengthen community bonds and nurture the culture of helping.
              </p>
              <p>
                Join us. Let's uphold the spirit of Akbay — an embrace for every Filipino in need. A step forward, together, for a better future for all.
              </p>
           
            </div>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Join our community</span>
            </a>
          </div>
        </div>
      </div>
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="Start Your Campaign">
              Start Your Campaign
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                At Akbay, we believe in the power of collective action to uplift lives and strengthen communities. Our platform is designed to turn your advocacy into action, enabling you to create meaningful change through community support. Here's what makes us different:
</p>
              <p>
                Personalized Support
                Every campaign is unique, and so is our approach to helping you. Our team is dedicated to providing personalized guidance to ensure your campaign is set up for success.
</p>
              <p>
                Secure & Transparent
                Security and transparency are at the heart of what we do. With Akbay, you can be assured that every contribution is accounted for and reaches those who need it most.
</p>
              <p>
                Community Driven
                Akbay is built on the principle of 'Bayanihan,' the Filipino spirit of communal unity and cooperation. We thrive on the connections made within our community of change-makers and supporters.
</p>
              <p>
                Impactful Storytelling
                We recognize the power of a well-told story. That's why we offer tools and tips to help you share your narrative in the most impactful way, resonating with donors and inspiring action.
              </p>
              
            </div>
            <Link href="/nft-single">
              <a className="metaportal_fn_button">
                <span>Start Your Campaign</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p>Identify Your Cause</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p>Create Your Campaign</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p>Verify Your Identity</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p>Share Your Story</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            <div className="fn_cs_video">
              <img src="/img/video/1.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=OxibrkSZVLs"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="The Rise of Legends">
            The Rise of Legends
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </p>
            <p>
              The artwork has been hand-drawned by Robert Green in the
              traditional anime style and composited by Layla Efiyo.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find us On Discord</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/2.jpg" />
        </div>
      </div>
      <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">10,000</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total Items in Collection"
        >
          Total Items in Collection
        </h3>
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {`don't`} look even slightly
          believable.
        </p>
      </div>
    </div>
    <div className="fn_cs_video bg">
      <div className="abs_img" data-bg-img="/img/video/1.jpg" />
      <a
        className="popup-youtube"
        href="https://www.youtube.com/watch?v=OxibrkSZVLs"
      >
        <img src="/svg/play.svg" alt="" className="fn__svg" />
      </a>
    </div>
    <div className="container">
      {/* Steps Shortcode */}
      <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>Connect your Wallet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>Select Your Quantity</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>Confirm The Transaction</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>Receive Your {`NFT’s`}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Steps Shortcode */}
      <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="Join Our Community">
            Join Our Community
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
          <div className="buttons">
            <a
              href="https://opensea.io/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Buy On Opensea</span>
            </a>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhiteList Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
