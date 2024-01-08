import React from "react";

const ModalLoading = ({ data }) => {
    // ví dụ khi click vào button cancel thì sẽ gọi hàm callback
    // ko cần thiết trong trường hợp loading, nhưng viết vào để tham khảo

    return (
        <>
            <span className="loader"></span>
            { data?.message ? <div className="text-center">{ data?.message }</div> : null }
        </>
        
    )
}

export default ModalLoading;