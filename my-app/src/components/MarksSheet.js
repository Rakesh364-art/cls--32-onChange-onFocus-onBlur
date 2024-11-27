import React, { useRef } from "react";

function MarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();
  let resultLabelRef = useRef();

  let firstNameResultLableRef = useRef();
  let lastNameResultLableRef = useRef();

  let telResultLabelRef = useRef();
  let hinResultLabelRef = useRef();
  let engResultLabelRef = useRef();
  let matResultLabelRef = useRef();
  let sciResultLabelRef = useRef();
  let socResultLabelRef = useRef();
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstNameInputRef}></input>
          <label ref={firstNameResultLableRef}> </label>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" ref={lastNameInputRef}></input>
          <label ref={lastNameResultLableRef}></label>
        </div>
        <div>
          <label>Telugu</label>
          <input
            type="number"
            ref={telInputRef}
            onFocus={() => {
              telInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = telInputRef.current.value;

              telResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              telResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              telInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={telResultLabelRef}></label>
        </div>
        <div>
          <label> Hindi</label>
          <input
            type="number"
            ref={hinInputRef}
            onFocus={() => {
              hinInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = hinInputRef.current.value;

              hinResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              hinResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              hinInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={hinResultLabelRef}></label>
        </div>
        <div>
          <label>English</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              engInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = engInputRef.current.value;

              engResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              engResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              engInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={engResultLabelRef}></label>
        </div>
        <div>
          <label>Maths</label>
          <input
            type="number"
            ref={matInputRef}
            onFocus={() => {
              matInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = matInputRef.current.value;

              matResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              matResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              matInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={matResultLabelRef}></label>
        </div>
        <div>
          <label>Science</label>
          <input
            type="number"
            ref={sciInputRef}
            onFocus={() => {
              sciInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = sciInputRef.current.value;

              sciResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              sciResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              sciInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={sciResultLabelRef}></label>
        </div>
        <div>
          <label>Social</label>
          <input
            type="number"
            ref={socInputRef}
            onFocus={() => {
              socInputRef.current.style.backgroundColor = "green";
            }}
            onChange={() => {
              let marks = socInputRef.current.value;

              socResultLabelRef.current.innerHTML =
                marks >= 35 ? "pass" : "fail";
              socResultLabelRef.current.style.backgroundColor =
                marks >= 35 ? "green" : "pink";
            }}
            onBlur={() => {
              socInputRef.current.style.backgroundColor = "";
            }}
          ></input>
          <label ref={socResultLabelRef}></label>
        </div>
        <div>
          <label ref={resultLabelRef}>result marks</label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let telMar = Number(telInputRef.current.value);
              let hinMar = Number(hinInputRef.current.value);

              let engMar = Number(engInputRef.current.value);

              let matMar = Number(matInputRef.current.value);
              let sciMar = Number(sciInputRef.current.value);
              let socMar = Number(socInputRef.current.value);
              let totalMarks =
                telMar + hinMar + engMar + matMar + sciMar + socMar;
              resultLabelRef.current.innerHTML = `${firstName} ${lastName} totalMarks are  ${totalMarks}`;

              alert(`${firstName} ${lastName} totalMarks are  ${totalMarks}`);
            }}
          >
            calcualte
          </button>
        </div>
      </form>
    </div>
  );
}

export default MarksSheet;
