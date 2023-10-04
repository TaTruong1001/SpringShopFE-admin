import React, { Component } from "react";
import withRouter from "../../helpers/withRouter";
import { Button, Modal, Space, Table, Tag } from "antd";
import ContentHeader from "../common/ContentHeader";
import Column from "antd/es/table/Column";
import {
  getCategories,
  clearCategoryState,
} from "../../redux/actions/categoryAction";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";

class ListCategory extends Component {
  constructor() {
    super();
    this.state = {
      // dataSource: [
      //   { categoryId: 1, name: "Java", status: 0 },
      //   { categoryId: 2, name: "JavaScript", status: 0 },
      //   { categoryId: 3, name: "Php", status: 1 },
      //   { categoryId: 4, name: "reactJS", status: 1 },
      //   { categoryId: 5, name: "Angular", status: 0 },
      // ],
      category: {},
    };
  }
  componentDidMount = () => {
    this.props.getCategories();
    console.log("Did Mount");
  };
  componentWillUnmount = () => {
    this.props.clearCategoryState();
    console.log("will in mount");
  };

  editCategory = (category) => {
    console.log(">>>category", category);
  };
  deleteCategory = () => {
    console.log(">>>delete category", this.state.category);
  };
  openDeleteConfirm = (category) => {
    this.setState({ ...this.setState, category: category });
    console.log(">>>category", category);

    const message = "Do you want to delete the category " + category.name;
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: message,
      onOk: this.deleteCategory,
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  render() {
    const { navigate } = this.props.router;
    const { categories } = this.props;
    console.log(">>>>category", categories);
    return (
      <>
        <ContentHeader
          navigate={navigate}
          className="site-page-header"
          title="List Category"
        />

        <Table dataSource={categories} size="small" rowKey="id">
          <Column
            title="Category ID"
            key="id"
            dataIndex="id"
            width={40}
            align="center"
          ></Column>
          <Column title="Name" key="name" dataIndex="name"></Column>
          <Column
            title="Status"
            key="status"
            dataIndex="status"
            width={80}
            render={(_, { status }) => {
              let color = "volcano";
              let name = "In-Visible";
              if (status === 0) {
                color = "green";
                name = "Visible";
              }
              return <Tag color={color}>{name}</Tag>;
            }}
          ></Column>
          <Column
            title="Action"
            key="action"
            width={150}
            align="center"
            render={(_, record) => (
              <Space size="middle">
                <Button
                  key={record.key}
                  type="primary"
                  size="small"
                  onClick={() => this.editCategory(record)}
                >
                  <EditOutlined style={{ marginRight: 8 }} /> Edit
                </Button>
                <Button
                  key={record.key}
                  type="primary"
                  danger
                  size="small"
                  onClick={() => this.openDeleteConfirm(record)}
                >
                  <DeleteOutlined style={{ marginRight: 8 }} /> Delete
                </Button>
              </Space>
            )}
          ></Column>
        </Table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categoryReducer.categories,
});

const mapDispatchToProps = {
  getCategories,
  clearCategoryState,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListCategory)
);
