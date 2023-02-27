import "./share.css";

const Share = () => {
  return (
    <div className="share">
      hey it is share
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input placeholder="what is on your mind" className="shareInput" />
        </div>
        <div className="shareBottom"></div>
      </div>
    </div>
  );
};

export default Share;
