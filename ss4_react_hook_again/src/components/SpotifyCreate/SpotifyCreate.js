import Header from "../Header/Header";
import Sideba from "../Sideba/Sideba";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import * as Method from "../Method/Method";
function CreateSpotify() {
  const navigate = useNavigate();

  const create = async (task) => {
    await Method.createSpotify(task);
    toast.success("Thêm mới thành công !");
    navigate("/list");
  };
  return (
    <>
      <Header />
      <div className="display">
        <div className="col-lg-3 sideba">
          <Sideba />
        </div>
        <div className="col-lg-9 test">
          <div className="display">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <Formik
                initialValues={{
                  songName: "",
                  singerName: "",
                  category:[],
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
                onSubmit={(value) => {
                  create(value);
                }}
              >
                <Form className="form-create">
                  <h2>Thêm mới bài hát</h2>
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

                  <button className="button-submit">Thêm</button>
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
export default CreateSpotify;
