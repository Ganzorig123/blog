import { Media, Image } from "react-bootstrap";

export default () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src="logo.jpg"
      alt="Generic placeholder"
    />

    <Media.Body>
      <h5 className="font-weight-bold mb-0">1234.mn - Онлайн видео сургалт</h5>
      <p className="welcome-text">
        Бид програмчлалын техник технологийн чиглэлээр төрөл бүрийн сонирхолтой
        мэдээллүүдийг боловсруулж блогоор хүргэж байна Шүү дээ хөө.
      </p>
    </Media.Body>
  </Media>
);
