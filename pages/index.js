import { Row, Col, Button } from "react-bootstrap";

import ListItem from "components/list-item";
import GridItem from "components/grid-item";
import Intro from "components/into";
import Layout from "components/layout";
import { getPagenatedPosts } from "lib/api";
import { usePosts } from "hooks/use-posts";
import { useSWRInfinite } from "swr";

const PAGE_LIMIT = 3;

export default function Home({ posts }) {
  // const { data, isLoading, error } = usePosts(posts);
  const { data, size, setSize } = useSWRInfinite(
    (index) => `/api/posts?page=${index}&limit=${PAGE_LIMIT}`
  );

  console.log("************", data);
  // if (error)
  //   return (
  //     <div>
  //       Алдаа гарлаа: <pre>{JSON.stringify(error, null, 2)}</pre>
  //     </div>
  //   );
  // if (isLoading) return <div>Ачаалж байна ...</div>;

  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <pre>{/*JSON.stringify(data, null, 2)*/}</pre>
      <Row className="mb-5">
        {data &&
          data.map((page) =>
            page.map((post) => (
              <Col md={12 / PAGE_LIMIT}>
                <GridItem post={post} />
              </Col>
            ))
          )}
      </Row>
      <div style={{ textAlign: "center" }}>
        {data && data[data.length - 1].length === PAGE_LIMIT && (
          <Button onClick={() => setSize(size + 1)}>Цааш нь</Button>
        )}
      </div>
    </Layout>
  );
}

//Static page анх Build хийх үед үүсэх json data
export const getStaticProps = async () => {
  const posts = await getPagenatedPosts(0, PAGE_LIMIT);

  return {
    props: { posts },
  };
};
