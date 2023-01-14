const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked) classes += "-o";
    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={props.onLike}
      ></i>
    );
  };
  export default Like;