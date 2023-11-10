import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollToTopButtom from "../../components/ScrollToTopButtom"


function Home() {
  function filteredCategory() {
    const categoryVideo = categories.map((category, index) => {

      return {
        category: category,
        video: {
          id: filterCategory(index).map((video) => video.id),
        }
      }
 
    })  

    const filterVideos = categoryVideo.filter((cv) => {
      return cv.video.id.length
    })

    return (

      filterVideos.map((category) =>
        <Category category={category}>
          <Carousel>
            {category.id.map((video) => <Card id={video.id} key={video.id} />)}
          </Carousel>
        </Category>
      )


    )

  }
  // filteredCategory()

  return (
    <>
    <ScrollToTopButtom />
      <Header />
      <Banner image="ouvir" />
      <Container>


        {categories.map((category, index) =>
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => <Card id={video.id} key={video.id} />)}
            </Carousel>
          </Category>
        )}


      </Container>
      <Footer />
    </>
  );
}

export default Home;
