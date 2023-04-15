import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/comment.css";

const Comment = () => {
  const [person, setPerson] = useState(null);
  const fetchData = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="comment">
      <div>
        {person === null ? <div> noting to show</div> : person.map((p)=>{return <div><p>{p.name}</p>
        <p></p></div>})}
        <p>name1</p>
        <p>email1</p>
      </div>
      <div>
        <p>name2</p>
        <p>email2</p>
      </div>
      <div>
        <p>name3</p>
        <p>email3</p>
      </div>
    </div>
  );
};

export default Comment;
