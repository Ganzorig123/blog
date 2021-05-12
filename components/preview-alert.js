import { Alert } from "react-bootstrap";

export default () => {
  return (
    <Alert variant="danger">
      Анхаар та PREVIEW горимд байна!{" "}
      <Alert.Link href="/api/preview-exit">энд дарж </Alert.Link> энэ горимоос
      гарна уу
    </Alert>
  );
};
