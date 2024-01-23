import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {useEffect} from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom"
import * as React from 'react';
import "./CreateContact.css";
function CreateContact(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
      <Header/>
      
      <div className="body-form col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Link to={"/contactList"}>
                        <button className=" back btn btn-success">Trở về</button>
                    </Link>

                </div>
                <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 height">
                    <React.Fragment>
                        <h3>Thêm mới hợp đồng</h3>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Số hợp đồng"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Số tiền cọc trước"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <label>Ngày bắt đầu</label> <br/>
                            <input style={{width:'100%'}} type="date"></input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <label>Ngày kết thúc</label> <br/>
                            <input style={{width:'100%'}} type="date"></input>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="Tổng số tiền thanh toán"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12}>
                               <button className="save btn btn-success">Lưu</button>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
      <Footer/>
        </>
    )
}
export default CreateContact;