import { useState } from "react";   
import { createBrand } from "../network/api";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import React from "react";

const AddBrands = () => {
    const [feildsui , setFeildsui] = useState([]);
    const [pagedata , setPageData] = useState({
        brandname : "" ,
        feilds : []
    });
    const saveFeilds = () => {
        setPageData({...pagedata, feilds : feildsui});
    }
    const addFeildUi = () => {
        setFeildsui([...feildsui , (
            <div className="w-[100%] h-[100px] flex flex-col justify-center items-center rounded-lg p-[10px]">
                <div className="flex justify-start items-center w-[100%] p-[10px]">
                    <h1 className="text-nowrap mr-[10px]">
                        نوع فیلد
                    </h1>
                    {/* <Select options={["text", "number", "date", "boolean", "select", "multi-select"]} value={pagedata.feilds[0].type} onChange={(e) => setPageData({...pagedata, feilds : [...pagedata.feilds, {type : e.value}]})} /> */}
                </div>
                <div className="flex justify-start items-center w-[100%] p-[10px]">
                    <InputText type="text" placeholder="نام فیلد"  />
                </div>
                <div className="flex justify-end items-center w-[100%] p-[10px]">
                    <Button type="primary" onClick={saveFeilds} label="افزودن" />
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
        <div>
            <div className="w-[100%] h-[100px] flex justify-end items-center rounded-lg p-[10px]">
                <h1 className="text-2xl font-bold text-right">
                    افزودن برند
                </h1>
            </div>
            <div className="w-[100%] overflow-y-scroll h-[400px] flex flex-col justify-start items-center rounded-lg p-[10px]">
                <div className="flex justify-start items-center w-[100%] p-[10px]">
                    <h1 className="text-nowrap mr-[10px]">
                        نام برند
                    </h1>
                    <InputText type="text" placeholder="نام برند" value={pagedata.brandname} onChange={(e) => setPageData({...pagedata, brandname : e.target.value})} />
                </div>

                <div className="flex flex-col justify-start items-center w-[100%] p-[10px]">
                    {feildsui}
                    <Button type="primary" onClick={addFeildUi}>
                        افزودن فیلد
                    </Button>
                </div>
                <div className="flex justify-end items-center w-[100%] p-[10px]">
                    <Button type="primary" onClick={sendHandler} className="w-[100%]" label="ثبت" />
                </div>
            </div>
        </div>
    )
}

export default AddBrands;
