import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { ReactDOM } from "react-dom";
function Content() {
  return (
    <div>
      <h3 className="align h3">
        1987 Porsche 944 S Coupe{" "}
        <a href="#">
          {" "}
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
          </svg>
        </a>
      </h3>
      <span className="align">
        5-Speed Manual, Recent Engine Rebuild, Mostly Unmodified, Reviewed by
        Doug DeMuro
      </span>
      <span className="Share ">
        <a className="Share link" href="#">
          Share{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
          </svg>
        </a>
      </span>
      <div className="grid-container">
        <div className="item1">
          <a href="#">
            <img
              className="fimg"
              src={require("../images/Exterior/ext1.jpeg")}
            />
          </a>
        </div>
        <div className="item2">
          <a href="#">
            <img
              className="img"
              src={require("../images/Exterior/ext2.jpeg")}
            />
          </a>
        </div>
        <div className="item3">
          <a href="#">
            <img
              style={{ borderTopRightRadius: "9px" }}
              className="img"
              src={require("../images/Exterior/ext3.jpeg")}
            />
          </a>
        </div>
        <div className="item4">
          <a href="#">
            <img
              className="img"
              src={require("../images/Exterior/ext4.jpeg")}
            />
          </a>
        </div>
        <div className="item5">
          <a href="#">
            <img
              className="img"
              src={require("../images/Exterior/ext5.jpeg")}
            />
          </a>
        </div>
        <div className="item6">
          <a href="#">
            <img
              className="img"
              src={require("../images/Interior/int1.jpeg")}
            />
          </a>
        </div>
        <div className="item7">
          <a href="#">
            <img
              className="img"
              src={require("../images/Interior/int2.jpeg")}
            />
          </a>
        </div>
        <div className="item8">
          <a href="#">
            <img
              className="img"
              src={require("../images/Interior/int3.jpeg")}
            />
          </a>
        </div>
        <div className="item9">
          <a href="#">
            <img
              style={{ borderBottomRightRadius: "9px" }}
              className="img"
              src={require("../images/Interior/int4.jpeg")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Content;
