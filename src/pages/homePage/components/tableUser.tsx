import { useEffect, useRef, useState } from "react";
import { User } from "../../../type/user";
import { homeService } from "../../../services/homeServices";
import {
  Button,
  InputRef,
  Space,
  Table,
  TableColumnsType,
  TableColumnType,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import Input from "rc-input";
import { SearchOutlined } from "@ant-design/icons";

type DataIndex = keyof User;
function TableUser() {
  const [listUser, setListUser] = useState<User[]>([]);
  const getUser = async () => {
    try {
      const rq = await homeService.getAllUser();
      console.log(rq.data);
      setListUser(rq.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    console.log(searchText);
    console.log(searchedColumn);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<User> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });
  const columns: TableColumnsType<User> = [
    {
      title: "Name",
      dataIndex: "username",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("username"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: "20%",
      ...getColumnSearchProps("gender"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <div className="w-full">
      <Table columns={columns} dataSource={listUser} />
    </div>
  );
}

export default TableUser;
