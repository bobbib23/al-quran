import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { GET_SURAT } from "../Auth/authApi";
import Audioku from "../Components/Audioku";
import { useDispatch } from "react-redux";
import { getAudio } from "../Redux/Actions/ActionGetAudio";

interface Surat {
  nama_latin: string;
  arti: string;
  jumlah_ayat: number;
  nomorAyat: number;
  tempatTurun: string;
  nomor: number;
  deskripsi: string;
  teksArab: string;
  teksLatin: string;
  idsurat: string;
  audioFull: string;
  audio: string;
}

function SingleSurat() {
  const { idsurat } = useParams<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSingleSurat, setSingleSurat] = useState<Surat[]>([]);
  const [decSurat, setDec] = useState<any>({});
  const [audi, setAudi] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getAPIsinglesurat = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${GET_SURAT}/${idsurat}`);
        setLoading(false);
        setSingleSurat(response.data.data.ayat);
        setAudi(response.data.data.audioFull);
        setDec(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setLoading(false);
      }
    };

    getAPIsinglesurat();
  }, [idsurat]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Surat {decSurat.namaLatin}</h2>
            <div dangerouslySetInnerHTML={{ __html: decSurat.deskripsi }}></div>
            <div>
              <Audioku audi={audi} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {loading ? (
              <div className="text-center mt-5">
                <ProgressBar animated now={65} />
              </div>
            ) : (
              <div>
                {dataSingleSurat.map((single) => (
                  <div key={single.nomorAyat}>
                    <div className="arab p-3" style={{ fontSize: "35px" }}>
                      <p className="m-3">{single.teksArab}۝</p>
                    </div>
                    <p style={{ fontSize: "22px" }}>
                      {single.nomorAyat}. {single.teksLatin}
                    </p>

                    <hr />
                  </div>
                ))}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleSurat;
