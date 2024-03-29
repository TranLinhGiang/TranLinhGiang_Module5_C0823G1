import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/RadioGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik, Form, Field,useFormik, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import "./Medicals.css"
import React from 'react';
import * as Yup from 'yup';
function Medicals(){
    const formMedicals= useFormik(
        {
            initialValues:{
              họ_và_tên:"",
              số_hộ_chiếu_cmnd:"",
              năm_sinh: "",
              giới_tính: "",
              quốc_tịch:"",
              công_ty: "",
              bộ_phận_làm_việc: "",
              thẻ_bảo_hiểm_y_tế: [],
              tỉnh_thành: "",
              quận_huyện: "",
              phường_xã: "",
              số_nhà: "",
              số_điện_thoại: "",
              email: "",
              câu_hỏi_số_1:"",
              câu_hỏi_số_2: [],
              câu_hỏi_số_3: [],
                
            },
            onSubmit:( values) => {
              setTimeout(() => {
                toast("Thêm mới thành công")
                alert(JSON.stringify(values,null,2))
              },2000)
                
            },

        }
    );
    return(
    <>
    <div className='container hi'>
     <h1>Tờ khai y tế</h1>
 <Formik
  validationSchema={Yup.object({
    họ_và_tên:Yup.string()
    .required('vui lòng nhập họ và tên'),
    số_hộ_chiếu_cmnd:Yup.string()
    .required('vui lòng nhập số hộ chiếu'),
    năm_sinh:Yup.number('vui lòng nhập số')
    .min(1990),
    quốc_tịch:Yup.string()
    .required('vui lòng nhập quốc tịch'),
    tỉnh_thành:Yup.string()
    .required('vui lòng nhập tỉnh thành'),
    quận_huyện:Yup.string()
    .required('vui lòng nhập quận huyện'),
    phường_xã: Yup.string()
    .required('vui lòng nhập phường, xã'),
    số_điện_thoại:Yup.string()
    .required('vui lòng nhập số điện thoại'),
    email:Yup.string()
    .required('vui lòng nhập email')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  })}
 >

     <Form onSubmit={formMedicals.handleSubmit}>
        
     <label>Họ và tên</label><br/>
      <Field name='họ_và_tên'value={formMedicals.values.họ_và_tên} onChange={formMedicals.handleChange}></Field><br/>
      <ErrorMessage name='họ_và_tên' component='span' className='erros_message'/>

     <label>Số hộ chiếu/CMND</label><br/>
      <Field name='số_hộ_chiếu_cmnd' value={formMedicals.values.số_hộ_chiếu_cmnd} onChange={formMedicals.handleChange}></Field><br/>
      <ErrorMessage name='số_hộ_chiếu_cmnd' component='span' className='erros_message'/>

     <label>Năm sinh</label><br/>
      <Field name='năm_sinh'value={formMedicals.values.năm_sinh} onChange={formMedicals.handleChange}></Field><br/>
      <ErrorMessage name='năm_sinh' component='span' className='erros_message'/>

     <label>Giới tính</label>
     <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"

        defaultValue="female"
        name='giới_tính'>
        <FormControlLabel value="Nam" onChange={formMedicals.handleChange} control={<Radio />} label="Nam" />
        <FormControlLabel value="Nữ" onChange={formMedicals.handleChange} control={<Radio />} label="Nữ " />
      </RadioGroup><br/>

      <label>Quốc tịch</label><br/>
       <Field name='quốc_tịch'value={formMedicals.values.quốc_tịch} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='quốc_tịch' component='span' className='erros_message'/>

      <label>Công ty làm việc</label><br/>
       <Field name='công_ty'value={formMedicals.values.công_ty} onChange={formMedicals.handleChange}></Field><br/>

      <lable>Bộ phận làm việc</lable><br/>
       <Field name='bộ_phận_làm_việc' value={formMedicals.values.bộ_phận_làm_việc} onChange={formMedicals.handleChange}></Field><br/>

      <label>Có thẻ bảo hiểm y tế</label>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name='thẻ_bảo_hiểm_y_tế'>
        <FormControlLabel value="Có" onChange={formMedicals.handleChange} control={<Radio />} label="Có" />
        <FormControlLabel value="Không" onChange={formMedicals.handleChange} control={<Radio />} label="Không " />
      </RadioGroup><br/>
      <h4>Địa chỉ liên lạc tại Việt Nam</h4>

      <label>Tỉnh thành</label><br/>
       <Field name='tỉnh_thành' value={formMedicals.values.tỉnh_thành} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='tỉnh_thành' component='span' className='erros_message'/>

      <label>Quận/huyện</label><br/>
       <Field name='quận_huyện' value={formMedicals.values.quận_huyện} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='quận_huyện' component='span' className='erros_message'/>

      <label>Phường/xã</label><br/>
       <Field name='phường_xã' value={formMedicals.values.phường_xã} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='phường_xã' component='span' className='erros_message'/>

      <label>Số nhà, phố, tổ dân phố/ thôn/ đội</label><br/>
       <Field name='số_nhà' value={formMedicals.values.số_nhà} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='số_nhà' component='span' className='erros_message'/>

      <label>Điện thoại</label><br/>
       <Field name='số_điện_thoại' value={formMedicals.values.số_điện_thoại} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='số_điện_thoại' component='span' className='erros_message'/>


      <label>Email</label><br/>
       <Field name='email' value={formMedicals.values.email} onChange={formMedicals.handleChange}></Field><br/>
       <ErrorMessage name='email' component='span' className='erros_message'/>

      <h4>Trong vòng 14 ngày qua ,anh/chị <br/>có đến quốc gia/vùng lãnh thổ nào <br/>(Có thể đi qua nhiều quốc gia)</h4>
      <textarea name='câu_hỏi_số_1' onChange={formMedicals.handleChange}></textarea><br/>
      <h4>Trong vòng 14 ngày qua ,anh/chị <br/>có thấy xuất hiện dấu hiệu nào sau đây không</h4>

      <FormGroup>
      <FormControlLabel value="sốt" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="sốt" />
      <FormControlLabel value="ho" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="ho" />
      <FormControlLabel value="khó thở" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="khó thở" />
      <FormControlLabel value="viêm phổi" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="viêm phổi" />
      <FormControlLabel value="đau họng" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="đau họng" />
      <FormControlLabel value="mệt mỏi" name='câu_hỏi_số_2' onChange={formMedicals.handleChange} control={<Checkbox />} label="mệt mỏi" />
    </FormGroup>

    <h4>Trong vòng 14 ngày qua ,anh/chị có tiếp xúc với</h4>
    <FormGroup>
      <FormControlLabel value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19" name='câu_hỏi_số_3' onChange={formMedicals.handleChange} control={<Checkbox />} label="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19" />
      <FormControlLabel value="Người từ nước có bệnh COVID-19" name='câu_hỏi_số_3' onChange={formMedicals.handleChange} control={<Checkbox />} label="Người từ nước có bệnh COVID-19" />
      <FormControlLabel value="Người có biểu hiện ( Sốt, ho, khó thở, viêm phổi)" name='câu_hỏi_số_3' onChange={formMedicals.handleChange} control={<Checkbox />} label="Người có biểu hiện ( Sốt, ho, khó thở, viêm phổi)" />
    </FormGroup>
    <button className='btn btn-success'>Thêm</button>
     </Form>
     </Formik>
     </div>
     <ToastContainer/>
    </>
  )
}
export default Medicals;