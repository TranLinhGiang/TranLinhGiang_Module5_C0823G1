import Sideba from "../Sideba/Sideba";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import * as Method from "../Method/Method";
import "../Header/Header";
import "../Footer/Footer";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
function EditSpotify() {
  const [spotify, setSpotify] = useState();
  const id = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const editSpotify = async () => {
      const post = await Method.getEditSpotify(id);
      setSpotify(post);
    };
    editSpotify();
  }, [id]);
  if (!spotify) {
    return null;
  }
  return (
    <>
      <Header />
      <div className="display">
        <div className="col-lg-3 sideba">
          <Sideba />
        </div>
        <div className="col-lg-9">
          <div className="display">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <Formik
                initialValues={{
                  id: spotify.id,
                  songName: spotify.songName,
                  singerName: spotify.singerName,
                  category: spotify.category,
                }}
                validationSchema={Yup.object({
                  songName: Yup.string()
                    .required("Tên bài hát không được để trống !")
                    .min(2, "Tên bài hát quá ngắn !")
                    .max(45, "Tên bài hát quá dài"),
                  singerName: Yup.string()
                    .required("Tên ca sĩ không được để trống !")
                    .min(2, "Tên ca sĩ quá ngắn !")
                    .max(45, "Tên ca sĩ quá dài !"),
                  category: Yup.string().required(
                    "Vui lòng chọn loại bài hát !"
                  ),
                })}
                onSubmit={(values) => {
                  const edit = async (spotify) => {
                    await Method.editSpotify(spotify);
                    navigate("/list");
                  };
                  edit(values);
                }}
              >
                <Form className="form-create">
                  <h2>Chỉnh sửa bài hát</h2>
                  <label>Tên bài hát</label>
                  <br />
                  <Field name={"songName"} className="field"></Field>
                  <ErrorMessage
                    className="errorMessage"
                    component={"span"}
                    name="songName"
                  ></ErrorMessage>
                  <br />
                  <label>Tên ca sĩ</label>
                  <br />
                  <Field name={"singerName"} className="field"></Field>
                  <ErrorMessage
                    className="errorMessage"
                    component={"span"}
                    name="singerName"
                  ></ErrorMessage>
                  <br />
                  <label>Loại </label>
                  <br />
                  <Field name={"category"} className="field"></Field>
                  <ErrorMessage
                    className="errorMessage"
                    component={"span"}
                    name="category"
                  ></ErrorMessage>
                  <br />
                  <br />

                  <button className="button-submit">Xong</button>
                </Form>
              </Formik>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EditSpotify;
