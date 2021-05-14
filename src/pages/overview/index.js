import React from 'react';
import UsersCard from '../../components/Cards/Users';
import InstitutionsCard from '../../components/Cards/Institutions';
import GroupsCard from '../../components/Cards/Groups';
import PagesCard from '../../components/Cards/Pages';
import MaterialsCard from '../../components/Cards/Materials';
import GistsCard from '../../components/Cards/Gists';
import Bar from '../../components/Charts/Bar';
import Line from '../../components/Charts/Line';
import Pie from '../../components/Charts/Pie';
import './styles.scss';
import { overviewColumns, dataSource } from '../../utils/columns/overview';
import { issuesColumns } from '../../utils/columns/issues';
import { Table } from 'antd';
import { FiMoreVertical } from 'react-icons/all'
import firebaseInstance, { firestore } from '../../firebase';
import { dataMap } from '../../utils/helpers/dataMap';

const Overview = () => {
  const [row, setRow] = React.useState({});
  const [recordPage, setRecordPage] = React.useState(1);
  const [recordPageSize, setRecordPageSize] = React.useState(10);
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [usersRecord, setUsersRecord] = React.useState();
  const [institutionsRecord, setInstitutionsRecord] = React.useState();
  const [groupsRecord, setGroupsRecord] = React.useState();
  const [pagesRecord, setPagesRecords] = React.useState();
  const [materialsRecord, setMaterialsRecords] = React.useState();
  const [gistsRecord, setGistsRecords] = React.useState();
  const [campaingsRecord, setCampaignRecords] = React.useState()
  const [issueRecords, setIssuesRecord] = React.useState();
  const [issuesLoading, setFetchIssuesLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      // user data
      const users = await firebaseInstance.database().ref().child("Users");
      users.on('value', snap => {
        const users = snap.val();
        const userList = dataMap(users)
        setUsersRecord(userList);
        setLoading(false);
      });

      // Institution data
      const institutions = await firebaseInstance.database().ref().child("Institutions")
      institutions.on('value', snap => {
        const institutions = snap.val();
        const institutionsList = dataMap(institutions)
        setInstitutionsRecord(institutionsList);
      })

      // Gists data
      const groups = await firebaseInstance.database().ref().child("Group").child("General")
      groups.on('value', snap => {
        const groups = snap.val();
        const groupsList = dataMap(groups)
        setGroupsRecord(groupsList)
      })

      // pages data
      const pages = await firebaseInstance.database().ref().child("Categories for page and group")
      pages.on('value', snap => {
        const pages = snap.val();
        const pageLists = dataMap(pages)
        setPagesRecords(pageLists)
      })

      // materials
      const materials = await firestore.collection("Materials").doc("Category").collection("General").get()
      const materialsLists = [];
      materials.forEach(doc => {
        materialsLists.push(doc.data())
      });
      setMaterialsRecords(materialsLists);

      // gists
      const gists = await firestore.collection("All Gist").get()
      var gistsList = []
      gists.forEach(doc => {
        gistsList.push(doc.data())
      })
      setGistsRecords(gistsList)

      // campaingns

      const campaigns = await firebaseInstance.database().ref().child("CAMPAIGN")
      campaigns.on('value', snap => {
        const campaigns = snap.val();
        const campaignsList = dataMap(campaigns)
        setCampaignRecords(campaignsList)
      })
    }
    fetchData()
  }, []);

  React.useEffect(() => {
    const fetchIssues = async () => {
      try {
        setFetchIssuesLoading(true)
        const issues = await firebaseInstance.database().ref().child("Users Issues")
        issues.on('value', snap => {
          const issues = snap.val();
          const issuesList = dataMap(issues)
          setIssuesRecord(issuesList)
        })
        setFetchIssuesLoading(false)

      } catch (error) {
        setFetchIssuesLoading(false)
      }
    }
    fetchIssues()
  }, [recordPage, recordPageSize])

  return (
    <div className="overview-wrapper">
      <div className="overview-cards-wrapper">
        <UsersCard loading={loading} count={usersRecord?.length} />
        <InstitutionsCard loading={loading} count={institutionsRecord?.length} />
        <GistsCard loading={loading} count={gistsRecord?.length} />
        <PagesCard loading={loading} count={pagesRecord?.length} />
        <MaterialsCard loading={loading} count={materialsRecord?.length} />
        <GroupsCard loading={loading} count={groupsRecord?.length} />
      </div>
      <div className="overview-campaign-text"><h1>Campaign</h1></div>

      <div className="overview-campaing-engaging-gists">
        <div className="campaign-wrapper">
          <div className="table-wrapper">
            <div className="table-header">
              <div className="table-header-left">
                <FiMoreVertical />
                <span>Student Ambassador</span>
              </div>
              <div className="table-header-right">
                <input type="text" />
              </div>
            </div>
            <Table
              rowKey="key"
              columns={overviewColumns()}
              loading="loading"
              dataSource={dataSource}
              scroll={{ x: 800 }}
              size="small"
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    setRow(record)
                    setVisible(true)
                  },
                };
              }}

              pagination={{
                showSizeChanger: true,
                total: 10,
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

        <div className="most-engaging-gists-wrapper">
          most engagin gists

        </div>
      </div>

      <div className="charts-section">
        <div className="bar-chart">
          <Bar />
        </div>
        <div className="pie-and-line">
          <div className="pie-chart">
            <Pie />
          </div>
          <div className="line-chart">
            <Line />
          </div>
        </div>
      </div>

      <div className="app-issues-section">
        <Table
          rowKey="id"
          columns={issuesColumns()}
          loading={loading}
          dataSource={issueRecords}
          scroll={{ x: 800 }}
          size="small"
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRow(record)
                setVisible(true)
              },
            };
          }}

          pagination={{
            showSizeChanger: true,
            total: issueRecords?.length,
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

export default Overview