import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import ContentHeader from "../common/ContentHeader";
import { insertCategory } from "../../redux/actions/categoryAction";
import { connect } from "react-redux";

class AddOrEditCategory extends Component {
  onSubmitForm = (values) => {
    console.log(">>>>Form", values);

    const { navigate } = this.props.router;
    this.props.insertCategory(values, navigate);
  };

  render() {
    const { navigate } = this.props.router;
    return (
      <>
        <ContentHeader
          navigate={navigate}
          className="site-page-header"
          title="Add new Category"
        />

        <Form layout="vertical" className="form" onFinish={this.onSubmitForm}>
          <Row>
            <Col md={12}>
              <Form.Item label="Category ID" name="categoryId">
                <Input readOnly></Input>
              </Form.Item>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    min: 2,
                  },
                ]}
              >
                <Input></Input>
              </Form.Item>
              <Form.Item label="Status" name="status" initialValue={"0"}>
                <Select>
                  <Select.Option value="0">Visible</Select.Option>
                  <Select.Option value="1">In-Visible</Select.Option>
                </Select>
              </Form.Item>
              <Divider></Divider>
              <Button
                htmlType="submit"
                type="primary"
                style={{ float: "right" }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categoryReducer.category,
});

const mapDispatchToProps = {
  insertCategory,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddOrEditCategory)
);
