import React from "react";

const Ingredient = () => {
    return (
        <div>
            <div className="container-fluid">
                {/*breadcrumb*/}
                <div className="flex self-center">
                    <ul className="flex">
                        <li><a href="src/pages/ingredient/ingredients#index.js">Home</a></li>
                        <li className="mx-2">/</li>
                        <li><a href="src/pages/ingredient/ingredients#index.js">Guides & Tutorials</a></li>
                    </ul>
                </div>
                {/**/}
                <div className="">
                    <div className="heading_3">Find an ingredient by its first letter:</div>
                    <div className="flex">
                        <div>A</div>
                        <div>A</div>
                        <div>A</div>
                        <div>A</div>
                        <div>A</div>
                    </div>
                    <div className="flex">
                        <div>B</div>
                        <div>B</div>
                        <div>B</div>
                        <div>B</div>
                        <div>B</div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
export default Ingredient;