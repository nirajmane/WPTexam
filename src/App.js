import { useState } from "react";

export default function App() {
  return (
    <div>
      <Header />
      <InputData />
      <Output />
    </div>
  );
}

function Header() {
  const [studentname, change] = useState("By- (Niraj Mane JH) (210940520049)");
  const [appname, change1] = useState("MyChatApp");

  return (
    <div className="container-fluid">
      <div className="row bg-secondary align-items-center">
        <div className="fw-bold fs-2 mb-2 mt-2 text-light col-3">{appname}</div>
        <div className="col text-light fs-small">{studentname}</div>
      </div>
    </div>
  );
}

function InputData() {
  const [msg, changemsg] = useState("");

  const checkmsg = (e) => {
    const newmsg = e.target.value;
    changemsg(newmsg);
  };

  const [list, setmsg] = useState([]);

  const sendmsg = () => {
    const newdata = msg;
    const btmsg = [newdata, ...list];
    setmsg(list);
    changemsg("");
  };

  return (
    <div className="container-fluid row justify-content-center">
      <div>
        <input
          className="col w-75 mt-5 h-35 fs-3 btn-btnoutline-primary"
          type="text"
          name=""
          id=""
          value={msg}
          onChange={checkmsg}
          placeholder="Lets Chat here.. "
        />
        <input
          className="ms-2 w-20 h-35"
          type="button"
          value="Send"
          onClick={sendmsg}
        />
      </div>
    </div>
  );
}

function Output() {
  return (
    <div className="mt-2  fs-3 row">
      <div className="mb-2 ms-2 me-5 alert-secondary ">Hii</div>
      <div className="row mb-2 alert-secondary justify-content-end">Hello</div>
      <div className="mb-2 alert-secondary ">Whats App...</div>
      <div className="row mb-2 alert-secondary justify-content-end">
        All good,
      </div>
      <div className="mb-2 alert-secondary ">All the best</div>
    </div>
  );
}
