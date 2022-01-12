import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//import  { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Axios from "axios";

export default function Home() {
  const [name, setName] = useState("");

  const [roomForm, setRoomForm] = useState({
    room_name: "",
    room_id: "",
    room_password: "",
    ytUrl: "",
    map: "",
    mode: "",
    match_time: "",
  });

  const [roomErrorState, setRoomErrorState] = useState({
    room_nameError: "",
    room_idError: "",
    room_passwordError: "",
    match_timeError: "",
  });

  useEffect(() => {
    console.log(roomForm);
  }, [roomForm]);

  const createRoom = (e) => {
    e.preventDefault();
    console.log("submited");
    console.log(roomForm);

    Axios.post("https://mongocurd.herokuapp.com/create", roomForm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("ERROR IS " + err.message);
      });
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">FF ROOMS BY IDO</a>
        </h1>
      </main>

      {/* <div className="rsform"> */}
      <div>
        <Form onSubmit={createRoom}>
          <div className="row">
  
              <label style={{ backgroundColor: "lavender" }}>ROOM NAME </label>
              <input
                type="text"
                value={roomForm.room_name}
                onChange={(e) => {
                  setRoomForm({ ...roomForm, room_name: e.target.value });
                }}
              />
            
              <label style={{ backgroundColor: "lavender" }}>ROOM ID</label>
              <input
                type="number"
                value={roomForm.room_id}
                onChange={(e) => {
                  setRoomForm({ ...roomForm, room_id: e.target.value });
                }}
              />{" "}

          </div>

          <Col>
            <Row>
                 
                <label style={{ backgroundColor: "lavender" }}>ROOM PASSWORD </label>
                <input
                  type="password"
                  value={roomForm.room_password}
                  onChange={(e) => {
                    setRoomForm({ ...roomForm, room_password: e.target.value });
                  }}
                /> </Row>
              
               <Row>
                <label style={{ backgroundColor: "lavender" }}>YOUTUBE URL </label>
                <input
                  type="text"
                  value={roomForm.ytUrl}
                  onChange={(e) => {
                    setRoomForm({ ...roomForm, ytUrl: e.target.value });
                  }}
                />
              {/* </Form.Group> */}
            </Row>
          </Col>

          <Col>
            <Row md={6}>
              <Form.Group className="mb-9" controlId="formBasicEmail">
                <label style={{ backgroundColor: "lavender" }}>ROOM MODE </label>
                <input
                  type="text"
                  value={roomForm.mode}
                  onChange={(e) => {
                    setRoomForm({ ...roomForm, mode: e.target.value });
                  }}
                />

                <label style={{ backgroundColor: "lavender" }}>MAP NAME </label>
                <input
                  type="text"
                  value={roomForm.map}
                  onChange={(e) => {
                    setRoomForm({ ...roomForm, map: e.target.value });
                  }}
                />

                <label style={{ backgroundColor: "lavender" }}>MATCH TIME </label>
                <input
                  type="text"
                  value={roomForm.match_time}
                  onChange={(e) => {
                    setRoomForm({ ...roomForm, match_time: e.target.value });
                  }}
                />
              </Form.Group>
            </Row>
          </Col>
          <input type="submit"  />
        </Form>

        <Link href="/displayrooms"  text-align= "center"><a>Display Rooms</a></Link>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://francefaraz.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <h3>IDO</h3>
        </a>
      </footer>
    </div>
  );
}
