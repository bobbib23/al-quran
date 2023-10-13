import { useState, useEffect } from "react";
import { Container, Card, Row, Col, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getAudio, getSuratApi } from "../Redux/Actions/ActionGetAudio";
import { useDispatch, useSelector } from "react-redux";

interface Surat {
  namaLatin: string;
  arti: string;
  jumlahAyat: number;
  tempatTurun: string;
  nomor: number;
}

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { idsurat } = useParams();

  useEffect(() => {
    dispatch<any>(getAudio(idsurat));
    dispatch<any>(getSuratApi());
    setLoading(false);
  }, [idsurat]);

  const dataSurat = useSelector((state: any) => state.GetSuratReducer.surat);
  return (
    <>
      <Container>
        <div>
          {loading ? (
            <div className="text-center mt-5">
              <ProgressBar animated now={65} />
            </div>
          ) : (
            <Row>
              {dataSurat.map((s: Surat) => (
                <Col key={s.nomor} md={4} style={{ marginBottom: "20px" }}>
                  <Card>
                    <Card.Title className="text-center bg-light pt-2 pb-2 mb-2">
                      <Link to={`surat/${s.nomor}/${s.namaLatin.toLowerCase()}`} className="text-decoration-none text-dark">
                        Surat {s.namaLatin}
                      </Link>
                    </Card.Title>
                    <Card.Text className="text-center mb-4" style={{ height: "75px" }}>
                      Surat {s.namaLatin} Memiliki arti {s.arti} di dalam surat ini terdapat {s.jumlahAyat} Ayat
                    </Card.Text>

                    <Link to={`surat/${s.nomor}/${s.namaLatin.toLowerCase()}`} className="btn btn-success">
                      <b>Baca Sekarang</b>
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
}

export default Home;
