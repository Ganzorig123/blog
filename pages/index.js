import { Row, Col } from "react-bootstrap";
import ListItem from "components/list-item";
import GridItem from "components/grid-item";
import Intro from "components/into";
import Layout from "components/layout";
import { getAllPosts } from "lib/api";

export default function Home({ posts }) {
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <pre>{/*JSON.stringify(posts, null, 2)*/}</pre>
      <Row className="mb-5">
        {/*<Col md="10">
              <ListItem />
              </Col>*/}

        {posts.map((post) => (
          <Col md="4">
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};
