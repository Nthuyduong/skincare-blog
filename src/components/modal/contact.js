import React from "react";

const ModalContact = ({ data }) => {
    // ví dụ khi click vào button cancel thì sẽ gọi hàm callback
    // ko cần thiết trong trường hợp loading, nhưng viết vào để tham khảo

    return (
        <div className="flex justify-center">
            <div>Contact</div>
            {/* { data?.message ? <div className="text-center">{ data?.message }</div> : null } */}
        </div>
        
    )
}

export default ModalContact;