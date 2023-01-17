import React, { memo } from "react";
type objProps = {
  id: number;
  subjects: string;
};
type emailProps = {
  email: string;
};
type marksProps = {
  marks: number[];
  books: objProps[];
  inpref: React.RefObject<HTMLInputElement>;
  stdEmail: emailProps[];
  submitFun: () => void;
};
const Marks = (props: marksProps) => {
  console.log("hiiii");
  return (
    <div>
      <div className="col-5 m-auto border p-4 mt-3">
        <h3>Marks Array</h3>
        {props.marks.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className="col-5 m-auto border p-4 mt-3">
        <h3>Books Array</h3>
        {props.books.map((item) => {
          return (
            <>
              <p>
                id:{item.id},subject:{item.subjects}
              </p>
            </>
          );
        })}
      </div>
      <div className="col-5 m-auto border p-4 mt-3">
        <h3>Users email-id</h3>
        <input ref={props.inpref} />
        <button onClick={props.submitFun}>Submit</button>
        <p>
          {props.stdEmail.map((item) => {
            console.log(item);
            return (
              <>
                <p>{item.email}</p>
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default memo(Marks);
