import React, { useState } from 'react'
import Custominput from '../components/Custominput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

function Addproduct() {

    const [desc, setDesc] = useState();

    const handleDesc = (e) => {
        console.log(e);
    };


    return (
        <div>
            <h3 className='mb-4 title'>Add product</h3>
            <div className=''>
                <form action=''>
                    <Custominput type="text" label="Enter product title" />
                    <div className='mb-3'>
                        <ReactQuill theme="snow" value={desc} onChange={(event) => {
                            handleDesc(event)
                        }} />
                    </div>
                    <Custominput type="number" label="Enter product price" />
                    <select name='' id='' className='form-control py-3 mb-3'>
                        <option>Select Brand</option>
                    </select>
                    <select name='' id='' className='form-control py-3 mb-3'>
                        <option>Select Category</option>
                    </select>
                    <select name='' id='' className='form-control py-3 mb-3'>
                        <option>Select Color</option>
                    </select>

                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                            band files
                        </p>
                    </Dragger>

                    <button className='btn btn-success border-0 rounded-3 my-5'>Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Addproduct