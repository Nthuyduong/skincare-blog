import React from "react";

const ModalLoading = ({ data }) => {
    // ví dụ khi click vào button cancel thì sẽ gọi hàm callback
    // ko cần thiết trong trường hợp loading, nhưng viết vào để tham khảo

    console.log(data);

    return (
        <>
            <span className="loader"></span>
            <div>{ data.message }</div>
        </>
        
    )
}

export default ModalLoading;