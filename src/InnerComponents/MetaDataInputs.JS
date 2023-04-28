import React from "react";

function MetaDataInputs() {

    const metadataFields = [{
        Name:"Token Image",
        inputName:"tokenImage_input",
        toolTipTitle:"",
        onChangeEvent: (event) =>{
            
        }
    }]

  return (
    <div>
      <div className="flex flex-col gap-3 token_image">
        <label htmlFor="tokenImage_input" className="flex gap-1 text-xl">
          Token Image
          <span>*</span>
          <sub>
            <Tooltip title="Add" placement="right-end">
              {infoIcon()}
            </Tooltip>
          </sub>
        </label>
        <input
          ref={fileInputRef}
          className="rounded px-3"
          type="file"
          name="tokenImage_input"
          onChange={(event) => setTokenImage(event.target.files)}
          hidden
        />
        <button
          className="file_input w-28 h-28 rounded-xl flex justify-center items-center text-3xl"
          onClick={() => {
            fileInputRef.current.click();
          }}
        >
          {" "}
          +{" "}
        </button>
        <div className="image_name">{tokenImage && tokenImage}</div>
      </div>
    </div>
  );
}

export default MetaDataInputs;
