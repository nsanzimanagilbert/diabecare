import "./Blog.css";
import tushar from "../../img/TusharIcon.png";
import React from 'react'

function BlogBox(props) {
  return (
    <div className="blogBox col-12">
      <div className="row">
        <div className="col-12 col-md-3 blogDetails">
          <div className="imgContainer">
            <img src={tushar} alt="tushar"></img>
          </div>{" "}
          <div className="blogIntro">
            {" "}
            <a
              href="https://dev.to/tusharjain0022"
              className="readButton link"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Tushar Jain</h2>
            </a>{" "}
            <p className="date">{props.date}</p>
            <div className="tags d-none d-lg-block">
              <p
                style={{
                  fontSize: "12px",
                  color: " #FFFFFF",
                  fontWeight: "300",
                  background: "#4A3699",
                  borderRadius: "3px",
                  width: "auto",
                  height: "auto",
                  padding: "0px 19px",
                  display: "inline-block",
                  marginBottom: "5px",
                }}
              >
                #{props.tag1}
              </p>
              <br></br>
              <p
                style={{
                  fontSize: "12px",
                  color: "#4A3933",
                  fontWeight: "500",
                  background: "#F2E355",
                  borderRadius: "3px",
                  width: "auto",
                  height: "auto",
                  padding: "0px 19px",
                  display: "inline-block",
                  marginBottom: "5px",
                }}
              >
                #{props.tag2}
              </p>
              <br></br>
              <p
                style={{
                  fontSize: "12px",
                  color: "#5AFFEB",
                  fontWeight: "300",
                  background: "#1E212D",
                  borderRadius: "3px",
                  width: "auto",
                  height: "auto",
                  padding: "0px 19px",
                  display: "inline-block",
                  marginBottom: "5px",
                }}
              >
                #{props.tag3}
              </p>
              <br></br>
              <p
                style={{
                  fontSize: "12px",
                  color: " #FFFFFF",
                  fontWeight: "300",
                  background: "#369940",
                  borderRadius: "3px",
                  width: "auto",
                  height: "auto",
                  padding: "0px 19px",
                  display: "inline-block",
                  marginBottom: "5px",
                }}
              >
                #{props.tag4}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 blogText">
          <p className="d-lg-none">
            <span
              style={{
                fontSize: "12px",
                color: " #FFFFFF",
                fontWeight: "300",
                background: "#4A3699",
                borderRadius: "3px",
                width: "auto",
                height: "auto",
                padding: "0px 19px",
                display: "inline-block",
                margin: "5px",
              }}
            >
              #{props.tag1}
            </span>

            <span
              style={{
                fontSize: "12px",
                color: "#4A3933",
                fontWeight: "500",
                background: "#F2E355",
                borderRadius: "3px",
                width: "auto",
                height: "auto",
                padding: "0px 19px",
                display: "inline-block",
                margin: "5px",
              }}
            >
              #{props.tag2}
            </span>

            <span
              style={{
                fontSize: "12px",
                color: "#5AFFEB",
                fontWeight: "300",
                background: "#1E212D",
                borderRadius: "3px",
                width: "auto",
                height: "auto",
                padding: "0px 19px",
                display: "inline-block",
                margin: "5px",
              }}
            >
              #{props.tag3}
            </span>

            <span
              style={{
                fontSize: "12px",
                color: " #FFFFFF",
                fontWeight: "300",
                background: "#369940",
                borderRadius: "3px",
                width: "auto",
                height: "auto",
                padding: "0px 19px",
                display: "inline-block",
                margin: "5px",
              }}
            >
              #{props.tag4}
            </span>
          </p>
          <a
            className="link"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{props.title}</h3>
          </a>
          <h5 style={{textTransform:"none"}}>{props.intro}</h5>
          <a
            className="readButton link"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            Read Full Blog
          </a>
          <p
            style={{
              fontWeight: "300",
              fontSize: "14px",
              color: "#0F4C75",
              display: "inline-block",
              marginLeft: "15px",
            }}
          >
            {" "}
            {props.readTime} min read time
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogBox;
