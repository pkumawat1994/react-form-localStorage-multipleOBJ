import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Group, TextInput, Checkbox } from "@mantine/core";

const ShowTable = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [mod, setMod] = useState({
    fullname: "",
    email: "",
    age: "",
    mobno: "",
    city: "",
    upid: null,
  });
  const [userData, setuserData] = useState([]);

  const deletItem = (id) => {
    alert(id);

    const data = JSON.parse(localStorage.getItem("register"));
    console.log(555555, data);
    const filtered = data.filter((item, i) => i !== id);
    console.log("filterrrrrrr", filtered);
    localStorage.setItem("register", JSON.stringify(filtered));
    setuserData(filtered);
  };
  const edit = (ele, i) => {
    setOpened(true);
    setMod({
      fullname: ele.fullName,
      email: ele.email,
      age: ele.age,
      mobno: ele.mobile,
      city: ele.city,
      upid: i,
    });
    // const data = {
    //   val: ele,
    //   id: i,
    // };
    // navigate("/register", { state: data });
  };
  useEffect(() => {
    const lenData = JSON.parse(localStorage.getItem("register"));
    console.log(lenData);
    setuserData(lenData);
  }, []);

  const handlechange = (e) => {
    console.log(e.target.value);
    setMod({ ...mod, [e.target.name]: e.target.value });
  };

  const update = (e) => {
    e.preventDefault();
    console.log(123654, mod);
    const lenData = JSON.parse(localStorage.getItem("register"));

    const data = {
      fullName: mod.fullname,
      email: mod.email,
      age: mod.age,
      mobile: mod.mobno,
      gender: lenData[mod.upid].gender,
      city: mod.city,
    };
    console.log("before up", lenData);

    lenData.splice(mod.upid, 1, data);
    console.log("after up", lenData);
    localStorage.setItem("register", JSON.stringify(lenData));
    setuserData(lenData);
    setOpened(false);
  };
  return (
    <>
      <div className="tableDiv">
        <h1>ShowTbal</h1>

        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          {/* Modal content */}
          <form>
            <TextInput
              onChange={(e) => handlechange(e)}
              value={mod.fullname}
              name="fullname"
              required
              label="FullNmae"
              placeholder="your@email.com"
            />
            <TextInput
              onChange={(e) => handlechange(e)}
              value={mod.email}
              name="email"
              required
              label="Email"
              placeholder="your@email.com"
            />
            <TextInput
              onChange={(e) => handlechange(e)}
              value={mod.age}
              name="age"
              required
              label="Age"
              placeholder="your@email.com"
            />
            <TextInput
              onChange={(e) => handlechange(e)}
              value={mod.mobno}
              name="mobno"
              required
              label="Mobile No"
              placeholder="your@email.com"
            />

            <TextInput
              onChange={(e) => handlechange(e)}
              value={mod.city}
              name="city"
              required
              label="City"
              placeholder="your@email.com"
            />

            <Group position="center" mt="md">
              <Button type="submit" onClick={(e) => update(e)}>
                Update
              </Button>
            </Group>
          </form>
        </Modal>

        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">AGE</th>
              <th scope="col">MOBILE</th>
              <th scope="col">GENDER</th>
              <th scope="col">CITY</th>
              <th colSpan={2} style={{ textAlign: "center" }}>
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {userData && userData ? (
              userData.map((ele, i) => {
                return (
                  <>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{ele.fullName}</td>
                      <td>{ele.email}</td>
                      <td>{ele.age}</td>
                      <td>{ele.mobile}</td>
                      <td>{ele.gender}</td>
                      <td>{ele.city}</td>
                      <td>
                        <button
                          onClick={() => deletItem(i)}
                          className="btn btn-danger"
                        >
                          DELETE
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => edit(ele, i)}
                        >
                          EDIT
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <h1>Loding....</h1>
            )}
          </tbody>
        </table>
        <Group position="center" mt="md">
          <Button type="submit" onClick={() => navigate("/")}>
            Add new data
          </Button>
        </Group>
      </div>
    </>
  );
};

export default ShowTable;
