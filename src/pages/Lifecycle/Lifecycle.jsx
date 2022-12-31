import React, { Component } from "react";
import axios from "axios";

import Children from "./Children";
export default class Lifecycle extends Component {
  //snippet tao contructor: rconst
  constructor(props) {
    super(props);

    this.state = {
      // tao state posts de chua data tra ve tu api
      posts: [],
      // tao state userId de chua id cua user muon loc ra danh sach posts
      userId: null,
    };
    console.log("contructor run");
  }

  fetchPosts = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          userId: this.state.userId || null,
        },
      })
      .then((response) => {
        // call API thanh cong
        console.log(response.data);
        // goi setState de gan data cho state posts
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleMouseMove = (e) => {
    console.log(e);
  };
  // chay mot lan duy nhat sau lan render dau tien
  // thuong dung de xu ly callAPI, setState, setTimeout,..
  componentDidMount() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     // call API thanh cong
    //     console.log(response.data);
    //     // goi setState de gan data cho state posts
    //     this.setState({
    //       posts: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    console.log("componentDidMount run");
    this.fetchPosts();
    document.addEventListener("mousemove", this.handleMouseMove);
  }
  // chay sau lan render thu 2 tro di
  // thuong dung su dung gia tri state va props moi de thuc hien mot hanh dong nao do nhu:
  //  - su dung gia tri props moi de setState
  //  - su dung gia tri state/props moi de call api
  // ** neu setState trong componentDidUpdate bat buoc phai co dieu kien
  // componentDidUpdate cung cap 2 tham so lan luot la gia tri truoc khi thay doi cua props va state
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate run", this.state);
    // neu state userId bi thay doi => goi lai ham fetchPosts
    // ??: lam sao de kiem tra chi duy nhat state userId bi thay doi
    if (prevState.userId !== this.state.userId) {
      this.fetchPosts();
    }
  }
  //chay mot lan duy nhat truoc khi component bi huy bo
  componentWillUnmount() {
    console.log("componentWillUnmount run");
    document.removeEventListener("mousemove", this.handleMouseMove);
  }
  handleSelect = (postId) => {
    //postId : id cua user muon lay thong tin chi tiet
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    // tao state userId va setState
  };
  changeUser = (e) => {
    let { id, value } = e.target;
    // goi setState de lua value nay vao state userId
    this.setState({
      userId: value,
    });
  };
  render() {
    console.log("render run", this.state);
    return (
      <div>
        <Children userId={this.state.userId} />
        {/* select user */}
        <select name="" id="" className="ml-4" onChange={this.changeUser}>
          <option value="">Select User</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        {/* danh sach bai post */}
        <ul>
          {this.state.posts.map((post) => {
            return (
              <li key={post.id}>
                <span className="mr-2">{post.title}</span>
                <button onClick={() => this.handleSelect(post.id)}>
                  Chi tiet
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
