import React, { Component } from "react";
// import PropTypes from "prop-types";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

class PhoneMain extends Component {
  id = 2;
  state = {
    phoneList: [
      { id: 0, name: "나", phone: "010-1111-1111" },
      { id: 1, name: "홍길동", phone: "010-2222-1111" }
    ]
  };

  // 진리의 원천(source of truth)
  // >>>>>>>>>>
  state = {
    my_value: ""
  };
  //   constructor(props) {
  //     super(props);
  //   }

  //   componentWillMount() {}

  //   componentDidMount() {}

  //   componentWillReceiveProps(nextProps) {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  //   componentWillUpdate(nextProps, nextState) {}

  //   componentDidUpdate(prevProps, prevState) {}

  //   componentWillUnmount() {}

  my_value_change = arg => {
    this.setState({ my_value: arg });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h2>My PHONE BOOK</h2>
        </header>
        <section>
          <PhoneInsert
            my_value={this.state.my_value}
            my_value_change={this.my_value_change}
          />
          <PhoneList
            phoneList={this.state.phoneList}
            name="홍길동"
            phone="12345"
            addr="서울특별시"
            my_value={this.state.my_value}
          />
        </section>
      </React.Fragment>
    );
  }
}

// PhoneMain.propTypes = {};

export default PhoneMain;
