import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/spinner";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetch = async () => {
    const fetchResult = await axios.get(
      "https://api.github.com/users/upes-open/repos"
    );
    var fetchData = fetchResult.data;
    // console.log(fetchData);
    // console.log(fetchData[0].name);
    // fetchData = Object.keys(fetchData);

    setData(fetchData);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetch();
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <main className="page-about">
      <div className="container">
        <section className="page-header">
          <h1>Projects</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Projects</Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="py-5 mb-5">
          <div className="container">
            <div className="row">
              {data.map((result) => (
                <div className="col-lg-4 mb-4">
                  <div className="card project-card border-primary active">
                    <div className="card-body">
                      <h3 className="mb-1">{result.name}</h3>
                      <p className="mb-4">{result.description}</p>

                      <a
                        className="btn btn-primary btn-rounded"
                        href={result.html_url}
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Projects;
