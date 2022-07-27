import sales from "../assets/img/sales.png";
import stock from "../assets/img/stock.png";
import bank from "../assets/img/bank.png";
import churn from "../assets/img/churn.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import './style.css';

export const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="blogs">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="blog-bx wow zoomIn">
                        <h2>Blogs</h2>
                        <h6>Recent Our Blogs</h6>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item-blog">
                                <img src={sales} alt="sales" />
                                <h3>Sales Data Analysis</h3>
                                <h6>visualize sales data and predict future sales data based on past data</h6>
                                <button className="buttonblog"><a class="readmoretext" href="https://medium.com/@abizaregi21/sales-data-analysis-with-python-part-ii-f09ddf134f9d">Read More</a></button>
                            </div>
                            <div className="item-blog">
                                <img src={bank} alt="bank" />
                                <h3>Bank Customer Segmentation</h3>
                                <h6>visualize bank customer data and segment bank customers based on age and balance</h6>
                                <button className="buttonblog"><a class="readmoretext" href="https://medium.com/@abizaregi21/bank-customer-segmentation-with-kmeans-d9cf95e297c9">Read More</a></button>
                            </div>
                            <div className="item-blog">
                                <img src={stock} alt="stock" />
                                <h3>Analysis of Return Rate</h3>
                                <h6>visualize the return rate of a stock in the stock market and compare it with other stocks</h6>
                                <button className="buttonblog"><a class="readmoretext" href="https://medium.com/@abizaregi21/analysis-of-return-rate-stock-208e40b32979">Read More</a></button>
                            </div>
                            <div className="item-blog">
                                <img src={churn} alt="churn" />
                                <h3>Churn Customer Prediction</h3>
                                <h6>predic potential customer churn based on historical data from customers</h6>
                                <button className="buttonblog"><a class="readmoretext" href="https://medium.com/@abizaregi21/predicting-exited-churn-for-bank-customers-7d02a72ce510">Read More</a></button>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="bg1" />
        <img className="background-image-right" src={colorSharp2} alt="bg2" /> */}
    </section>
  )
}
