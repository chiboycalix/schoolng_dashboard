import React from 'react';
import { Table, Form } from 'antd';
import './styles.scss';
import { userContext } from "../../contexts/userContext";
import { dataMap } from '../../utils/helpers/dataMap';
import { usersColumns } from '../../utils/columns/users';
import UsersCard from '../../components/Cards/Users';
import OnlineUsersCard from '../../components/Cards/OnlineUsers';
import { SearchField } from '../../components/FormFields'

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [recordPage, setRecordPage] = React.useState(1);
  const [recordPageSize, setRecordPageSize] = React.useState(10);
  const { getUsers } = userContext();
  const [loading, setLoading] = React.useState(false)
  const [onlineUserLoading, setOnlineUserLoading] = React.useState(false);
  const [onlineUsers, setOnlineUsers] = React.useState([])
  const [row, setRow] = React.useState({});
  const inputSize = 'large';
  const [searchValue, setSearchValue] = React.useState('');
  const [form] = Form.useForm();

  const fetchUsers = async () => {
    setLoading(true)
    const users = await getUsers();
    users.on('value', snap => {
      const users = snap.val();
      const usersList = dataMap(users);
      setUsers(usersList)
      setLoading(false)
    });
  }

  const fetchOnlineUsers = async () => {
    setOnlineUserLoading(true)
    const users = await getUsers();
    users.on('value', snap => {
      const users = snap.val();
      const usersList = dataMap(users);
      const onlineUsers = usersList && usersList.filter((onlineUser) => {
        return onlineUser['Online status']?.isOnline === true
      })
      setOnlineUsers(onlineUsers)
      setOnlineUserLoading(false)
    });
  }

  React.useEffect(() => {
    fetchUsers();
    fetchOnlineUsers()
  }, [recordPage, recordPageSize]);

  const data = users && users.map((user) => {
    return {
      ...user,
      email: user?.Profile?.email,
      dept: user?.Profile?.dept,
      username: user?.Profile?.username,
      institution: user?.Profile?.institution,
      dateJoined: user?.Profile?.dateJoined
    }
  })

  const searchResult = users && users.filter(user => user.Profile?.username.toLowerCase().includes(searchValue.toLowerCase()))
  const currentPosts = searchResult && searchResult

  const descendingSort = currentPosts && currentPosts.sort((a, b) => (b.Profile.date_joined - a.Profile.date_joined))

  const onFinish = (value) => {
    if (searchValue.length > 0) {
      setSearchValue(value)
      // setRoll(1)
    } else {
      setSearchValue(value)
      // setRoll(roll)
    }

  }

  console.log({ row })
  return (
    <div className="users-wrapper">
      <div className="users-header">
        <UsersCard loading={loading} count={users?.length} />
        <OnlineUsersCard loading={onlineUserLoading} count={onlineUsers?.length} />
        <div>
          <Form
            form={form}
            onFinish={onFinish}
            hideRequiredMark
            layout="vertical"
          >
            <div>
              {
                SearchField(inputSize, null, false)
              }
            </div>
          </Form>

        </div>
      </div>
      <div className="table-wrapper">

        <Table
          rowKey="dateJoined"
          columns={usersColumns()}
          loading={loading}
          dataSource={data}
          scroll={{ x: 800 }}
          size="small"
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRow(record)
                // setVisible(true)
              },
            };
          }}

          pagination={{
            showSizeChanger: true,
            total: users?.length,
            position: 'both',
            onShowSizeChange: (current, size) => {
              setRecordPage(current);
              setRecordPageSize(size);
            },
            onChange: (page, pageSize) => {
              setRecordPage(page);
              setRecordPageSize(pageSize);
            },
            pageSizeOptions: ['10', '15', '20', '25'],
            showTotal: (total, range) => `${range[0]} - ${range[1]} of ${total} record(s)`,
          }}
        />

      </div>
    </div>
  )
}

export default Users;