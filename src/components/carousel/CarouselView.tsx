import React, { useEffect, useState } from "react";
import BearCarousel, { TBearSlideItemDataList } from "bear-react-carousel";
import "bear-react-carousel/dist/index.css";
import clicasaApi from "../../api/clicasaApi";

interface ReferentialsResponse {
  text: string;
  name: string;
}

export const CarouselView = () => {
  const [referentials, setReferentials] = useState<ReferentialsResponse[]>([]);

  const getReferentials = async () => {
    try {
      const res = await clicasaApi.get<ReferentialsResponse[]>(
        `/referentials/get`
      );
      console.log(res.data);
      setReferentials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReferentials();
  }, []);

  const bearSlideItemData: TBearSlideItemDataList = referentials.map(
    (referential, index) => {
      return {
        key: index,
        children: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={require("../../assets/referential-image.png")}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: 20,
                backgroundColor: "#f8f8f8",
                width: "100%",
              }}
            >
              <img
                src={require("../../assets/comillas.png")}
                style={{
                  width: "15%",
                  objectFit: "cover",
                  position: "absolute",
                  marginTop: -10,
                  marginLeft: 20,
                }}
              />
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontStyle: "italic",
                  color: "#008bcf",
                  fontSize: 20,
                  marginLeft: "30px",
                  zIndex: 999,
                }}
              >
                {referential.text}
              </span>
              <span
                style={{
                  marginTop: 10,
                  marginBottom: 30,
                  marginLeft: "30px",
                  zIndex: 999,
                }}
              >
                {referential.name}
              </span>
            </div>
          </div>
        ),
      };
    }
  );
  return (
    <BearCarousel
      style={{ width: "100%", height: "470px" }}
      data={bearSlideItemData}
      isEnablePagination
    ></BearCarousel>
  );
};
