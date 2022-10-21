import Meter1 from "../assets/img/meter1.svg";
import Meter2 from "../assets/img/meter2.svg";
import Meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Arrow1 from "../assets/img/arrow1.svg";
import Arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import UserResearch from "../assets/img/user-research.svg"
import Strategy from "../assets/img/strategy.svg"
import DesignThinking from "../assets/img/design-thinking.svg"
import Workshop from "../assets/img/workshop.svg"
import Desktop from "../assets/img/desktop.svg"
import WireframeMobile from "../assets/img/wireframe-mobile.svg"
import WireframeDesktop from "../assets/img/wireframe-desktop.svg"
import Wireframe from "../assets/img/wireframe.svg"
import Wireflow from "../assets/img/wireflow.svg"
import Userflow from "../assets/img/userflow.svg"
import UsabilityTest from "../assets/img/usability-test.svg"
import Sitemap from "../assets/img/sitemap.svg"
import MobilePointer from "../assets/img/mobile-pointer.svg"
import Mobile from "../assets/img/mobile.svg"
import SampleResearch from "../assets/img/sample-research.svg"
import QualitativeResearch from "../assets/img/qualitative-research.svg"
import QuantitativeResearch from "../assets/img/quantitative-research.svg"
import Chart from "../assets/img/chart.svg"
import ProductManagement from "../assets/img/product-management.svg"
import JourneyMap from "../assets/img/journey-map.svg"

function Skills() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
			slidesToSlide: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 664 },
			items: 2,
			slidesToSlide: 2,
		},
		mobile: {
			breakpoint: { max: 664, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 class="unselectable">Skills</h2>
                        <p class="unselectable">I look at every interaction as an opportunity to learn from and of the people I meet.<br></br>I value well structured research, solid arguments, and clean design.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={UserResearch} alt="Image" />
                                <h5>UX Research</h5>
                            </div>
                            <div className="item">
                                <img src={UsabilityTest} alt="Image" />
                                <h5>Usability Test</h5>
                            </div>
                            <div className="item">
                                <img src={Strategy} alt="Image" />
                                <h5>UX Strategy</h5>
                            </div>
                            <div className="item">
                                <img src={UserResearch} alt="Image" />
                                <h5>UX Writing</h5>
                            </div>
                            <div className="item">
                                <img src={DesignThinking} alt="Image" />
                                <h5>Design Thinking</h5>
                            </div>
                            <div className="item">
                                <img src={MobilePointer} alt="Image" />
                                <h5>Mobile Prototype</h5>
                            </div>
                            <div className="item">
                                <img src={Wireframe} alt="Image" />
                                <h5>Wireframe</h5>
                            </div>
                            <div className="item">
                                <img src={JourneyMap} alt="Image" />
                                <h5>Journey Map</h5>
                            </div>
                            <div className="item">
                                <img src={Sitemap} alt="Image" />
                                <h5>Sitemap</h5>
                            </div>
                            <div className="item">
                                <img src={Chart} alt="Image" />
                                <h5>Data Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={Desktop} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={Workshop} alt="Image" />
                                <h5>UX Workshops</h5>
                            </div>
                            <div className="item">
                                <img src={ProductManagement} alt="Image" />
                                <h5>Product Management</h5>
                            </div>
                            <div className="item">
                                <img src={SampleResearch} alt="Image" />
                                <h5 class="unselectable">Sampling</h5>
                            </div>
                        </Carousel>
                        <p className="mobile">
                            ← swipe on mobile →
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <img
            className="background-image-left"
            src={colorSharp}alt="Image"
        />
    </section>
	);
}

export default Skills;
