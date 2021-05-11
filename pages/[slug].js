import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "components/layout";
import HighlightCode from "components/highlight-code";
import PostHeader from "components/post-header";
import { getAllPosts, getPagenatedPosts, getPostBySlug, urlFor } from "lib/api";

export default ({ post }) => {
  const router = useRouter();

  if (router.isFallback)
    return (
      <Layout>
        <div>Түр хүлээнэ үү!</div>
      </Layout>
    );

  return (
    <Layout>
      <Row>
        <Col md="12">
          <pre>{/*JSON.stringify(post, null, 2)*/}</pre>
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 600, h: 400, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

const serializers = {
  types: {
    code: (props) => (
      <HighlightCode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </HighlightCode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node.asset.url).width(500).url()} />
        <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div>
      </div>
    ),
  },
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPagenatedPosts(0, 4);
  const data = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths: data,
    fallback: true,
  };
};
