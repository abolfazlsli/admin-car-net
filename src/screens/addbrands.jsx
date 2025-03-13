import { useState } from "react";   
import { createBrand } from "../network/api";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import React from "react";

const AddBrands = () => {
    const [feildsui , setFeildsui] = useState([]);
    const [datatosend , setDatatosend] = useState()
    const [pagedata , setPageData] = useState({
        brandname : "" ,
        feilds : []
    });
    const saveFeilds = () => {
        setPageData({...pagedata, feilds : feildsui});
    }
    const addFeildUi = () => {
        setFeildsui([...feildsui , (
            <div className="w-[100%] flex flex-col justify-center items-center rounded-lg p-[10px]">
                <div className="w-[100%]">
                    <InputText type="text" className="w-[100%]" placeholder="نام فیلد"  />
                </div>
                <div className="w-[100%] mt-[10px] mb-[10px]">
                    <Dropdown className="w-[100%]" placeholder="نوع فیلد" options={[
                        {
                            label : "متن",
                            value : "text"
                        },
                        {
                            label : "عدد",
                            value : "number"
                        },
                        {
                            label : "رنگ",
                            value : "color"
                        },
                    ]} />
                </div>
            </div>
        )]);
    }
    const sendHandler = async () => {
        const data = {
            brandname : pagedata.brandname
        }
        createBrand(data).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="flex justify-center items-center" >
            <div className="w-[80%] flex flex-col justify-start items-center rounded-lg p-[10px] shadow-lg">
                <div className="w-[100%] h-[50px] flex justify-end items-center rounded-lg">
                    <h1 className="text-xl font-bold text-right">
                        افزودن برند
                    </h1>
                </div>
                <div className="flex justify-start items-center w-[100%] pb-[10px]">
                        <h1 className="text-nowrap mr-[10px]">
                            نام برند
                        </h1>
                        <InputText type="text" className="w-[100%]" placeholder="نام برند" value={pagedata.brandname} onChange={(e) => setPageData({...pagedata, brandname : e.target.value})} />
                    </div>
                <div className="w-[100%] overflow-y-scroll h-[400px] flex flex-col justify-start items-center rounded-lg p-[10px]">
                    <div className="flex flex-col justify-start items-center w-[100%] p-[10px]">
                        {feildsui}
                        <Button type="primary" onClick={addFeildUi}>
                            افزودن فیلد
                        </Button>
                    </div>
                </div>
                <div className="flex justify-end items-center w-[100%] p-[10px]">
                        <Button type="primary" onClick={sendHandler} className="w-[100%]" label="ثبت" />
                </div>
            </div>
        </div>
    )
}

export default AddBrands;
