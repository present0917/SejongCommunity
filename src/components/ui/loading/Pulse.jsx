import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import ReactModal from "react-modal";

function Pulse(props) {
  if (props.isLoading) {
    console.log(props.children);
  }
  return (
    <>
      <ReactModal
        isOpen={props.isLoading}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
          },
          content: {
            outline: "none",
            padding: 0,
            width: 0,
            height: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
          },
        }}
        ariaHideApp={false}
      >
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backdropFilter: "blur(100%)",
          }}
        >
          <PulseLoader
            color="#C63DEE"
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
          <p
            style={{
              marginTop: "40px",
              color: "rgb(1B1D1D)",
              fontWeight: "bold",
            }}
          >
            {props.children}
          </p>
        </div>
      </ReactModal>
    </>
  );
}
export default Pulse;
